import Image from "next/image"

export default function Avatar({ notifications }) {

  return (
    <div className="relative rounded-full h-8 w-8 shadow-md">
        <span 
            title="Notifications"
            className="absolute -top-2 -left-2 z-20 bg-primary-600 text-base-100 rounded-full flex flex-col items-center justify-center text-sm  font-bold  h-5 w-5"
        >
            {notifications.length}
        </span>
        <Image 
            className="z-10 rounded-full"
            src="/avatar.png"
            fill
        />
    </div>
  )
}
