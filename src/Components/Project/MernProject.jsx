import ProjectCard from "./ProjectCard";
import "./Project.css";
import myDairy from "../../img/Mydairy.png";
import crypto from "../../img/crypto.png";
import escapeNormalcy from "../../img/escapeNormalcy.png";

import Socify from "../../img/socify.png";

function MernProject() {
  const projects = [
    {
      title: "Escape Normalcy",
      description:
        "A full-stack personal finance platform that helps users learn, organize, and manage their money. Includes an admin-driven digital product system where Excel-based finance tools are uploaded, sold, and delivered automatically after secure payment.",
      tech: "MERN Stack, Payment Gateway, Amazon S3",
      imgUrl: escapeNormalcy, // make sure this image import exists
      code: "", // private or not available
      demo: "https://escapenormalcy.in/",
    },
    {
      title: "Socify",
      description:
        "A full-stack social media platform that allows users to register, share thoughts and images, explore posts from others, and engage by following friends.",
      tech: "MERN Stack",
      imgUrl: Socify,
      code: "https://github.com/VijayaragavanS1999/socify-Frontend",
      demo: "https://socify-app.onrender.com",
    },
    {
      title: "Crypto Tracker",
      description:
        "An interactive web application to track cryptocurrency market performance including price, volume, 24-hour changes, and market capitalization, with search functionality by coin name.",
      tech: "HTML, CSS, React",
      imgUrl: crypto,
      code: "https://github.com/VijayaragavanS1999/Cryto-tracker",
      demo: "https://crypto-market1999.netlify.app",
    },
  ];


  return (
    <section className="project" id="project">
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}

      <img className="background-image-right" src={""}></img>
    </section>
  );
}

export default MernProject;
