import { Link } from 'react-router-dom';
import { Nav } from './Nav';

export function Card() {
  return (
    <>
      <Nav />
      <div className="card w-96 bg-red-100  rounded-md overflow-hidden grid gap-6  md:grid-cols-2 md:w-[800px] md:p-4 items-center transition-all hover:-translate-y-1 hover:shadow-sm m-4">
        <div className="overflow-hidden">
          <img
            src="./img/img(11).jpg"
            alt="cover image"
            className="border border-red-200"
          />
        </div>
        <div className="px-4">
          <h1 className="font-serif bold text-2xl pb-4 uppercase">
            this is a card
          </h1>
          <p className="font-sans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            accusantium, cupiditate labore omnis incidunt sint reiciendis
            obcaecati similique excepturi commodi perferendis repellat
            dignissimos at earum, consectetur recusandae vitae aliquid sunt!
          </p>
        </div>
        <div className="flex justify-center md:col-span-2">
          <Link to='message' className=" transition-all py-2 px-4 bg-red-400 text-gray-100 text-xl text-center hover:bg-red-500 hover:text-white rounded-md mb-4">
            submit
          </Link>
          
        </div>
        
      </div>
    </>
  );
}
