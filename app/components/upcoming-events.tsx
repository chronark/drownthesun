type Props = {
  events: {
    name: string;
    date: string;
    description: string;
  }[];
};

export const UpcomingEvents: React.FC<Props> = ({ events }) => {
  return (
    <div id="events" className="mx-auto container px-6 lg:px-8 flex justify-center w-full mt-16">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 w-full">
        {events.map((event) => (
          <div key={event.name}>
            <time
              dateTime={event.date}
              className="flex items-center text-sm font-semibold leading-6 text-carbon-200"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none text-red-500 "
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {event.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-red-600/50 sm:-ml-4 lg:static lg:ml-8 lg:-mr-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-carbon-300">
              {event.name}
            </p>
            <p className="mt-1 text-base leading-7 text-carbon-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
