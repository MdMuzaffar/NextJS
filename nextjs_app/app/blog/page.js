import Link from "next/link";
export default async function blogPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  const MoviesData = await fetch("https://www.themoviedb.org/movie/550");
  const movies = await MoviesData.json();
  console.log(movies);

  // const post = [
  //   {
  //     id: 1,
  //     title: "First Post",
  //     content: "This is the content of the first post.",
  //   },
  //   {
  //     id: 2,
  //     title: "Second Post",
  //     content: "This is the content of the second post.",
  //   },
  // ];
  return (
    <>
      <div>
        <h1>Blog Page</h1>
        {posts.map((p) => (
          <div key={p.id}>
            <Link href={`/blog/${p.id}`} rel="canonical">
              <h2 className="text-sm font-bold mb-2 text-blue-600">
                {p.title}
              </h2>
            </Link>
            <p className="text-black-600">{p.body}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Movies Data</h1>
        <p className="text-black-600">{movies.title}</p>
        <p className="text-black-600">{movies.overview}</p>
        <p className="text-black-600">{movies.release_date}</p>
      </div>
    </>
  );
}
