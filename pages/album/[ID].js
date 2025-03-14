import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function AlbumPage() {
  const router = useRouter();
  const { id } = router.query;
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://musicbrainz.org/ws/2/release-group/${id}?inc=releases&fmt=json`)
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
        if (data.releases?.length > 0) {
          fetch(`https://musicbrainz.org/ws/2/release/${data.releases[0].id}?inc=recordings&fmt=json`)
            .then((res) => res.json())
            .then((releaseData) => setSongs(releaseData.media[0].tracks || []));
        }
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{album ? album.title : "Loading..."} - Imagine Dragons</title>
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold">{album?.title}</h1>
        <p className="text-gray-400">{album?.["first-release-date"]}</p>
        {album && (
          <img
            src={`https://coverartarchive.org/release-group/${id}/front-500`}
            alt={`${album.title} cover`}
            className="w-64 h-64 object-cover rounded my-4"
            onError={(e) => (e.target.style.display = "none")}
          />
        )}

        {/* Song List with Audio Previews & YouTube Links */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Songs</h2>
          <ul className="mt-4 space-y-4">
            {songs.length > 0 ? (
              songs.map((song) => (
                <li key={song.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl">{song.title}</h3>
                  {/* Audio Preview (Replace with real API if available) */}
                  <audio controls className="mt-2">
                    <source src={`https://fake-audio-api.com/${song.title}.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  {/* YouTube Search Link */}
                  <a
                    href={`https://www.youtube.com/results?search_query=Imagine+Dragons+${song.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline block mt-2"
                  >
                    Watch on YouTube
                  </a>
                  {/* Spotify Embed */}
                  <iframe
                    src={`https://open.spotify.com/embed/track/${song.id}`}
                    width="100%"
                    height="80"
                    allow="encrypted-media"
                    className="mt-2 rounded"
                  ></iframe>
                </li>
              ))
            ) : (
              <p className="text-gray-400">No songs found...</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
