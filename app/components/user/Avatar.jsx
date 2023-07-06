import Image from "next/image"

export default function Avatar() {
  return (
    <div className="relative rounded-full h-8 w-8 overflow-hidden shadow-md">
        <Image 
            src="/avatar.png"
            fill
        />
    </div>
  )
}
