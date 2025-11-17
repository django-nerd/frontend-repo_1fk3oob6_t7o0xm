import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Klaar om te starten?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-gray-700">
            Plan een gratis strategiesessie. We denken graag met je mee.
          </motion.p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          {sent ? (
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
              Bedankt! We nemen snel contact met je op.
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Naam</label>
                <input required type="text" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-gray-500 focus:outline-none" placeholder="Jouw naam" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-gray-500 focus:outline-none" placeholder="jij@bedrijf.nl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Waar kunnen we mee helpen?</label>
                <textarea required rows="4" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-gray-500 focus:outline-none" placeholder="Beschrijf kort je project of vraag"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">Wij reageren binnen 1 werkdag.</p>
                <button type="submit" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 hover:bg-gray-800">Verstuur</button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
