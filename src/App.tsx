import Navbar from "./components/Navbar";
import Hero from "./views/Hero";

export default function App() {
  return (
    <main className="space-bg">
      <Navbar />
      <div>
        <Hero />
      </div>
    </main>
  )
}
