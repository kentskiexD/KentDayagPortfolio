import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Edu<span className="text-blue-400">cation</span>
        </h2>

        <div className="grid gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-bold text-white">
                  {edu.degree}
                </h3>
                {edu.period && (
                  <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                )}
              </div>
              <p className="text-slate-300">{edu.school}</p>
              {edu.location && (
                <p className="text-slate-500 text-sm mt-1">
                  📍 {edu.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}