import React from "react"

type Props = {
    venue: string
    date: string
    city: string
    country: string
    weekday: string
}

type ButtonProps = {
    className: string
    name: string
    href: string
}

const Button = (props: ButtonProps) => (
    <a
        href={props.href}
        className={` ${props.className} flex items-center  border border-transparent justify-center m-2 md:m-4 px-4 py-2 rounded-sm focus:outline-none  transition duration-150 ease-in-out`}
    >
        {props.name}
    </a>
)

const Concert = (props: Props) => (
    <div className="justify-between p-4 border-b md:flex border-carbon-800">
        <div className="flex justify-start min-w-0">
            <div>
                <h2 className="text-2xl font-bold leading-7 text-carbon-50 sm:text-3xl sm:leading-9 sm:truncate">
                    {props.date}
                </h2>
                <div className="flex items-center mt-2">
                    <span className="text-carbon-300">{props.country}</span>

                    <svg
                        className="w-4 h-4 mx-2 fill-current text-carbon-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                    <span className="text-carbon-300">{props.city}</span>
                    <svg
                        className="w-4 h-4 mx-2 fill-current text-carbon-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                    <a href="#" className="transition duration-200 text-carbon-200 hover:text-carbon-50">
                        {props.venue}
                    </a>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-2 md:mt-0 md:ml-4 md:justify-start md:items-center">
            <Button
                className="text-gray-900 bg-carbon-50 hover:text-black hover:bg-white"
                name="Event"
                href="#"
            ></Button>
            <Button className="text-base text-black bg-red-600 hover:bg-red-500" name="Tickets" href="#"></Button>{" "}
        </div>
    </div>
)

export default Concert
