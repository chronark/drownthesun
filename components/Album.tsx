import React from "react"

export const Album = () => {
    return (
        <div className="bg-gray-50">
            <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-100 leading-9 sm:text-4xl sm:leading-10">
                    <span className="sm:text-6xl">24.12.2020</span>
                    <br></br>
                    <span className="text-red-600">Ready for our new album?</span>
                </h2>
                <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
                    <div className="inline-flex shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-gray-100 border border-transparent leading-6 transition duration-150 ease-in-out hover:bg-white focus:outline-none focus:shadow-outline"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="inline-flex ml-3 shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-black bg-red-600 border border-transparent leading-6 transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:shadow-outline"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
