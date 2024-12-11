import Contact from "@/screens/contact/Contact";
import Presentation from "@/screens/presentation/Presentation";
import Project from "@/screens/projects/Project";
import Resume from "@/screens/resume/Resume";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

export default function page() {
  return (
    <div >
      <Analytics/>
      <div>
        <Presentation />
        <Resume />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
