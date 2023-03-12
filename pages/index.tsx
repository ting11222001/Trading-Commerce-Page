import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <h1>
      <Navbar />
      <Hero />
      <About />
    </h1>
  )
}
