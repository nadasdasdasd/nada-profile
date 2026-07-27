import { useState } from 'react'
import { FormField } from '../molecules/FormField'
import { Button } from '../atoms/Button'
import { Spinner } from '../atoms/Spinner'

type FormState = { name: string; email: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg bg-emerald-50 p-6 text-center text-emerald-700">
        <p className="font-medium">Pesan berhasil dikirim!</p>
        <p className="mt-1 text-sm">Saya akan membalas segera.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="name"
        name="name"
        label="Nama"
        value={form.name}
        required
        onChange={handleChange}
      />
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={form.email}
        required
        onChange={handleChange}
      />
      <FormField
        id="message"
        name="message"
        label="Pesan"
        as="textarea"
        rows={4}
        value={form.message}
        required
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="primary"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? (
          <span className="inline-flex items-center gap-2">
            <Spinner className="text-white" /> Mengirim...
          </span>
        ) : (
          'Kirim Pesan'
        )}
      </Button>
    </form>
  )
}
