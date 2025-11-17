import { motion } from 'framer-motion'

const steps = [
  { k: '1', t: 'Intake & strategie', d: 'We verkennen doelen, doelgroep en kansen. Samen bepalen we de route.' },
  { k: '2', t: 'Ontwerp & prototype', d: 'Snel tastbaar met klikbare prototypes en visuele concepten.' },
  { k: '3', t: 'Development', d: 'Van front-end tot AI-koppelingen: zorgvuldig gebouwd en getest.' },
  { k: '4', t: 'Lancering & optimalisatie', d: 'Livegang met monitoring, A/B-tests en continue verbeteringen.' },
]

export default function Process() {
  return (
    <section id="proces" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Zo pakken wij het aan
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-gray-700">
            Transparant, snel en gericht op resultaat.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.k} initial={{ opacity: 0, y: 20, rotateX: -8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-200/60 to-cyan-200/60 blur-2xl" />
              <div className="relative z-10">
                <div className="text-6xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500 to-cyan-500">{s.k}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.t}</h3>
                <p className="mt-2 text-sm text-gray-700">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
