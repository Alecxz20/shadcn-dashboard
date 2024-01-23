import Image from 'next/image'

export type SalesProps = {
  name: string
  email: string
  saleAmount: string
}

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div>
          <p className='font-medium'>{props.name}</p>
          <p className="text-gray-400 text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto">
            {props.email}
          </p>
        </div>
      </section>
      <section>
        <p className='font-medium'>{props.saleAmount}</p>
      </section>
    </div>
  )
}
