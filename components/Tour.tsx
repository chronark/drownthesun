import Concert from "./Concert"
import { ConcertType } from "../public/content/concerts"
import { NextPage } from "next"
import SectionHeadline from "./SectionHeadline"

interface Props {
    concerts?: ConcertType[]
}

const Tour: NextPage<Props> = ({ concerts }) => {
    const tourDates = concerts ? (
        concerts.map((concert: ConcertType) => (
            <Concert
                key={concert.city + concert.date}
                country={concert.country}
                weekday={concert.weekday}
                venue={concert.venue}
                city={concert.city}
                date={concert.date}
            ></Concert>
        ))
    ) : (
        <p className="px-8 mt-8 text-gray-500 md:text-center">
            There are currently no concerts planned, please come back later.
        </p>
    )

    return (
        <div className="mx-auto">
            <SectionHeadline name="Tour / Concerts"></SectionHeadline>

            <p className="px-8 mt-4 text-xl leading-7 text-carbon-300 sm:mx-auto md:text-center">
                Mit den enuen Songs geht es bald wieder los!
            </p>
            <div className="">{tourDates}</div>
        </div>
    )
}

export default Tour
