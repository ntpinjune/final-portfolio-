export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-screen-lg w-full">
        <img
          src="/profile.png"
          alt="Nolan"
          className="w-40 h-40 md:w-52 md:h-52 rounded-xl shadow-lg object-cover"
        />
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Nolan Colton
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400">
            High School Student @ Cupertino
          </h2>
          <p className="text-gray-400 max-w-md">
            Avid builder passionate about solving technical problems and
            learning new things every day.
          </p>
        </div>
      </div>
      <h1 className="text-red-500 text-5xl font-bold">Test Tailwind</h1>
    </main>
  );
}
