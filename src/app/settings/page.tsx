/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
'use client'

import { DataTable } from '@/components/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import PageTitle from '@/components/PageTitle'

// Prop-types
type Props = {}

interface Settings {
  category: string
  value: string | number | boolean
}

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

// Columns
const columns: ColumnDef<Settings>[] = [
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'value',
    header: 'Value',
  },
]

export default function SettingsPage({}: Props) {
  return (
    <main className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </main>
  )
}
