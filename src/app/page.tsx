import Image from "next/image";

import React from 'react'
import Contact from "./Contact/page";
import Projects from "./projects/page";
import Hero from "./Hero/page";
import Reveal from "../component/reveal/page";
import Skills from "../component/skills/page";

const page = () => {
  return (
    <div>
        <Hero />
        <Reveal>
        <Skills />
        </Reveal>
        <Projects />
    </div>
  )
}

export default page
