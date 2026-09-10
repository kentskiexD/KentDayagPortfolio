export default function Contact() {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "dayagkent09@gmail.com",
      href: "mailto:dayagkent09@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "0969 220 1333",
      href: "tel:+639692201333",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Lamaacan, Argao, Cebu",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-slate-400 mb-12">
          Open to opportunities, collaborations, and creative projects.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="text-slate-200 hover:text-blue-400 transition break-all"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-slate-200 break-all">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}