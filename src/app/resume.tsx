"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            About Me
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Transforming Digital Presence Through Strategic Design
            <br/>
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
            <br/>
            Creating digital solutions that empower businesses to succeed in an increasingly connected world.
          </Typography>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full  px-3 py-1 text-sm text-neon-pink">WordPress</div>
                  <div className="rounded-full bg-[#ffff3c] px-3 py-1 text-sm text-neon-blue">Shopify</div>
                  <div className="rounded-full bg-[#245a3c] px-3 py-1 text-sm text-neon-purple">Web Design</div>
                  <div className="rounded-full bg-[#2a2a3c] px-3 py-1 text-sm texest-neon-green">UI/UX</div>
                  <div className="rounded-full  px-3 py-1 text-sm text-neon-yellow">E-commerce</div>
                  <div className="rounded-full bg-[#2a2a3c] px-3 py-1 text-sm text-neon-orange">AI Integration</div>
                </div>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            Let's Build Together
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
