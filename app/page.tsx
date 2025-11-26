"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/posts").then(r => r.json()).then(setPosts);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Blog</h1>

      <h2>Posty</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>

      <AddPost />
      <p style={{ marginTop: 20 }}>
        <Link href="/moderator">Panel moderatora</Link>
      </p>
    </div>
  );
}

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  async function submit() {
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    location.reload();
  }
  return (
    <div style={{ marginTop: 30 }}>
      <h3>Dodaj post</h3>
      <input placeholder="Tytuł" onChange={e => setTitle(e.target.value)} />
      <br />
      <textarea placeholder="Treść" onChange={e => setBody(e.target.value)} />
      <br />
      <button onClick={submit}>Dodaj</button>
    </div>
  );
}
