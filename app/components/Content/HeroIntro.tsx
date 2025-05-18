// 'use client';
// import { Content } from '@/app/Global/Strings';
// import React, { useEffect, useState } from 'react';
// import { FaDownload } from 'react-icons/fa6';

// const HeroIntro = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Split text into words instead of characters
//   const introWords = Content.INTRO.split(' ');
//   const descWords = Content.DESC.split(' ');

//   return (
//     <div className='hidden lg:flex gap-14 flex-col'>
//       <article
//         id="intro"
//         className={`font-mono lg:text-8xl text-5xl font-bold transition-all duration-1000 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
//         }`}
//       >
//         <h1 className="overflow-hidden">
//           {introWords.map((word, index) => (
//             <span
//               key={index}
//               className="mr-[0.3em] inline-block"
//               style={{
//                 animation: `fadeIn 0.5s forwards ${index * 0.2}s`,
//                 opacity: 0,
//               }}
//             >
//               {word}
//             </span>
//           ))}
//         </h1>
//         <h2 className="w-full overflow-hidden">
//           {descWords.map((word, index) => (
//             <span
//               key={index}
//               className="mr-[0.3em] inline-block"
//               style={{
//                 animation: `fadeIn 0.5s forwards ${index * 0.2 + 0.5}s`,
//                 opacity: 0,
//               }}
//             >
//               {word}
//             </span>
//           ))}
//         </h2>
//       </article>
//       <a href="#" target="_blank" rel="noopener noreferrer">
//         <span
//           className={`bg-borders shadow-custom flex h-[3rem] w-fit items-center justify-center gap-2.5 rounded-2xl px-6 py-2 font-mono text-[1.3rem] transition-all duration-700 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
//           }`}
//         >
//           Download CV
//           <FaDownload />
//         </span>
//       </a>
//     </div>
//   );
// };

// export default HeroIntro;
