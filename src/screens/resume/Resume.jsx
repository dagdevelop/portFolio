"use client";
import React, { useEffect, useState } from "react";
import "./Resume.scss";
import { ScrollArea } from "@/components/ui/scroll-area";

import { FaReact, FaNodeJs, FaAngular, FaJava } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiHibernate } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { SiMongodb } from "react-icons/si";
import SkillsItem from "@/components/skills/SkillsItem";
import { warning } from "@/theme/palette";
import ExperienceItem from "@/components/experience/ExperienceItem";
import Title from "@/components/title/Title";

const technologies = [
  {
    icon: <FaReact className="iconTech" />,
    label: "React",
  },
  {
    icon: <SiNextdotjs className="iconTech" />,
    label: "NextJs",
  },
  {
    icon: <FaReact className="iconTech" />,
    label: "React Native",
  },
  {
    icon: <FaNodeJs className="iconTech" />,
    label: "NodeJs",
  },
  {
    icon: <FaAngular className="iconTech" />,
    label: "Angular",
  },
  {
    icon: <FaJava className="iconTech" />,
    label: "Java",
  },
  {
    icon: <SiDotnet className="iconTech" />,
    label: ".NET",
  },

  //   {
  //     icon: <SiDotnet className="iconTech" />,
  //     label: ".NET",
  //   },
  {
    icon: <SiHibernate className="iconTech" />,
    label: "Hibernate",
  },
  {
    icon: <SiPostgresql className="iconTech" />,
    label: "Postgresql",
  },
  {
    icon: <TbBrandMysql className="iconTech" />,
    label: "Mysql",
  },
  {
    icon: <TbBrandCSharp className="iconTech" />,
    label: "C#",
  },
  {
    icon: <FaHtml5 className="iconTech" />,
    label: "HTML",
  },
  {
    icon: <IoLogoCss3 className="iconTech" />,
    label: "CSS",
  },
  {
    icon: <FaGithub className="iconTech" />,
    label: "Github",
  },
  {
    icon: <VscAzureDevops className="iconTech" />,
    label: "Azure Devops",
  },
  {
    icon: <SiMongodb className="iconTech" />,
    label: "MongoDB",
  },
  {
    icon: <BiLogoSpringBoot className="iconTech" />,
    label: "Spring Boot",
  },
];

const tabsList = ["experience", "education", "skills", "about me"];

const getTabContent = (tabName) => {
  switch (tabName) {
    case "experience":
      return <Experience value={tabName} />;
      break;
    case "education":
      return <Education value={tabName} />;
      break;
    case "skills":
      return <Skills value={tabName} />;
      break;
    case "about me":
      return <AboutMe value={tabName} />;
      break;
    default:
      return <Experience value={tabName} />;
  }
};

export default function Resume() {
  const [tabValue, setTabValue] = useState(tabsList[0]);

  useEffect(() => {
    setTabValue(tabsList[0]);
  }, [tabsList]);

  return (
    <div className="resume-container">
      <div className="resume">
        <Title label="Resume" />
        <div className="container">
          <div className="tabList">
            <div className="header">
              <div className="title">Why hire me ?</div>
              <div className="subTtile">
                Developer Analyst passionate about development and
                analysis of IT solutions. Skilled in Nextjs, Nodejs, MongoDB, I
                am known for my ability to learn quickly and work effectively in
                a team. My goal is to contribute to innovative projects while
                developing my technical and analytical skills
              </div>
            </div>
            <div className="tab-list-items">
              {tabsList.map((t, key) => {
                return (
                  <div
                    className={`tabItem ${tabValue === t ? "active" : ""}`}
                    key={key}
                    onClick={() => setTabValue(t)}
                  >
                    {t}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tabContent">{getTabContent(tabValue)}</div>
        </div>
      </div>
    </div>
  );
}

const experiences = [
  {
    period: "2023-2024",
    label: "Internship at MIC Belgium (Meet Innovate Create)",
    details: [
      "improve the ERP system of Oxygenius",
      "Microsoft Cognitive Services",
      "Microsoft Graph",
    ],
  },
  {
    period: "2023-2024",
    label: "Oresto Company",
    details: ["Own Project",
      "Online Restaurant Menu Creation Application",
      "Menu accessible by scanning a QR code"
    ],
  },
  // {
  //   period: "2022-2024",
  //   label: "ALDI Entrepôt Gembloux",
  //   details: ["Retrieve and stack store orders correctly on pallets"],
  // },
  // {
  //   period: "2021-2023",
  //   label: "UBER DRIVER",
  //   details: [
  //     "Picking up orders from restaurants",
  //     "Delivering orders quickly and safely to customers",
  //   ],
  // },
  // {
  //   period: "2018-2021",
  //   label: "Brasserie Exotique Knokke ",
  //   details: [
  //     "Bring dishes to the customers’ tables",
  //     "Washing the dishes in the kitchen",
  //     "Prepare certain dishes",
  //   ],
  // },
];

const Experience = ({ value }) => {
  return (
    <div>
      <Template title={value}>
        <ScrollArea className="h-72 w-49 scroll-area rounded-md ">
          <div className="p-4 grid grid-cols-2 gap-1">
            {experiences.map((e, key) => {
              return (
                <ExperienceItem
                  key={key}
                  period={e?.period}
                  label={e?.label}
                  details={e?.details}
                />
              );
            })}
          </div>
        </ScrollArea>
      </Template>
    </div>
  );
};

const educations = [
  {
    period: "Juillet 2024",
    label:
      "Bachelor’s Degree in Management Information Technology – IESN HENALLUX ",
  },
  {
    period: "Septembre 2018",
    label: "DAES",
  },
  {
    period: "Septembre 2017",
    label: "CESS – 7th Preparatory Year at St-Berthuin Malonne",
  },
];

const Education = ({ value }) => {
  return (
    <div>
      <Template title={value}>
        <ScrollArea className="h-72 w-49 scroll-area rounded-md ">
          <div className="p-4 grid grid-cols-2 gap-1">
            {educations.map((e, key) => {
              return (
                <ExperienceItem
                  key={key}
                  period={e?.period}
                  label={e?.label}
                  details={e?.details}
                />
              );
            })}
          </div>
        </ScrollArea>
      </Template>
    </div>
  );
};

const Skills = ({ value }) => {
  return (
    <div>
      <Template title={value}>
        <ScrollArea className="h-72 w-49 scroll-area rounded-md ">
          <div className="p-4 grid grid-cols-2 gap-1">
            {technologies.map((s, key) => {
              return <SkillsItem key={key} label={s?.label} icon={s?.icon} />;
            })}
          </div>
        </ScrollArea>
      </Template>
    </div>
  );
};

const infos = [
  {
    label: "Name",
    value: "Vially Dag",
  },
  {
    label: "Phone",
    value: (
      <a style={{ color: warning.dark }} href="tel:+32492473290">
        +32 492 47 32 90
      </a>
    ),
  },
  {
    label: "Adress",
    value: "5000 namur",
  },
  {
    label: "E-mail",
    value: (
      <a
        style={{ color: warning.dark }}
        href="mailto:v.dag@viallydaggroup.com"
      >
        v.dag@viallydaggroup.com
      </a>
    ),
  },
  {
    label: "Status",
    value: "Open to Work",
  },
  {
    label: "Languages",
    value: "French (C2), German (B1), English (A2)",
  },
];

const AboutMe = ({ value }) => {
  return (
    <div>
      <Template title={value}>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-1 infos">
          {infos.map((i, key) => {
            return (
              <div key={key} className="info">
                <div className="label"> {i?.label} </div>
                <div className="value text-white"> {i?.value} </div>
              </div>
            );
          })}
        </div>
      </Template>
    </div>
  );
};

const Template = ({ children, title, description }) => {
  return (
    <div className="template">
      <div className="head">
        <div className="title"> {title} </div>
        <div className="description"> {description} </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
