export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        <img
          src="/profile.png"
          alt="Nolan"
          className="w-50 h-60 rounded-xl shadow-lg object-cover shrink-0 transition-transform duration-300 hover:scale-105 active:animate-shake cursor-pointer"
        />
        <div className="flex flex-col gap-4 max-w-md grow">
          <h1 className="font-figtree text-4xl md:text-5xl font-bold text-white">
            Nolan Colton
          </h1>
          <h2 className="text-xl md:text-xl text-gray-300">
            High School Student
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Avid builder passionate about solving technical problems and
            learning new things every day.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-gray-300">
            {/* Nav links */}
            <div className="flex gap-6">
              <a href="#projects" className="text-gray-300 hover:text-white">
                projects
              </a>
              <a href="#Contact" className="hover:text-white">
                contact
              </a>
            </div>

            {/* Icons */}
            <div className="flex gap-4 text-gray-400 ml-6">
              <a
                href="https://github.com/ntpinjune"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github text-xl hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/nolan-colton-01153831b/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin text-xl hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
