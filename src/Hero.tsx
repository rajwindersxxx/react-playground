import { Nav } from "./Nav";

export default function Hero() {
  return (
    <>
        <Nav />

      <div className=" container min-h-[600px] relative border border-blue-300  2my-4 rounded-sm">
        <img
          src="./img/img(5).jpg"
          alt="test"
          className="absolute h-full w-full object-cover brightness-75 z-0"
        />
        <div className="absolute text-white text-center w-2/3 bg-black px-8 py-12 bg-opacity-50 rounded-sm top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
          <h1 className="font-serif text-4xl mb-4 font-bold">
            welcome to my world
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            facilis enim? Dolor obcaecati possimus pariatur, itaque ab in,
            temporibus nulla eligendi voluptas cupiditate nisi sequi odio
            nesciunt distinctio magni recusandae.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-all">
              Learn more
            </button>
            <button className="border border-blue-50 rounded-md px-4 py-2 hover:bg-blue-500 transition-all">
              Submit data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Build a hero section with a background image, headline, subheading, and a call-to-action button.
// Use bg-cover, text-center, and responsive font sizes.
// Custom Button Variants:
