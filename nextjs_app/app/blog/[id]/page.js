export default async function blogOne({ params }) {
  const { id } = await params;
  return <div>Hello from Blog One!{id}</div>;
}
