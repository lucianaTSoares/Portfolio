'use client';

import Typewriter from 'typewriter-effect';

interface TypewriteCustomProps {
  texts: string[];
}

export function TypewriteCustom({ texts }: TypewriteCustomProps) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(texts[0])
          .pauseFor(6000)
          .deleteChars(4)
          .typeString(texts[1])
          .pauseFor(6000)
          .deleteChars(10)
          .typeString(texts[2])
          .pauseFor(6000)
          .deleteChars(9)
          .typeString(texts[3])
          .pauseFor(6000)
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        delay: 20,
        deleteSpeed: 5,
        cursor: '',
      }}
    />
  );
}
