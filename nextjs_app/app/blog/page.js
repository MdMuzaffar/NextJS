import Link from "next/link";
export default function blogPage() {
  const post = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
    },
  ];
  return (
    <div>
      <h1>Blog Page</h1>
      {post.map((p) => (
        <div key={p.id}>
          <Link href={`/blog/${p.id}`} rel="canonical">
            <h2>{p.title}</h2>
          </Link>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
