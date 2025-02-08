import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Njoin Home Page",
    mockup: "/mockups/njoin-home.png",
    live: "https://njoin.co/",
    code: "https://github.com/Tobzzy/njoin-homepage",
  },
  {
    title: "Njoin Booking App",
    mockup: "/mockups/njoin-app.png",
    live: "https://app.njoin.co/",
    code: "https://github.com/Tobzzy/booking-app",
  },
  {
    title: "Calculator",
    mockup: "/mockups/calculator.png",
    live: "https://calculator-olami.netlify.app/",
    code: "https://github.com/Tobzzy/calculator",
  },
  {
    title: "Slide Editor",
    mockup: "/mockups/story-doc.png",
    live: "https://story-doc.netlify.app/",
    code: "https://github.com/Tobzzy/story-doc",
  },
];

const Portfolio = () => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:w-1/2 flex flex-col items-center justify-center"
          >
            <img src={project.mockup} />
            <h1 className="text-3xl mb-2">{project.title}</h1>
            <div className="flex gap-2">
              <Link
                href={project.live}
                target="_blank"
                className="btn btn-secondary"
              >
                Live
              </Link>
              <Link
                href={project.code}
                target="_blank"
                className="btn btn-primary"
              >
                Source
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
