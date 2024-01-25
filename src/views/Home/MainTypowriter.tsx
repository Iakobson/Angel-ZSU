// @/views/Home/MainTypowriter.tsx
'use client';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const typeVariants = {
  initial: { x: '-100vw' },
  animate: {
    x: '0',
    transition: {
      x: { duration: 1 },
    },
  },
};

export default function MainTypowriter() {
  return (
    <motion.div
      variants={typeVariants}
      animate="animate" initial="initial"
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .typeString('БО БФ <strong>"Янгол Збройних Сил України"</strong>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Angel Zbroinykh Syl Ukrayiny')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Благодійний фонд “Янгол ЗСУ”')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Charity Fund <strong>"Angel ZSU"</strong>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Angel of the Armed Forces of Ukraine')
            .pauseFor(1000)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </motion.div>
  );
}