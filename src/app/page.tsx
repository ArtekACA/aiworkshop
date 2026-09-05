import { resume, currentYear } from "./resume-data";
import ThemeToggle from "./theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Personal Resume
          </p>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Header */}
        <section aria-labelledby="name">
          <h1
            id="name"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {resume.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-300">
            {resume.title}
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {resume.location}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${resume.email}`}
              className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
            >
              {resume.email}
            </a>
          </div>
        </section>

        {/* Summary */}
        <section aria-labelledby="summary" className="mt-10">
          <h2
            id="summary"
            className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Summary
          </h2>
          <p className="mt-3 leading-relaxed">{resume.summary}</p>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience" className="mt-10">
          <h2
            id="experience"
            className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Experience
          </h2>
          <div className="mt-4 space-y-8">
            {resume.experience.map((job) => (
              <article key={job.organization}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold">{job.role}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.dates}
                  </p>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {job.organization} · {job.location}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills" className="mt-10">
          <h2
            id="skills"
            className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Skills
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {resume.skills.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-semibold">{group.group}</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section aria-labelledby="education" className="mt-10">
          <h2
            id="education"
            className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Education &amp; Certifications
          </h2>
          <div className="mt-4 space-y-4">
            {resume.education.map((entry) => (
              <div
                key={entry.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
              >
                <p className="text-sm font-medium">{entry.degree}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {entry.school} · {entry.year}
                </p>
              </div>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-semibold">Certifications</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
            {resume.certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                  aria-hidden="true"
                />
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Highlights */}
        <section aria-labelledby="highlights" className="mt-10">
          <h2
            id="highlights"
            className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Highlights &amp; Affiliations
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {resume.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {currentYear} {resume.name}
        </p>
      </footer>
    </div>
  );
}