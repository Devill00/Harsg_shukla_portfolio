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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A React app for movies",
    description:
      "The Movie Explorer App is a dynamic React application designed for movie enthusiasts. It provides a comprehensive platform to discover the latest and trending films, complete with detailed information, trailers, and robust search and sorting functionalities.",
    url: "https://movive.vercel.app",
  },
  {
    title: "Green-Haven dashboard",
    description:
      "Green Haven is an innovative dashboard designed for plant enthusiasts and sellers, offering a seamless platform to buy and sell a variety of plants. With a focus on user experience, this application simplifies the process of exploring, purchasing, and managing plant collections.",
    url: "https://green-haven-dashboard.vercel.app/",
  },
  {
    title: "A fullstack Ecommerce website",
    description:
      "A fully functional ecommerce website using react and tailwind that can manage the products, its details, with their purchasing and order details. It is accompanied with secured authentication using jwt and session management and payment methods(stripe authentication).",
    url: "https://ecommerce-gules-six-31.vercel.app/",
  },
  {
    title: "A Real time chat app",
    description:
      "Working on a real time chat app using react, node and socket.io that can manage messages between multiple clients.",
    url: "",
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
