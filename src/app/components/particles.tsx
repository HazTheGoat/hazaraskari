import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import { motion } from 'framer-motion';

export const Animation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  if (init) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Particles
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
            },
            particles: {
              number: {
                value: 650, // number of particles
                density: {
                  enable: true,
                  height: 400,
                  width: 400,
                },
              },
              shape: {
                type: '',
              },
              links: {
                enable: true,
                distance: 20, // distance between particles
                color: '#39FF14', // color of lines
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.7,
                direction: 'none',
                random: false,
                straight: false,
                outModes: {
                  default: 'out',
                },
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
              },
            },
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onDiv: {
                  selectors: '#repulse-div',
                  mode: 'repulse',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                onClick: {
                  enable: false,
                  mode: 'push',
                },
              },
              modes: {
                repulse: {
                  distance: 40,
                  duration: 1,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </motion.div>
    );
  }
  return null;
};
