'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';


const AnimationDuLoader = () => {

  // création du routeur (à l'intérieur de la composante)
  const router = useRouter();
  const scopeRef = useRef();

  useGSAP(() => {
    // plus tard, à la création de la timeline
    const tl = gsap.timeline({
      onComplete: () => {
        router.replace('/page-principale');
      }
    });

    tl.to(".Image-Loader", {
      x: 200,
      duration: 2
    });

  }, { scope: scopeRef});

  return (
    <div ref={scopeRef} className='Loader'>
      <img className='Image-Loader' src="/images/svg/forme01.svg" alt="" />
    </div>
  )
};

export default AnimationDuLoader;