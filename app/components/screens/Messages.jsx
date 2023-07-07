import { messagesState } from "@/app/recoil/atoms"
import { useRecoilValue } from "recoil"

import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'

export default function Messages() {

  const messages = useRecoilValue(messagesState)

  const Icon = ({ state }) => {
    return (
      <span className="p-2 rounded-full text-base-600 shadow-md">
        {state ? <EnvelopeOpenIcon className="h-4 w-4" /> : <EnvelopeIcon className="h-4 w-4" />}
      </span>
    )
  }

  return (
    <ul className="flex flex-col space-y-2">
      {messages.map((message, i) => {
        const date = new Date()
        return (
          <li 
            key={i}
            className="relative flex flex-row items-center p-2 border-b border-base-600/20 space-x-4"
          >
            <Icon state={message.read} />
            <div className="flex flex-col">
              <div className="flex flex-row items-center space-x-2">
                <span className="font-semibold text-sm">{message.user}</span>
                <span className="text-sm font-light">{date.getHours()}:{date.getMinutes()} - {date.getMonth()}/{date.getDate()}/{date.getFullYear()}</span>
              </div>
              <p className="text-sm">{message.body}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
