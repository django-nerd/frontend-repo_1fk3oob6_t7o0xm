import { motion } from 'framer-motion'
import { Bot, Code, Zap, Shield, Layers, Workflow } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Op maat gemaakte websites',
    desc: 'Pixel-perfect, snel en SEO-vriendelijk. Gemaakt om te converteren en te schalen.'
  },
  {
    icon: Bot,
    title: 'AI-integraties',
    desc: 'Koppel ChatGPT, RAG, agents en automatiseringen aan je bestaande tools en data.'
  },
  {
    icon: Workflow,
    title: 'Proces-automatisering',
    desc: 'Van lead-opvolging tot support: wij bouwen flows die werk uit handen nemen.'
  },
  {
    icon: Zap,
    title: 'Snelheid & performance',
    desc: 'Core Web Vitals op orde. Bliksemsnelle laadtijden met moderne stacks.'
  },
  {
    icon: Shield,
    title: 'Veilig & betrouwbaar',
    desc: 'Beveiligde architectuur, toegangscontrole en monitoring standaard inbegrepen.'
  },
  {
    icon: Layers,
    title: 'Koppelingen & data',
    desc: 'Integraties met CRM, ERP, Google, Slack, e-mail, databases en meer.'
  },
]

export default function Features() {
  return (
    <section id="diensten" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wat we leveren
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-gray-700">
            Een combinatie van design, development en slimme AI die jouw bedrijf vooruit stuwt.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-violet-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-2 text-white shadow-sm">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
