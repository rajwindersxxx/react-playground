import { gsap } from 'gsap';
import { useEffect } from 'react';
function App() {
  useEffect(() => {});
  function animation() {
    const tl = gsap.timeline({ delay: 2 });
    tl.to('.box1', { duration: 2, rotation: -360 }, 1.5)
      .to('.box2', { duration: 1, x: -100, ease: 'bounce.inOut' })
      .to('.box3', { duration: 2, rotation: 360, ease: 'expo.out' });
  }
  return (
    <div className="container mx-auto p-8" onClick={animation}>
      <div className="box1 green h-16 w-16 m-8 bg-green-500 rounded"></div>
      <div className="box2 purple h-16 w-16 m-8 bg-red-500 rounded"></div>
      <div className="box3 blue h-16 w-16 m-8 bg-purple-500 rounded"></div>
    </div>
  );
}

export default App;
