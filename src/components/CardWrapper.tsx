import { cn } from '@/lib/utils'
import React from 'react'

export default function CardWrapper(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn('flex-w-full flex-col gap-3 rounded-xl border p-5 shadow', props.className)} />
  )
}