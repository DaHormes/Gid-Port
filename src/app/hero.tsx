"use client";

//Input, Button, 
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

export function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Elevating Digital Experiences!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            My name is Gideon, a passionate web developer. <br/>
             Building exceptional websites that transform brands 
            and deliver measurable results for clients worldwide.
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="profile"
          src={`${getImagePrefix()}image/avatar1.png`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;


{/*
 </Typography>
                 
                    <div className="grid">
                      <Typography
                        variant="small"
                        className="mb-2 text-gray-900 font-medium"
                      >
                        Your email
                      </Typography>
                      <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                        {/* @ts-ignore 
                        <Input color="gray" label="Enter your email" size="lg" />
                        <Button color="gray" className="w-full px-4 md:w-[12rem]">
                          require offer
                        </Button>
                      </div>
                    </div>
                    <Typography variant="small" className="font-normal !text-gray-500">
                      Read my{" "}
                      <a href="#" className="font-medium underline transition-colors">
                        Terms and Conditions
                      </a>
                    </Typography> 
                    */}