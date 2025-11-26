"use client";
import { useEffect, useState } from "react";

export default function Moderator() {
  const [pending, setPending] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/ALL_PENDING').then(r => r.json()).then(setPending);
  }, []);

  async function approve(id: number) {
    await fetch(`/api/comments/${id}/approve`, { method: "POST" });
    setPending(p => p.filter(x => x.id !== id));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Moderacja komentarzy</h1>
      {pending.length === 0 && <p>Brak oczekujących komentarzy</p>}
      {pending.map((c) => (
        <div key={c.id} style={{ marginBottom: 15 }}>
          <strong>{c.author}</strong>: {c.body}
          <button onClick={() => approve(c.id)} style={{ marginLeft: 10 }}>
            Zatwierdź
          </button>
        </div>
      ))}
    </div>
  );
}
