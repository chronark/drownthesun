import Link from "next/link";

import { events } from "@/events";

export default function Events() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-carbon-100 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-2 text-lg leading-8 text-carbon-400">
            {/* Learn how to grow your business with our expert advice. */}
          </p>
          <div className="mt-10 space-y-16 border-t border-carbon-800 pt-10 sm:mt-16 sm:pt-16">
            {events.map((event) => (
              <Link
                href={event.href ?? "#"}
                key={event.name}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={event.date} className="text-carbon-500">
                    {event.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-carbon-100 group-hover:text-carbon-400">
                    <a href={event.href}>
                      <span className="absolute inset-0" />
                      {event.name}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-carbon-400 line-clamp-3">
                    {event.description}
                  </p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={event.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-carbon-900" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-carbon-100">
                                            <a href={event.author.href}>
                                                <span className="absolute inset-0" />
                                                {event.author.name}
                                            </a>
                                        </p>
                                        <p className="text-carbon-400">{event.author.role}</p>
                                    </div>
                                </div> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
