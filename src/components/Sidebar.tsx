'use client'

import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from 'lucide-react'
import { Nav } from './ui/nav'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

type Props = {}

export default function Sidebar({}: Props) {
  const [isCollapse, setIsCollapse] = useState(false)

  const onlyWidth = useWindowWidth()

  const mobileWidth = onlyWidth < 768

  function toggleSidebar() {
    setIsCollapse((prev) => !prev)
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant={'secondary'}
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapse}
        links={[
          {
            title: 'Dashboard',
            href: '/',
            icon: LayoutDashboard,
            variant: 'default',
          },
          {
            title: 'Users',
            icon: UsersRound,
            variant: 'ghost',
            href: '/users',
          },
          {
            title: 'Orders',
            icon: ShoppingCart,
            variant: 'ghost',
            href: '/orders',
          },
          {
            title: 'Settings',
            icon: Settings,
            variant: 'ghost',
            href: '/settings',
          },
        ]}
      />
    </div>
  )
}
