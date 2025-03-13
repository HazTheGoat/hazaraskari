import Particles from 'react-tsparticles';

import { loadFull } from 'tsparticles';

export const Animation = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  return (
    <div
      id="particles-js"
      style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          zIndex: 0,
        }}
        options={{
          fullScreen: {
            enable: false,
          },
          particles: {
            number: {
              value: 250, // number of particles
            },
            shape: {
              type: '',
            },
            line_linked: {
              enable: true,
              distance: 50, // distance between particles
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
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: false,
            },
            modes: {
              repulse: {
                distance: 100,
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
    </div>
  );
};
