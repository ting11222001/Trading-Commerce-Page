import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Developer from "@/components/Developer";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <h1>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
    </h1>
  )
}
