import { useState } from "react";
import PageLoader from "./components/Effects/PageLoader";
import Header from "./components/Header/Header";
import CurtainReveal from "./components/Effects/CurtainReveal";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Therapies from "./components/Pages/Therapies";
import Practitioners from "./components/Pages/Practitioners";
import Testimonials from "./components/Pages/Testimonials";
import Contact from "./components/Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [phase, setPhase] = useState("loading"); // loading -> reveal -> ready

  const appVisible = phase !== "loading";
  return (
    <>

      <PageLoader isLoading={phase === "loading"} onComplete={() => setPhase("reveal")} />
      <CurtainReveal active={phase === "reveal"} onDone={() => setPhase("ready")} />

      {appVisible && (
        <>
          <Header activeLink="Home" />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/therapies" element={<Therapies />} />
              <Route path="/practitioners" element={<Practitioners />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/book" element={<BookSession />} /> */}
            </Routes>
          </main>

          <Footer />

        </>
      )
      }
    </>
  )
}

export default App