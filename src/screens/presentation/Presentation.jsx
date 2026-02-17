import React from "react";
import "./Presentation.scss";
import { Folder, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Presentation() {
  return (
    <div className="presentation">
      <div className="bg"></div>
      <div className="datas">
        <div className="information">
          <div className="text">Hello i'm</div>
          <div className="name scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex gap-5">
            <span>Vially</span>
            <span>Dag</span>
          </div>
          <div className="job">Developer Analyst</div>
          <div className="infos">
            {/* <a href="/docs/CV-Vially-EN.pdf" download={"Vially-Dag-CV.pdf"}> */}
              <Button asChild className="item">
                <a href="#projects">
                  My projects
                  <Folder />
                </a>
              </Button>
            {/* </a> */}

            <Button asChild className="item" variant="outline">
              <a href="#contact">Contact Info</a>
            </Button>
          </div>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/viallydag">
              <Linkedin className="icon" />
            </a>
            <a href="https://github.com/dagdevelop">
              <Github className="icon" />
            </a>
          </div>
        </div>
        {/* <div className="imageBloc">
          <div className="avatar animate-bounce">
            <Avatar
              style={{
                width: "100%",
                height: "100%",
                filter: "contrast(94%)",
              }}
            >
              <AvatarImage src={"/images/vially1.png"} />
            </Avatar>
          </div>
        </div> */}
      </div>
    </div>
  );
}
