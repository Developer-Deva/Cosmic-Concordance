export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-6xl font-bold mb-6">
        Cosmic Concordance
      </h1>

      <p className="text-xl text-center max-w-4xl">
        Exploring humanity's search for the patterns beneath reality by
        mapping the connections between science, philosophy, religion,
        and mystery, revealing the structures that shape belief,
        knowledge, and the cosmos.
      </p>

      <button className="mt-10 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
        Enter the Atlas
      </button>
    </main>
  );
}
