const options = {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#495285'],
    },
    destroy: {
      mode: 'split',
      split: {
        count: 1,
        factor: {
          value: 9,
          random: {
            enable: true,
            minimumValue: 4,
          },
        },
        rate: {
          value: 10,
          random: {
            enable: true,
            minimumValue: 5,
          },
        },
        particles: {
          collisions: {
            enable: false,
          },
          destroy: {
            mode: 'none',
          },
          life: {
            count: 1,
            duration: {
              value: 1,
            },
          },
        },
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 15,
      random: {
        enable: true,
        minimumValue: 10,
      },
      animation: {
        enable: false,
        speed: 30,
        minimumValue: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
      mode: 'destroy',
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  detectRetina: true,
};

export default options;
