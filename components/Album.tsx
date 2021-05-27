import React from "react"
import Image from "next/image"
export const Album = () => {
    return (
        <div>
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10">
                    <span className="sm:text-6xl">
                        Neue Single: <span className="underline ">Confidence</span>
                    </span>
                </h2>
                <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
                    <div className="inline-flex shadow">
                        <a
                            target="blank"
                            href="https://open.spotify.com/track/7h3iiqxPR0upB8hnhJbjSK?si=67779615ca8b495a"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-gray-100 border border-transparent hover:bg-white focus:outline-none focus:shadow-outline"
                        >
                            Jetzt reinhören
                        </a>
                    </div>
                    {/* <div className="inline-flex ml-3 shadow">
                        <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-black transition duration-150 ease-in-out bg-red-600 border border-transparent hover:bg-red-500 focus:outline-none focus:shadow-outline"
                        >
                        Get started
                        </a>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full space-y-8 md:space-x-8 md:space-y-0 md:flex-row">
                <div>
                    <Image src="/img/dws_artwork1.jpg" width="400" height="400" />
                </div>
                <div>
                    <Image src="/img/dws2ohne logo.jpg" width="400" height="400" />
                </div>
            </div>
        </div>
    )
}
