'use client'

import Toggle from "./Toggle"
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from "@wits/next-themes"
import { useState, useEffect } from "react"

export default function ModeToggle () {

    const { theme, systemTheme, setTheme } = useTheme()
    const [ current, setCurrent ] = useState(false)

    useEffect(() => {
        if(theme === 'dark'){
            setCurrent(true)
        }
        else{
            setCurrent(false)
        }
    }, [ theme ])

    useEffect(() => {
        if(systemTheme){
            setTheme(systemTheme)
            if(systemTheme === 'dark'){
                setCurrent(true)
            }
            else{
                setCurrent(false)
            }
        }
    }, [ systemTheme ])

    return (
        <Toggle 
            icons={{
                on: <MoonIcon className="h-4 w-4"/>,
                off: <SunIcon className="h-4 w-4"/>
            }}
            current={{
                state: current,
                set: current ? () => setTheme('light') : () => setTheme('dark')
            }} 
            title={`Toggle ${current ? 'Light' : 'Dark'} Mode`}
        />
    )
}