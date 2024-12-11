"use client";
import React from "react";
import "./Project.scss";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Title from "@/components/title/Title";

const projects = [
  {
    number: 1,
    name: "Oxygénius.be",
    description: `The goal was to improve the ERP
      system of the company Oxygenius by using 
      artificial intelligence as-a-service (Microsoft Cognitive Services).
      Specifically, the aim was to retrieve, 
      filter, and classify attachments into different categories based
      on the type of email.`,
    technologies: [
      ".NET",
      "C#",
      "Angular",
      "MySQL",
      "Microsoft Graph",
      "Cognitives Services Microsoft",
      "Github",
    ],
    image: "/images/oxygenius.png",
    github: "",
    demo: "https://www.oxygenius.be/",
  },
  {
    number: 2,
    name: "Oresto Company",
    description: `A web application primarily designed
      for restaurants to showcase their culinary specialties
      through a menu with high-quality images, which will be
      accessible online by scanning a QR code.`,
    technologies: [
      "React js",
      "NodeJs",
      "MongoDB",
      "Material UI",
      "Vercel",
      "Github",
    ],
    image: "/images/oresto.png",
    github: "",
    demo: "https://www.oresto.company",
  },
  {
    number: 3,
    name: "Miakem SARL",
    description: `A website of a company specialized in
     providing services in Cameroon, including assistance
      with visa applications to Cameroon, airport facilitation,
       car rental, and the rental of furnished apartments and hotels.`,
    technologies: ["Next js", "Material UI", "Vercel", "Github"],
    image: "/images/miakem.png",
    github: "",
    demo: "https://www.miakem.com/",
  },
];

export default function Project() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="project-container">
      <div className="bloc-container">
        <Title label="Projects" />
        <div className="container">
          <div className="informations">
            <div className="content"></div>
          </div>
          <div className="carousel">
            <div className="bloc-carousel">
              <div className="card-content  items-center justify-center p-6">
                <div className="number text-4xl font-semibold">
                  {projects[current - 1]?.number}
                </div>
                <div className="text">
                  <div className="name tracking-tight">
                    {" "}
                    {projects[current - 1]?.name}{" "}
                  </div>
                  <div className="description tracking-tight">
                    {projects[current - 1]?.description}
                  </div>
                </div>

                <div className="techno">
                  {projects[current - 1]?.technologies.map((t, index) => {
                    return (
                      <Badge
                        style={{ fontSize: "xx-small" }}
                        className={"item"}
                        key={index}
                      >
                        {t}
                      </Badge>
                    );
                  })}
                </div>

                <Separator />

                <div className="bloc-action">
                  <Link href={projects[current - 1]?.demo}>
                    <GoLinkExternal className="action" />
                  </Link>
                  <Link href={projects[current - 1]?.github}>
                    <FaGithub className="action" />
                  </Link>
                </div>
              </div>
              <div className="bloc-carousel">
                <Carousel setApi={setApi} className="carousel w-full max-w-xs">
                  <CarouselPrevious />

                  <CarouselContent className="carousel-content">
                    {projects.map((p, key) => (
                      <CarouselItem key={key}>
                        <Card className="card">
                          <Image
                            className="flex  items-center justify-center"
                            src={p?.image}
                            width={350}
                            height={350}
                            alt={p?.image}
                          />
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
