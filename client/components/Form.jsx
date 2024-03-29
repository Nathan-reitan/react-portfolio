import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendInfo(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      submitted: false
    });
  }

  sendInfo(info) {
    fetch('/api/formSubmit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: info.firstName,
        lastName: info.lastName,
        phone: info.phone,
        email: info.email,
        company: info.company
      })
    })
      .then(response => response.json());
  }

  render() {
    return (
      <div className='formContainer'>
        {this.state.submitted
          ? <div>
            <h1>
                Thank you for submitting a form, we will reach out as soon as possible.
            </h1>
          </div>
          : <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" onChange={this.handleChange} required/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" onChange={this.handleChange} required/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.handleChange} required/>
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" onChange={this.handleChange} required/>
            </div>
            <input type="submit" value='submit' className='btn' />
          </form>
        }
      </div>
    );
  }

}
