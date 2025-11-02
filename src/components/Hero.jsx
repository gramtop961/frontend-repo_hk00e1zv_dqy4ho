import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="backdrop-blur-sm bg-white/70 dark:bg-neutral-900/50 rounded-2xl p-6 sm:p-8 shadow">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Hey ! I am <span className="text-indigo-600">Shashank</span>
              </h1>
              <p className="mt-1 text-lg sm:text-xl text-indigo-600 font-semibold">Stop Looking at me 😜 !</p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">Versatile Designer</span>
                <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-700">Engineer</span>
              </div>
              <p className="mt-6 text-neutral-700 dark:text-neutral-200 leading-relaxed">
                A designer who codes, and a coder who designs.
              </p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Computer Science undergrad at MGIT, Hyderabad; deeply involved at the intersection of code, design, and challenges.
              </p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Focus: Generative AI, web development, UI/UX, and video storytelling. Leader of the college Design Club, mastering storytelling via video.
              </p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Competitive spirit with a goal to build great products and spread happiness. Fluent in English, Hindi, and Telugu.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500">View My Projects</a>
                <a href="#journey" className="inline-flex items-center px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold hover:opacity-90">Trace My Journey</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60" />
    </section>
  );
}
