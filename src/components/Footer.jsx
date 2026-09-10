export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
        <p>
          © {new Date().getFullYear()} Kent Dayag. Built with React + Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}