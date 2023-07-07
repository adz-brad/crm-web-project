import { messagesState } from "@/app/recoil/atoms"
import { useRecoilValue } from "recoil"

export default function Notifications() {
    const messages = useRecoilValue(messagesState)
    const unread = messages.filter(e => !e.read)
    return <span className="bg-primary-600 text-base-100 rounded-full flex flex-col items-center justify-center text-xs font-semibold h-5 w-5">{unread.length}</span>
}
