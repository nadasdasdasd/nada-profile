import { Text } from '../atoms/Text'

interface StatCardProps {
  value: string | number
  label: string
  suffix?: string
}

export function StatCard({ value, label, suffix = '+' }: StatCardProps) {
  return (
    <div className="rounded-xl bg-indigo-50 p-4 text-center">
      <p className="text-3xl font-bold text-indigo-600">{value}{suffix}</p>
      <Text size="sm" color="gray-600" className="mt-1">{label}</Text>
    </div>
  )
}
