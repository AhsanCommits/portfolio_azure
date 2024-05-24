/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Learnify Hub - LMS 🎉",
    description:
      "Tech Stack: Typescript, Redis, Next 13, RTK Query, Socket.io, Node JS, Express JS, MongoDB",
    url: "https://www.learnifyhub.co/",
  },
  {
    title: "Ahsanflix - Netflix API",
    description:
      "Tech Stack: Next JS, MongoDB, React.Js, API Integration,CSS And Database Management",
    url: "https://ahsanflix.vercel.app/",
  },
  {
    title: "Promptopia - Marketplace",
    description: "Tech Stack: Next JS, Tailwind CSS, Dynamic Routing, MongoDB",
    url: "https://promptopia-ai.vercel.app/",
  },
  {
    title: "Tindog - Startup",
    description: "Tech Stack: HTML, CSS, Bootstrap",
    url: "https://ahsancommits.github.io/tinDog/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
