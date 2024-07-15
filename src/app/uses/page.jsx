import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'My Toolkit',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Toolkit"
      intro="Here's a list of the tools I use for development work."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Custom Build - Windows 10 Nvidia RTX 3060 GPU, 32 GB Ram">
            I built a custom computer which uses Windows 10 as the operating
            system an MSI motherboard, Nvidia RTX 3060 GPU, Intel(R) Core(TM)
            i9-9900K CPU, and has 32GB of RAM.
          </Tool>
          <Tool title='XB252Q 24.5" Display'>
            High DPI and refresh rate, built in speakers and aux port which make
            it easier if you use multiple machines to swap around sound to your
            speakers through your diplay port.
          </Tool>
          <Tool title="G815 Mechanical Keyboard">
            When you spend all day on a keyboard its important that every
            keypress feels satisfying!
          </Tool>
          <Tool title="S-Racer Office Chair">
            As someone who spends most of the day in a chair, I needed something
            to provide some back support...even though I am usually slouched in
            it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            There is typically an extension for anything you could be doing!
          </Tool>
          <Tool title="WSL">
            Windows Subsystem Linux is built into the Windows OS nowadays, it
            makes running a virtual linux environment extremely easy and allows
            you to build more complex web applications on a windows machine.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Photoshop">
            Adobe Photoshop is a great tool for editing images. If you
            can&apos;t afford the option{' '}
            <a href="htpps://photopea.com">photopea.com</a> is a great and free
            alternative.
          </Tool>
          <Tool title="Ilustrator">
            Adobe Illustrator is used for crafting custom svgs if you ever need
            to make a logo Illustrator is a great place to do so!
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
