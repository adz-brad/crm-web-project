'use client'

import { useRecoilState } from "recoil"
import { popupState } from "@/app/recoil/atoms"

export default function Popup() {

    const [ { open, item }, setPopup ] = useRecoilState(popupState)

    if(open){
        return (
            <div className="fixed z-50 bg-base-500/70 top-0 left-0 h-screen w-screen">
                <div className="absolute bg-base-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100vh*0.9)] w-screen max-w-screen-xl shadow-lg rounded-sm">
                    
                </div>
            </div>
        )
    }
    else { return null }

}

/// ADD CLOSE BUTTON
