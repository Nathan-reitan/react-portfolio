require('dotenv/config');
const express = require('express');
const nodemailer = require('nodemailer');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

async function main(guestInfo) {
  const transport = nodemailer.createTransport({
    host: 'reitanfamily.com',
    port: 465,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    },
    secure: true
  });

  const info = await transport.sendMail({
    from: '"Immanuel Living Contact Form" <nathan@reitanfamily.com>',
    to: 'nathanreitan@gmail.com',
    subject: 'Contact Form from: ' + guestInfo.name,
    text: `
      Name: ${guestInfo.name},
      Phone:  ${guestInfo.phone},
      Email:  ${guestInfo.email},
      Message:  ${guestInfo.company}
    `,
    html: `<ol>
            <li>Name: ${guestInfo.name},</li>
            <li>Phone:  ${guestInfo.phone},</li>
            <li>Email:  ${guestInfo.email},</li>
            <li>Message:  ${guestInfo.company},</li>
          </ol>`
  });
  // eslint-disable-next-line no-console
  console.log('Message send" %s', info.messageId);
  // eslint-disable-next-line no-console
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post('/api/rsvp', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  const guestInfo = { name, phone, email, message };

  main(guestInfo).catch(console.error);

  const params = [name, phone, email, message];
  const sql = `insert into "formSubmissions"("formId", "guest1Name", "guest1Meal", "guest1Allergies", "guest2Name", "guest2Meal", "guest2Allergies")
                  values (default, $1, $2, $3, $4, $5, $6)
                  returning *
                  `;

  db.query(sql, params)
    .then(response => response.rows[0])
    .then(data => res.status(201).send(data))
    .catch(err => {
      console.error(err);
      return res.status(500).send('An unexpected error has occurred');
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
