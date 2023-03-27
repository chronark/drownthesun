import Image from "next/image";
import { Album } from "./components/album";
import { SocialIcons } from "./components/social";
import { UpcomingEvents } from "./components/upcoming-events";
import { events } from "../events";
export default function Home() {
  return (
    <div className="bg-black ">
      <div className=" z-10 relative isolate overflow-hidden min-h-screen">
        <Image
          src="/img/hero-bg.jpeg"
          alt=""
          fill={true}
          className="absolute inset-0 -z-10 h-full w-full object-scale-down grayscale"
        />

        {/* Fade to black at top of screen */}
        <div className="absolute inset-x-0 top-0  h-24 bg-gradient-to-b from-black sm:h-32" />

        {/* Left side with black overlay */}
        <div
          className="absolute inset-y-0 right-1/2 bg-opacity-75 -z-10 w-[200%] origin-top-right skew-x-[-30deg] bg-black  shadow-xl shadow-red-600 ring-2 ring-red-600 -mr-80 lg:-mr-96"
          aria-hidden="true"
        />

        <div className="w-full px-6 flex flex-col justify-center h-screen items-center ">
          <h1 className="text-6xl text-center uppercase font-black tracking-tight  text-white sm:text-8xl lg:col-span-2 xl:col-auto">
            Drown The <span className="text-red-600">Sun</span>
          </h1>
          <div className="mt-6 ">
            <SocialIcons />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-black sm:h-32" />
      </div>
      <UpcomingEvents events={events} />
      <div className="overflow-hidden  py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-carbon-900 sm:text-4xl" />
              <p className="mt-6 text-xl leading-8 text-carbon-600">
                Drown the Sun takes you on a journey into a world where the sun has forever
                extinguished, yet hope still refuses to follow suit. It is a place where darkness
                reigns supreme, but where the unwavering spirit of humanity still fights to survive.
              </p>
              <p className="mt-6 text-base leading-7 text-carbon-600">
                So come with us, and together we shall drown the sun, yet let the embers of hope
                shine brighter than ever before.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="/img/band_2.jpeg"
                  alt=""
                  className="grayscale hover:grayscale-0 duration-1000 aspect-[7/5] w-[37rem] max-w-none rounded-lg bg-carbon-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="/img/crazy_drummer.jpeg"
                    alt=""
                    className="grayscale hover:grayscale-0 duration-1000 aspect-[4/3] w-[24rem] max-w-none flex-none rounded-lg bg-carbon-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="/img/concert.jpeg"
                    alt=""
                    className="grayscale hover:grayscale-0 duration-1000 aspect-[7/5] w-[37rem] max-w-none flex-none rounded-lg bg-carbon-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="/img/concert_2.jpeg"
                    alt=""
                    className="grayscale hover:grayscale-0 duration-1000 aspect-[4/3] w-[24rem] max-w-none rounded-lg bg-carbon-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Album
        cover="/img/dws2ohne logo.jpg"
        title="Drown The Sun - Deficiency "
        spotifyLink="https://open.spotify.com/album/4VPzxQZoGzF5BvHLKbJ2kV?si=s4mf-TIJRHyL1Gz42bxC1A"
      />
    </div>
  );
}
