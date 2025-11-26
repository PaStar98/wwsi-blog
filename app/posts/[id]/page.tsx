"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Post({ params }: any) {
  const id = params.id;
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/posts`).then(r => r.json()).then(data => {
      setPost(data.find((p: any) => p.id == id));
    });

    fetch(`/api/posts/${id}/comments`).then(r => r.json()).then(setComments);
  }, [id]);

  async function submit() {
    await fetch(`/api/posts/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, body }),
    });
    alert("Wysłano — czeka na moderację");
    setAuthor(""); setBody("");
  }

  if (!post) return <p>Ładowanie...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Komentarze</h2>
      {comments.length === 0 && <p>Brak komentarzy</p>}
      {comments.map((c: any) => (
        <div key={c.id} style={{ borderBottom: "1px solid #ddd", marginBottom: 10 }}>
          <strong>{c.author}</strong>
          <p>{c.body}</p>
        </div>
      ))}

      <h3>Dodaj komentarz</h3>
      <input placeholder="Autor" value={author} onChange={e => setAuthor(e.target.value)} />
      <br />
      <textarea placeholder="Treść" value={body} onChange={e => setBody(e.target.value)} />
      <br />
      <button onClick={submit}>Wyślij</button>
    </div>
  );
}
