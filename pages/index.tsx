import React from "react"
import Link from "next/link"
import Headline from "../components/Headline"
import Layout from "../components/Layout"
import { ConcertType, concerts } from "../public/content/concerts"

import Navbar from "../components/Navbar"
import { NextPage } from "next"
import SocialMedia from "../components/SocialMedia"
import Tour from "../components/Tour"
import { Album } from "../components/Album"

interface Props {
    concerts?: ConcertType[]
}

const Home: NextPage<Props> = ({ concerts }) => {
    return (
        <Layout>
            <Navbar></Navbar>
            <section className="pt-20 md:pt-0" id="index">
                <div
                    className="flex items-center justify-center w-screen bg-center bg-cover sm:h-screen"
                    style={{
                        backgroundImage: "url(img/header.jpeg)",
                    }}
                >
                    <div className="flex items-center justify-center w-full h-full pt-8 bg-black bg-opacity-75 md:pt-0">
                        <div className="flex flex-col px-8">
                            <div className="h-full sm:text-center lg:text-left">
                                <div className="md:mt-20">
                                    <Headline></Headline>
                                </div>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:mt-16">
                                    <Link href="https://open.spotify.com/artist/2yFB2TDFWStvT5nYj8g8Hc?si=ZfTcfzjERci_O825wNvwFw">
                                        <a
                                            className="items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-sm shadow-xl md:flex text-carbon-900 hover:text-black hover:shadow-glow hover:bg-white focus:outline-none focus:shadow-outline focus:border-red-300 md:py-4 md:text-lg md:px-10 md:max-w-xs"
                                            target="blank"
                                        >
                                            Hör rein!
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="mx-auto mt-8 mb-4 md:mt-24 md:mb-8 lg:flex lg:justify-center">
                                <SocialMedia></SocialMedia>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pt-8 mx-auto md:pt-40 bg-carbon-900" id="album">
                <Album></Album>
            </section>
            <section className="container pt-8 mx-auto md:pt-40 bg-carbon-900" id="tour">
                <Tour concerts={concerts}></Tour>
            </section>
            <footer className="container mx-auto text-carbon-400">
                <div className="flex flex-col items-center justify-between px-5 py-8 mx-auto space-y-2 sm:space-y-0 sm:flex-row">
                    <span className="mt-4 text-sm text-carbon-300 sm:py-2 sm:mt-0">
                        © {new Date().getUTCFullYear()} Drown The Sun
                    </span>
                    <div className="flex items-center space-x-6 text-carbon-600">
                        <a
                            aria-label="Facebook"
                            className="w-5 h-5 fill-current hover:text-carbon-300"
                            target="blank"
                            href="https://www.facebook.com/2DrownTheSun/?eid=ARC8VTMTbZ9jsq2RtEkA9kF3Bz06oE6Z2lvKJlsJpnwLeAhAgR24u1IXBEzqfW4R3T9cNlGXtIjr9RRZ"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                            </svg>
                        </a>
                        <a
                            aria-label="Instagram"
                            className="w-5 h-5 fill-current hover:text-carbon-300"
                            target="blank"
                            href="https://www.instagram.com/drown_the_sun/?hl=de"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                        </a>
                        <a
                            aria-label="Spotify"
                            className="w-5 h-5 fill-current hover:text-carbon-300"
                            target="blank"
                            href="https://open.spotify.com/artist/2yFB2TDFWStvT5nYj8g8Hc?si=ODHYkTPrTeCUb0Scrimzwg"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                        </a>
                        <a
                            aria-label="Youtube"
                            className="w-5 h-5 fill-current hover:text-carbon-300"
                            target="blank"
                            href="https://www.youtube.com/channel/UCLhT0cRde-LP89Va_jON7fA"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            concerts,
        },
    }
}

export default Home
