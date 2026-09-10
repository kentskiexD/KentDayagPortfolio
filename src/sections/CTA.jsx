export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#8b5cf6]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-[#a78bfa] font-medium">
            Currently accepting new projects
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-balance">
          Have an idea for your{" "}
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
            next video
          </span>
          ?
        </h2>

        {/* Subtext */}
        <p className="text-lg lg:text-xl text-[#a1a1aa] mt-6 max-w-2xl mx-auto leading-relaxed">
          Let's turn your idea into something people want to watch.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="mailto:dayagkent09@gmail.com?subject=Project%20Inquiry"
            className="group bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] flex items-center gap-2"
          >
            Start a Project
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="mailto:dayagkent09@gmail.com"
            className="border border-[#26263a] hover:border-[#8b5cf6] hover:text-[#a78bfa] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            dayagkent09@gmail.com
          </a>
        </div>

        {/* Trust line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#71717a]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            Fast turnaround
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            Cinematic quality
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            Custom direction
          </div>
        </div>
      </div>
    </section>
  );
}