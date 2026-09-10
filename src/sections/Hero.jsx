export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-400 font-medium mb-4">👋 Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Kent <span className="text-blue-400">Dayag</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          BSIT Cum Laude · AI Artist · Web Developer
        </p>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enthusiastic and adaptable BSIT graduate from Cebu Technological
          University — Argao Campus. I craft AI-generated visuals and build
          modern web experiences with React, Python, and PHP.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-slate-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition"
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}