import ModeToggle from "../widgets/ModeToggle"

export default function Settings() {
  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
        <span>
          Toggle Dark Mode
        </span>  
        <ModeToggle/>
      </div>
    </div>
  )
}
