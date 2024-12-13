import { useState } from 'react';
import { Nav } from './Nav';

export default function Gallery() {
  const [count, setCount] = useState(6);
  const [clickedImg, setClickedImage] = useState(0);
  const [showImage, setShowImage] = useState(false);
  return (
    <>
        <Nav />

      <div className="grid grid-cols-2 gap-4 md:w-[726px] m-4 md:grid-cols-3 mx-auto transition-all relative">
        {Array.from({ length: count }).map((_, i) => (
          <div
            className="overflow-hidden relative h-52 w-52"
            onClick={() => {
              setShowImage(true);
              setClickedImage(i + 1);
            }}
          >
            <img
              src={`./img/img(${i + 1}).jpg`}
              alt=""
              className="transition-all absolute h-full w-full object-cover hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className=" flex justify-center gap-4 w-full">
        <button
          className="button-sec text-white"
          onClick={() => setCount(i => i - 1)}
        >
          Decrease
        </button>
        <button
          className="button-sec text-white"
          onClick={() => setCount(i => i + 1)}
        >
          Increase
        </button>
        {showImage && (
          <div
            className="fixed h-full w-full top-0 left-0 flex flex-col gap-5 justify-center items-center bg-black bg-opacity-70 "
            onClick={() => setShowImage(false)}
          >
            <div className="w-3/4 h-3/4">
              <img
                src={`./img/img(${clickedImg}).jpg`}
                alt="test"
                className="object-contain w-full h-full"
                onClick={e => e.stopPropagation()}
              />
            </div>
            <div className="flex gap-4">
              <button
                className="button-sec text-white"
                onClick={e => {
                  setClickedImage(i => i - 1);
                  e.stopPropagation();
                }}
              >
                back
              </button>
              <button
                className="button-sec text-white"
                onClick={() => {
                  setShowImage(false);
                }}
              >
                Close
              </button>
              <button
                className="button-sec text-white"
                onClick={e => {
                  setClickedImage(i => i + 1);
                  e.stopPropagation();
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
