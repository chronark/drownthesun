import Image from "next/image";

export const Video: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Video</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Yo wie heißt das Gerät?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ich weiß nicht viel, aber Laura macht mit, also ist das schonmal gut.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/img/laura.jpeg"
            alt="Video Thumbnail"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10 grayscale"
            width={1280}
            height={720}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-black pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
