'use client'

import {
    FolderIcon,
    HomeIcon,
    UsersIcon,
    TableCellsIcon,
    CodeBracketIcon
  } from '@heroicons/react/24/outline'

import Logo from './Logo'
import Link from 'next/link'
import Avatar from '../user/Avatar'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Projects', href: '/projects', icon: FolderIcon },
    { name: 'Teams', href: '/teams', icon: UsersIcon },
    { name: 'CRM', href: '/crm', icon: TableCellsIcon },
    { name: 'Resources', href: '/resources', icon: CodeBracketIcon }
  ]

  export default function Sidebar() {

    const router = useRouter()
    const [ path, setPath ] = useState(router.pathname)

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
                    onClick={() => setPath(item.href)}
                    href={item.href}
                    className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    <item.icon
                      className="'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
        </nav>
        <Link onClick={() => setPath('/user')} href="user" className="flex flex-row items-center p-4 space-x-4 hover:bg-base-100/10 hover:shadow-md transition-colors">
            <Avatar />
            <span className="font-semibold text-sm">
                User
            </span>
        </Link>
      </div>
    )
  }
  