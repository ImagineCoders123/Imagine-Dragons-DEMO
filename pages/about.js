import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>About - Imagine Dragons</title>
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center">About Imagine Dragons</h1>
        
        {/* Band Image */}
        <img 
          src="/imagine-dragons.jpg" 
          alt="Imagine Dragons" 
          className="w-full max-w-lg mx-auto mt-6 rounded-lg shadow-lg"
        />

        {/* Band Biography */}
        <section className="mt-6 space-y-4 text-lg">
          <p>
            <strong>Imagine Dragons</strong> is an American pop rock band formed in <strong>2008</strong> in Las Vegas, Nevada.
            The band consists of <strong>Dan Reynolds</strong> (vocals), <strong>Wayne Sermon</strong> (guitar), 
            <strong>Ben McKee</strong> (bass), and <strong>Daniel Platzman</strong> (drums).
          </p>

          <p>
            Their breakthrough came in <strong>2012</strong> with the album <em>Night Visions</em>, which featured 
            the record-breaking hit <em>"Radioactive."</em> The song was named the biggest rock hit of the decade 
            and spent over <strong>87 weeks</strong> on the Billboard Hot 100.
          </p>

          <p>
            Over the years, the band has released multiple chart-topping albums, including:
            <ul className="list-disc pl-6 mt-2">
              <li><strong>2012:</strong> <em>Night Visions</em> (feat. "Radioactive", "Demons")</li>
              <li><strong>2015:</strong> <em>Smoke + Mirrors</em> (feat. "I Bet My Life", "Shots")</li>
              <li><strong>2017:</strong> <em>Evolve</em> (feat. "Believer", "Thunder")</li>
              <li><strong>2018:</strong> <em>Origins</em> (feat. "Natural", "Bad Liar")</li>
              <li><strong>2021-2022:</strong> <em>Mercury - Acts 1 & 2</em> (feat. "Enemy", "Bones")</li>
            </ul>
          </p>

          <p>
            Imagine Dragons has won multiple <strong>Billboard Music Awards, Grammy Awards</strong>, 
            and sold over <strong>75 million records worldwide</strong>, making them one of the best-selling 
            rock bands of all time.
          </p>

          <p className="text-center text-blue-400">
            🎶 "Music gives a soul to the universe, wings to the mind, flight to the imagination." - Imagine Dragons 🎶
          </p>
        </section>

        {/* Back to Home Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300">
              ⬅ Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
