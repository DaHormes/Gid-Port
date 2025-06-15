"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://dahormes.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    additionalImages: [
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog-1.svg`,
    ],
    features: [
      "Responsive design",
      "Interactive forms",
      "SEO optimization",
      "Fast load times",
    ],
    liveLink: "https://example.com/fitness-landing",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    additionalImages: [
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog-1.svg`,
    ],
    features: [
      "Responsive design",
      "Interactive forms",
      "SEO optimization",
      "Fast load times",
    ],
    liveLink: "https://example.com/fitness-landing",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    additionalImages: [
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog-1.svg`,
    ],
    features: [
      "Responsive design",
      "Interactive forms",
      "SEO optimization",
      "Fast load times",
    ],
    liveLink: "https://example.com/fitness-landing",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Explore how I've helped businesses establish powerful digital presences.
          Whether you have an online idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality. 
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
