import React from "react"

type Props = {
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
    className: string
}

const Hamburger = (props: Props) => {
    return (
        <button
            aria-label="Menu"
            onClick={props.onClick}
            className={`z-50 items-center justify-center block p-2 transition duration-150 ease-in-out rounded-sm text-carbon-200 hover:text-gray-500 hover:bg-gray-100 hover:outline-none focus:outline-none ${props.className}`}
        >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    )
}

export default Hamburger
