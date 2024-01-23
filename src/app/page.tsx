import PageTitle from '@/components/PageTitle'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import { CardProps } from '@/components/Card'
import Card from '@/components/Card'
import CardWrapper from '@/components/CardWrapper'
import BarChart from '@/components/BarChart'
import SalesCard, { SalesProps } from '@/components/SalesCard'

const cardData: CardProps[] = [
  {
    label: 'Total Revenue',
    amount: '$45,231,89',
    description: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    label: 'Subscriptions',
    amount: '+2350',
    description: '+180.1% from last month',
    icon: Users,
  },
  {
    label: 'Sales',
    amount: '$12,234',
    description: '+19% from last month',
    icon: CreditCard,
  },
  {
    label: 'Active now',
    amount: '+573',
    description: '+201 since last hour',
    icon: Activity,
  },
]

const userSalesData: SalesProps[] = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Jackson Lee',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$39.00',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    saleAmount: '+$299.00',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    saleAmount: '+$39.00',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((cardInfo, index) => (
          <Card
            key={index}
            label={cardInfo.label}
            amount={cardInfo.amount}
            description={cardInfo.description}
            icon={cardInfo.icon}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardWrapper>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardWrapper>

        <CardWrapper>
          <p>Recent sales</p>
          <p className="text-gray-400 text-sm">
            You made 265 sales this month.
          </p>
          <section className='flex flex-col gap-4 mt-6'>
            {userSalesData.map((user, index) => (
              <SalesCard
                key={index}
                email={user.email}
                name={user.name}
                saleAmount={user.saleAmount}
              />
            ))}
          </section>
        </CardWrapper>
      </section>
    </main>
  )
}
