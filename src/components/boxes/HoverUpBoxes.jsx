// TherapyCard.jsx — Reusable card component
//
// PROPS:
//   icon        — A lucide-react icon component  (e.g. Sparkles)
//   title       — Card heading string            (e.g. "Bowen Therapy")
//   description — Body text string
//   href        — Link target string             (e.g. "/therapies/bowen")
//
// USAGE EXAMPLE:
//   import TherapyCard from './components/TherapyCard'
//   import { Sparkles } from 'lucide-react'
//
//   <TherapyCard
//     icon={Sparkles}
//     title="Bowen Therapy"
//     description="Gentle bodywork that activates your body's natural healing response."
//     href="/therapies/bowen"
//   />

export default function HoverUpCard({ icon: Icon, title, description, href }) {
    return (
      <div className="bg-white rounded-2xl p-8 flex flex-col gap-6  transition-all  hover:-translate-y-0.5  shadow-lg hover:shadow-lg duration-300 ">
  
        {/* Icon circle */}
        <div className="w-20 h-18 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
          <Icon size={24} className="text-gray-700" strokeWidth={1.5} />
        </div>
  
        {/* Text content */}
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="text-gray-900 text-xl font-semibold leading-snug">
            {title}
          </h3>
          <p className="text-gray-500 text-md leading-relaxed">
            {description}
          </p>
        </div>
  
        {/* Learn More link */}
        <a
          href={href}
          className="inline-flex text-primary items-center gap-1.5 text-purple-500 hover:text-purple-700 text-sm font-medium transition-colors duration-200 group"
        >
          Learn More
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
  
      </div>
    );
  }