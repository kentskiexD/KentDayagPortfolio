import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="text-blue-400">Experience</span>
        </h2>

        <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
          {experience.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900" />

              <span className="inline-block text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-slate-400 mb-3">{exp.company}</p>

              <ul className="space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-slate-300 flex gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}