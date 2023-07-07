'use client'

import {
    FolderIcon,
    HomeIcon,
    UsersIcon,
    TableCellsIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    UserCircleIcon,
    ArrowLeftOnRectangleIcon,
    Cog8ToothIcon,
    CalendarDaysIcon
  } from '@heroicons/react/24/outline'

import Logo from './Logo'
import Link from 'next/link'
import Avatar from '../user/Avatar'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { useOnClickOutside } from 'usehooks-ts'

import { slideState, messagesState } from '@/app/recoil/atoms'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import Notifications from '../widgets/Notifications'


  export default function Sidebar() {

    const router = useRouter()

    const [ path, setPath ] = useState(router.pathname)
    const [ user, setUser ] = useState(false)

    const setSlide = useSetRecoilState(slideState)
    const notifications = useRecoilValue(messagesState)

    const ref = useRef(null)

    useOnClickOutside(ref, () => setUser(false))

    const navigation = [
        { name: 'Dashboard', href: '/', icon: HomeIcon },
        { name: 'Projects', href: '/projects', icon: FolderIcon },
        { name: 'Teams', href: '/teams', icon: UsersIcon },
        { name: 'Spaces', href: '/spaces', icon: TableCellsIcon },
        { name: 'Calendar', href: '/calendar', icon: CalendarDaysIcon },
        { name: 'Resources', href: '/resources', icon: CodeBracketIcon }
    ]

    const userMenu = [
        { name: 'Profile', onClick: () => setSlide({open: true, item: 'Profile'}), icon: UserCircleIcon },
        { name: 'Messages', onClick: () => setSlide({open: true, item: 'Messages'}), icon: EnvelopeIcon },
        { name: 'Settings', onClick: () => setSlide({open: true, item: 'Settings'}), icon: Cog8ToothIcon },
        { name: 'Logout', onClick: () => console.log('Logout'), icon: ArrowLeftOnRectangleIcon }
    ]

    return (
      <div className="flex flex-col gap-y-5 pt-4 border-r border-base-300/30 shadow-lg h-full">
        <Link onClick={() => setPath('/')} href="/" className="flex flex-row items-center space-x-2 justify-center -translate-x-1 hover:scale-105 transition-transform">
            <Logo className="h-12 w-12 text-primary-600"/>
            <span className="logoText text-2xl font-semibold">swiftAI</span>
        </Link>
        <nav className="flex flex-1 flex-col">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name} className={`${item.href === path && 'text-primary-500'} hover:bg-base-100/10 rounded-sm hover:shadow-md pl-4 pr-8 transition-colors`}>
                  <Link
                    title={item.name}
                    onClick={() => setPath(item.href)}
                    href={item.href}
                    className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    <item.icon
                      className="group-hover:text-primary-600 transition-colors h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
        </nav>
        <button  
            title="User Options"
            ref={ref} 
            onClick={() => setUser(!user)}  
            className="relative"
        >
            {user && 
                <ul
                    title="User Menu" 
                    className="flex flex-col items-start absolute -top-2 -translate-y-full right-1/2 translate-x-3/4 -translate-y-1/2 bg-base-100 rounded-sm shadow-lg p-4 text-base-900 z-30 divide-y divide-base-300"
                >
                    {userMenu.map((item) => {
                        return (
                            <li key={item.name}>
                                <button
                                    title={item.name}
                                    className="group flex flex-row items-center space-x-2 min-w-[200px] py-1"
                                    onClick={item.onClick}
                                >
                                    <item.icon
                                        className="group-hover:text-primary-600 transition-colors h-6 w-6 shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span className="font-medium">
                                        {item.name}
                                    </span>
                                    {item.name === 'Messages' && <Notifications />}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            }
            <div className="flex flex-row items-center pt-6 pb-4 px-6 space-x-4 hover:bg-base-100/10 hover:shadow-md transition-colors">
                <Avatar />
                <span className="font-semibold text-sm">
                    User
                </span>
            </div>
        </button>
      </div>
    )
  }
  