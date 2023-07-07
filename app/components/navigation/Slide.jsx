'use client'

import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'

import { slideState, messagesState } from "@/app/recoil/atoms"
import { useRecoilState, useRecoilValue } from "recoil"

import { useRef } from 'react'

import { useOnClickOutside } from 'usehooks-ts'

import Profile from '../screens/Profile'
import Messages from '../screens/Messages'
import Settings from '../screens/Settings'
import Notifications from '../widgets/Notifications'

export default function Slide() {

    const ref = useRef(null)

    const [ { open, item }, setSlide ] = useRecoilState(slideState)
    const notifications = useRecoilValue(messagesState)

    const options = ['Profile', 'Messages', 'Settings']

    useOnClickOutside(ref, () => setSlide({open: false, item: null}))

    return (

        <div 
            ref={ref} 
            className={`fixed ${open ? 'right-0' : '-right-full'} transition-all duration-300 flex flex-col h-full rounded-l-sm shadow-lg bg-base-100 p-4 w-[400px] text-base-900`}
        >
            <div className="flex flex-row items-center border-b pb-2 border-base-200">
                <div className="text-sm grid grid-cols-3 gap-4 grow mr-4">
                    {options.map((option) => {
                        return (
                            <button
                                title={option}
                                disabled={item === option ? true : false}
                                onClick={() => setSlide({open: open, item: option})}
                                key={option}
                                className={`flex flex-row items-center space-x-2 justify-center ${item === option ? 'font-semibold' : 'hover:font-semibold'}`}
                            >
                                <span>{option}</span>
                                {option === 'Messages' && <Notifications />}
                            </button>
                        )
                    })}
                </div>
                <button 
                    title="Close User Options"
                    className="ml-auto"
                    onClick={() => setSlide({open: false, item: null})}
                >
                    <ArrowUpTrayIcon className='h-5 w-5 rotate-90 text-base-900/50 hover:text-base-900 hover:scale-115 transition-all'/>
                </button>
            </div>
            <div className="overflow-y-auto">
                {item === 'Profile' && <Profile />}
                {item === 'Messages' && <Messages />}
                {item === 'Settings' && <Settings />}
            </div>
        </div>

    )

}
