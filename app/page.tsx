export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0B0B0D",
      color: "#E8E8E8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      flexDirection: "column"
    }}>
      <h1 style={{ fontSize: "2.5rem" }}>
        TR Productions — Website Setup Success
      </h1>
      <p style={{ opacity: 0.8, marginTop: "1rem" }}>
        Next.js is running on Vercel 🎧
      </p>
    </main>
  );
}
