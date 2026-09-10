export default function About() {
  const skills = [
    "React.js", "JavaScript", "HTML", "CSS",
    "Python", "Django", "PHP", "MySQL",
    "Docker", "REST API", "Bootstrap", "Java",
    "Microsoft Office", "AI Art", "Midjourney", "Runway ML",
  ];

  const languages = ["Bisaya", "Tagalog", "English"];

  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Story */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">
              My Story
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a <span className="text-blue-400 font-semibold">BSIT Cum Laude graduate</span> from
              Cebu Technological University — Argao Campus, passionate about the
              intersection of artificial intelligence, creativity, and software
              development.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              My journey spans from building full-stack systems like the
              <span className="text-white font-medium"> Integrated Disaster Risk Information System</span> (IDRIS)
              to exploring AI-generated art and video as a creative outlet.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I'm currently seeking opportunities where I can combine my
              technical skills with creative AI tools to build impactful
              digital experiences.
            </p>

            <div className="mt-6">
              <h4 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="bg-slate-800 border border-slate-700 text-slate-200 text-sm px-3 py-1 rounded-full"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">
              Tech & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-sm px-3 py-1 rounded-full hover:border-blue-500 hover:text-blue-400 transition cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2">
                Certifications
              </h4>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="text-slate-200 font-medium">
                  TESDA Mechatronics NC II
                </p>
                <p className="text-slate-400 text-sm mt-1">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}