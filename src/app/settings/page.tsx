'use client'

import { DataTable } from '@/components/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import PageTitle from '@/components/PageTitle'

// Data
const data: Settings[] = [
  {
    category: 'Account',
    value: 'Active',
  },
  {
    category: 'Notifications',
    value: 'False',
  },
  {
    category: 'Language',
    value: 'English',
  },
  {
    category: 'Theme',
    value: 'Light',
  },
]

// Prop-types
export interface Settings {
  category: string
  value: string | number | boolean
}

// Columns
export const columns: ColumnDef<Settings>[] = [
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'value',
    header: 'Value',
  },
]

export default function SettingsPage(props: Settings) {
  return (
    <main className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </main>
  )
}
