// import Image from "next/image";
// import { useState } from "react";

// export default function PlaceSection() {
//   const [amount, setAmount] = useState(200);

//   return (
//     <div className="relative mt-[3.125rem] flex flex-col lg:flex-row w-full max-w-[1100px]">
//       <div className="absolute left-0 top-0 w-full h-full hidden lg:block">
//         <Image
//           alt=""
//           width={1170}
//           height={510}
//           src="/images/hero/background.png"
//           layout="responsive"
//         />
//       </div>

//       <div className="w-full lg:w-1/2 h-full">
//         <Image
//           alt=""
//           src="/images/hero/place.png"
//           width={755}
//           height={713}
//           layout="responsive"
//         />
//       </div>
//       <div className="w-full lg:w-1/2 z-10 p-[2.5rem] -mt-[120px] md:-mt-[150px] lg:-mt-[20px]">
//         <p className="text-[#A7ADB4] text-[26px] sm:32px xl:text-[36px] leading-[36px] sm:leading-[42px]">
//           Welcome to Zort Trading Arena, a{" "}
//           <span className="text-white">decentralized trading platform</span>{" "}
//           merging analytics, binary, crypto derivatives, and leveraging, with
//           on-chain smart contract data verification
//         </p>
//       </div>
//     </div>
//   );
// }
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function PlaceSection() {
//   const [showImage, setShowImage] = useState(false);

//   // Trigger the fade-in effect after 0.5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowImage(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative mt-[3.125rem] flex flex-col lg:flex-row w-full max-w-[1100px]">
//       <div className={`absolute left-0 top-0 w-full h-full hidden lg:block ${showImage ? 'fade-in' : ''}`}>
//         <Image
//           alt="Background"
//           width={1170}
//           height={510}
//           src="/images/hero/background.png"
//           layout="responsive"
//         />
//       </div>

//       <div className={`w-full lg:w-1/2 h-full ${showImage ? 'fade-in' : ''}`}>
//         <Image
//           alt="Place"
//           src="/images/hero/place.png"
//           width={755}
//           height={713}
//           layout="responsive"
//         />
//       </div>
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function PlaceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Is the element in view?
        if (entries[0].isIntersecting) {
          // Set isVisible state to true
          setIsVisible(true);
          // Disconnect the observer as the element is in view
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is in view
    );

    // Observe the ref'd element
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-[3.125rem] flex flex-col lg:flex-row w-full max-w-[1100px]">
      <div className={`absolute left-0 top-0 w-full h-full hidden lg:block ${isVisible ? 'fade-in' : ''}`}>
        <Image
          alt="Background"
          width={1170}
          height={510}
          src="/images/hero/background.png"
          layout="responsive"
        />
      </div>

      <div className={`w-full lg:w-1/2 h-full ${isVisible ? 'fade-in' : ''}`}>
        <Image
          alt="Place"
          src="/images/hero/place.png"
          width={755}
          height={713}
          layout="responsive"
        />
      </div>
      {/* The rest of your JSX can remain unchanged */}
      <div className="w-full lg:w-1/2 z-10 p-[2.5rem] -mt-[120px] md:-mt-[150px] lg:mt-0">
        <p className="text-[#A7ADB4] text-[26px] sm:text-[32px] xl:text-[36px] leading-[36px] sm:leading-[42px]">
          Welcome to Zort Trading Arena, a{" "}
          <span className="text-white">decentralized trading platform</span>{" "}
          merging analytics, binary, crypto derivatives, and leveraging, with
          on-chain smart contract data verification.
        </p>
      </div>
    </div>
  );
}
