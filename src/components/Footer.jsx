export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="text-xl font-extrabold">
              SHASHANK SAKILAM <span className="text-indigo-600">/</span> <span className="text-neutral-600">Dev/Design</span>
            </div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Copyright 2025 Shashank Sakilam</div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="mailto:shashanksakilam@gmail.com" className="font-medium hover:underline">shashanksakilam@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
