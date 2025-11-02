import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl sm:text-2xl">
          <span className="text-neutral-900 dark:text-white">SHASHANK</span>{' '}
          <span className="text-indigo-600">SAKILAM</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-3 inline-flex items-center rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Say Hello
        </a>
      </nav>
      <div className="md:hidden px-4 pb-3">
        <div className="flex gap-4 text-sm overflow-x-auto no-scrollbar">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-indigo-50 hover:text-indigo-600 whitespace-nowrap"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
