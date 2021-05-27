import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"

import Hamburger from "./Hamburger"
import NavbarButton from "./NavbarButton"
import Link from "next/link"
import { HomeIcon, MailIcon } from "@heroicons/react/outline"
type Props = {
    desktopAlwaysOpen?: boolean
}
const Navbar = (props: Props) => {
    const [desktopOpen, setDesktopOpen] = useState(props.desktopAlwaysOpen || false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        setScrolled(window.pageYOffset > 50)
    }

    useEffect(() => {
        setDesktopOpen(scrolled)
    }, [scrolled])

    if (typeof window !== "undefined") {
        scrollY = window.pageYOffset
        window.addEventListener("scroll", handleScroll)
    }

    return (
        <>
            <div className="fixed z-10 w-full">
                <div
                    className={`bg-carbon-900 left-0 w-screen h-20 fixed transform transition duration-500 ease-in-out opacity-0 ${
                        scrolled ? "opacity-100" : "-translate-y-full delay-200"
                    }`}
                ></div>
                <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8 md:h-20">
                    <nav className="flex items-center justify-between lg:justify-start">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full sm:w-auto">
                                <a className="sm:hidden" href="#">
                                    <img className="w-auto h-8 sm:h-10" src="/img/logo.png" alt="" />
                                </a>
                                <div
                                    className={`flex items-center -mr-2 ${props.desktopAlwaysOpen ? "sm:hidden" : ""}`}
                                >
                                    <Hamburger
                                        className="hidden md:block"
                                        onClick={() => setDesktopOpen(!desktopOpen)}
                                    ></Hamburger>
                                    <Hamburger
                                        className="md:hidden"
                                        onClick={() => setMobileOpen(!mobileOpen)}
                                    ></Hamburger>
                                    <div className="md:hidden">
                                        <Transition appear show={mobileOpen} as={Fragment}>
                                            <Dialog
                                                as="div"
                                                className="fixed inset-0 z-50 overflow-y-auto"
                                                onClose={() => setMobileOpen(false)}
                                            >
                                                <div className="min-h-screen px-4 text-center">
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-75 bg-carbon-900" />
                                                    </Transition.Child>

                                                    {/* This element is to trick the browser into centering the modal contents. */}
                                                    <span
                                                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                                        aria-hidden="true"
                                                    >
                                                        &#8203;
                                                    </span>
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 scale-95"
                                                        enterTo="opacity-100 scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 scale-100"
                                                        leaveTo="opacity-0 scale-95"
                                                    >
                                                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-200 rounded shadow-xl">
                                                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                                <Link href="/">
                                                                    <a className="flex items-start p-3 -m-3 rounded hover:bg-gray-300">
                                                                        <HomeIcon
                                                                            className="flex-shrink-0 w-6 h-6 text-gray-800"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <div className="ml-4">
                                                                            <p className="text-base font-medium text-gray-800">
                                                                                Home
                                                                            </p>
                                                                            {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                                <Link href="mailto:info@drownthesun.com">
                                                                    <a className="flex items-start p-3 -m-3 rounded hover:bg-gray-300">
                                                                        <MailIcon
                                                                            className="flex-shrink-0 w-6 h-6 text-gray-800"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <div className="ml-4">
                                                                            <p className="text-base font-medium text-gray-800">
                                                                                Kontakt
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                Schick uns eine Email
                                                                            </p>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </Transition.Child>
                                                </div>
                                            </Dialog>
                                        </Transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            // menu navbar at the top
                            className={`hidden sm:block transform duration-500 transition ease-in-out opacity-0 md:ml-10 md:pr-4 z-0 ${
                                desktopOpen ? "opacity-100 delay-100" : "translate-x-20 lg:-translate-x-20 hidden"
                            }`}
                        >
                            <NavbarButton to="index" name="Home"></NavbarButton>
                            <NavbarButton to="album" name="Neues Album"></NavbarButton>
                            <NavbarButton to="tour" name="Tour"></NavbarButton>
                            <Link href="mailto:info@drownthesun.com">
                                <a className="ml-8 text-sm font-bold transition ease-in-out duration-250 text-carbon-100 hover:text-white focus:outline-none">
                                    Kontakt
                                </a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
