import { LucideIcon } from 'lucide-react'
import CardWrapper from './CardWrapper'

export type CardProps = {
  label: string
  icon: LucideIcon
  amount: string
  description: string
}

export default function Card(props: CardProps) {
  return (
    <CardWrapper>
      <section className='flex justify-between'>
        {/* label */}
        <p className="text-sm">{props.label}</p>
        {/* icon */}
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>{props.amount}</h2>
        <p className='text-xs text-gray-500'>{props.description}</p>
      </section>
    </CardWrapper>
  )
}
