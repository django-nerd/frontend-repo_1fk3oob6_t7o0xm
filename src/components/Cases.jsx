import { motion } from 'framer-motion'

const cases = [
  {
    name: 'NovaTech',
    tag: 'B2B SaaS',
    result: '40% meer demo-boekingen',
  },
  {
    name: 'GreenMart',
    tag: 'E-commerce',
    result: '24% hogere conversie',
  },
  {
    name: 'FinAware',
    tag: 'FinTech',
    result: '70% snellere support via AI',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resultaten die tellen
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-gray-700">
            Enkele voorbeelden van impact die we met onze klanten hebben gemaakt.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-violet-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="text-sm font-medium text-gray-600">{c.tag}</div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{c.name}</h3>
                <p className="mt-2 text-sm text-gray-700">{c.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
