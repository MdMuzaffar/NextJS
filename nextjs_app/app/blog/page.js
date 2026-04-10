import Link from "next/link";
export default async function blogPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

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
    <div>
      <h1>Blog Page</h1>
      {posts.map((p) => (
        <div key={p.id}>
          <Link href={`/blog/${p.id}`} rel="canonical">
            <h2 className="text-sm font-bold mb-2 text-blue-600">{p.title}</h2>
          </Link>
          <p className="text-black-600">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
