import { Button } from '@hanzo/ui/primitives'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "What's new with Lux?",
    message: "What's new with Lux?"
  },
  {
    heading: 'Why is Lux growing rapidly?',
    message: 'Why is Lux growing rapidly?'
  },
  {
    heading: 'How does the Lux SDK work?',
    message: 'How does the Lux SDK work?'
  },
  {
    heading: 'Lux vs other blockchains',
    message: 'Lux vs other blockchains'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
