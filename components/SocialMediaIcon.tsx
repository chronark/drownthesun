import React, { FunctionComponent, ReactElement } from "react"

import PropTypes from "prop-types"

type Props = {
    className?: string
}

const SocialMediaIcon: FunctionComponent<Props> = (props) => (
    <div
        className={`${props.className} w-10 h-10 lg:w-8 lg:h-8 duration-200 ease-in-out transform hover:text-carbon-50 hover:scale-150 hover:-translate-y-2`}
    >
        {props.children}
    </div>
)

export default SocialMediaIcon
