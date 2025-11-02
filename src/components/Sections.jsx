import { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Download, Copy, Check, ChevronDown, ExternalLink } from 'lucide-react';

function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-neutral-600 dark:text-neutral-300">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ title, tag, summary, stack, link }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-indigo-600">{tag}</p>
          <h3 className="mt-1 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{summary}</p>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="shrink-0 inline-flex items-center gap-1 rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
          aria-expanded={open}
        >
          Details <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="mt-4 border-t border-neutral-200 dark:border-neutral-800 pt-4">
          <div className="flex flex-wrap gap-2 text-xs">
            {stack.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                {s}
              </span>
            ))}
          </div>
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline">
              Visit <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function SkillsCategory({ title, items }) {
  return (
    <div className="rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <h3 className="font-bold text-neutral-900 dark:text-white">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        {items.map((it) => (
          <span key={it} className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200">{it}</span>
        ))}
      </div>
    </div>
  );
}

function EmailActions() {
  const [copied, setCopied] = useState(false);
  const email = 'shashanksakilam@gmail.com';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500"
      >
        <Mail className="h-4 w-4" /> Email Me
      </a>
      <button
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-600" /> Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" /> Copy Email
          </>
        )}
      </button>
      <a
        href="https://drive.google.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800"
      >
        <Download className="h-4 w-4" /> Download Resume
      </a>
    </div>
  );
}

export default function Sections() {
  return (
    <div>
      <Section id="about" title="About Me" subtitle="A playful yet professional blend of code and design">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I blend technical rigor with a creative drive, constantly pushing myself with new challenges while staying collaborative and curious. I thrive at the intersection of Generative AI, web development, and UI/UX. As the leader of my college Design Club, I mastered storytelling through video and visual systems.
            </p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Competitive by nature, empathetic at heart — I aim to build great products and spread happiness.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/30 border border-neutral-200 dark:border-neutral-800">
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Education:</span> Computer Science undergrad at MGIT, Hyderabad</li>
              <li><span className="font-semibold">Fluency:</span> English, Hindi, Telugu</li>
              <li><span className="font-semibold">Focus Areas:</span> Gen AI, Web Dev, UI/UX, Video Storytelling</li>
              <li><span className="font-semibold">Club Leadership:</span> Leader of the college Design Club</li>
            </ul>
            <a href="#journey" className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline">Trace My Journey <ExternalLink className="h-4 w-4" /></a>
          </div>
        </div>
      </Section>

      <Section id="projects" title={`Things I've built / Featured Projects`} subtitle="Gen AI & Development · Design & Creative">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-indigo-600 mb-3">Gen AI & Development</h3>
            <div className="space-y-4">
              <ProjectCard
                title="Chat-driven AI Assistant"
                tag="Featured · AI/Dev"
                summary="A conversational agent that blends RAG with function calling for delightful UX."
                stack={['Python', 'FastAPI', 'OpenAI', 'Pinecone', 'React']}
                link="#"
              />
              <ProjectCard
                title="Full-stack Portfolio Engine"
                tag="Featured · Web"
                summary="A lightning-fast portfolio with playful animations and 3D interactions."
                stack={['Vite', 'React', 'Tailwind', 'Spline']}
                link="#"
              />
              <ProjectCard
                title="Smart Video Storyboarder"
                tag="Featured · Creative AI"
                summary="Tooling that converts scripts into visual storyboards with auto shot suggestions."
                stack={['Next.js', 'Replicate', 'FFmpeg']}
                link="#"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-indigo-600 mb-3">Design & Creative</h3>
            <ProjectCard
              title="100+ Delivered Assets"
              tag="Design & Creative"
              summary="From logos and social posts to UI mockups and motion graphics — shipped with care and craft."
              stack={['Figma', 'Adobe Suite', 'After Effects', 'Premiere Pro']}
              link="#"
            />
            <a href="#all-projects" className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 font-semibold hover:opacity-90">View All Projects</a>
          </div>
        </div>
        <div id="all-projects" className="mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <h3 className="font-bold">All Projects</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">A consolidated list across AI, ML, web, and design.</p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['AI Agent', 'UI Kit', 'Story Titles Generator', 'Design System', 'Video Montage Tool', 'RAG Notes'].map((p) => (
              <div key={p} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 hover:shadow">
                <div className="font-medium">{p}</div>
                <div className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">Click to learn more</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="journey" title="Personal Journey" subtitle="Milestones, achievements, and education">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-2xl p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-bold">Education</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>MGIT, Hyderabad — B.Tech in CSE</li>
              <li>Focus on AI/ML, Systems, and Product Design</li>
            </ul>
          </div>
          <div className="md:col-span-2 rounded-2xl p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/40 dark:to-fuchsia-950/30 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-bold">Achievements & Milestones</h3>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
              <li>Led college Design Club; shipped 100+ assets across events</li>
              <li>Built multiple AI-powered tools for productivity and storytelling</li>
              <li>Organized workshops on UI/UX and creative coding</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills & Expertise" subtitle="A designer who codes, and a coder who designs">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillsCategory title="AI & Machine Learning" items={[
            'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'RAG', 'LangChain'
          ]} />
          <SkillsCategory title="Full-Stack Development" items={[
            'React', 'Vite', 'Next.js', 'FastAPI', 'Node', 'Tailwind'
          ]} />
          <SkillsCategory title="Core Languages & DevOps" items={[
            'Python', 'TypeScript', 'JavaScript', 'Git', 'Docker', 'CI/CD'
          ]} />
          <SkillsCategory title="Design & Productivity" items={[
            'Figma', 'Adobe Suite', 'After Effects', 'Premiere Pro', 'Notion'
          ]} />
        </div>
        <div className="mt-6">
          <a href="#projects" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-5 py-2.5 font-semibold hover:bg-indigo-500">View My Projects</a>
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Still something on mind?">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-300">Seeking full-time and internship opportunities in impactful roles.</p>
            <div className="mt-4"><EmailActions /></div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 font-semibold hover:opacity-90">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/40 dark:to-cyan-950/30 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <a href="#about" className="rounded-xl p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow">About</a>
              <a href="#projects" className="rounded-xl p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow">Projects</a>
              <a href="#skills" className="rounded-xl p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow">Skills</a>
              <a href="#contact" className="rounded-xl p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow">Contact</a>
            </div>
          </div>
        </div>
      </Section>

      <div className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="#about" className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">About</a>
            <a href="#projects" className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">Projects</a>
            <a href="#skills" className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">Skills</a>
            <a href="#contact" className="px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
