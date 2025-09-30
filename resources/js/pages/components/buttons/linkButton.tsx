import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import React, { ReactNode } from 'react'

interface ButtonProps {
  routeName: string
  className: string
  children: ReactNode
}

export default function LinkButton({ routeName, children, ...props }: ButtonProps) {
  return (
    <Button {...props}>
      <Link href={route(routeName)}>
        {children}
      </Link>
    </Button>
  )
}
