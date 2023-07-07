import Image from "next/image"
import Notifications from "../widgets/Notifications"

export default function Avatar() {

  return (
    <div className="relative rounded-full h-8 w-8 shadow-md">
        <div 
            title="Notifications"
            className="absolute -top-2 -left-2 z-20 "
        >
          <Notifications />
        </div>
        <Image 
            className="z-10 rounded-full"
            src="/avatar.png"
            fill
        />
    </div>
  )
}
