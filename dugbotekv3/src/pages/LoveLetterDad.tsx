import React, { useState } from 'react';
import { useSpring, animated, config, useTrail } from '@react-spring/web';
import { motion, AnimatePresence } from 'framer-motion';

const LoveLetterDad: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Envelope animation
  const envelopeAnimation = useSpring({
    transform: isCardOpen ? 'scale(0)' : 'scale(1)',
    opacity: isCardOpen ? 0 : 1,
    config: { tension: 120, friction: 14 },
  });

  // Letter sliding animation
  const letterAnimation = useSpring({
    transform: isCardOpen ? 'scale(1)' : 'scale(0.8)',
    opacity: isCardOpen ? 1 : 0,
    config: { tension: 100, friction: 20 },
    delay: isCardOpen ? 300 : 0,
  });

  // Floating hearts with trail effect
  const trailHearts = useTrail(15, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  });

  // Confetti configuration
  const confettiColors = ['#4169E1', '#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6'];
  const confettiPieces = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    initialX: Math.random() * 100,
    initialRotation: Math.random() * 360,
    delay: Math.random() * 2,
  }));

  // Pulse animation for the bear hug emoji
  const bearAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.1) rotate(5deg)' });
        await next({ transform: 'scale(1) rotate(-5deg)' });
      }
    },
    config: config.wobbly,
  });

  // Message reveal animation
  const messageTrail = useTrail(6, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: isCardOpen ? 1 : 0, transform: isCardOpen ? 'translateX(0)' : 'translateX(-50px)' },
    config: { tension: 120, friction: 14 },
    delay: 800,
  });

  const handleEnvelopeClick = () => {
    setIsCardOpen(true);
    setTimeout(() => setShowConfetti(true), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200 relative overflow-hidden">
      {/* Floating Background Hearts */}
      {trailHearts.map((style, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 2 + 1}rem`,
          }}
          className="text-blue-300 opacity-50"
        >
          ♥
        </animated.div>
      ))}

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              x: `${piece.initialX}vw`,
              y: '-10vh',
              rotate: piece.initialRotation,
            }}
            animate={{
              y: '110vh',
              rotate: piece.initialRotation + 360 * 2,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4,
              delay: piece.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: piece.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl relative mb-32 -mt-20">
          {/* Envelope */}
          <animated.div
            style={envelopeAnimation}
            onClick={handleEnvelopeClick}
            className="bg-blue-600 rounded-lg shadow-2xl p-8 mb-8 cursor-pointer transform hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Click to Open ❤️</h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-9xl">✉️</span>
              </div>
            </div>
          </animated.div>

          {/* Letter Content */}
          <animated.div 
            style={letterAnimation}
            className="absolute top-0 left-0 w-full overflow-visible"
          >
            {/* Animated Bear */}
            <animated.div style={bearAnimation} className="bg-white rounded-2xl shadow-2xl p-8 mb-8 transform-gpu">
              <div className="text-center relative">
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-2 transform rotate-12">
                  Big Hug! 🤗
                </div>
                <div className="text-6xl mb-4">
                  🐻
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-blue-500 text-4xl"
                >
                  ❤️
                </motion.div>
              </div>
            </animated.div>

            {/* Message Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 pb-16 text-center relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg"
              >
                With Love ❤️
              </motion.div>

              <h1 className="text-5xl font-bold text-blue-600 mb-8 mt-4">
                Dear Dad ❤️
              </h1>

              <div className="space-y-6 text-lg text-blue-800">
                {messageTrail.map((style, index) => (
                  <animated.p
                    key={index}
                    style={style}
                    className="leading-relaxed"
                  >
                    {index === 0 && "I love you dad, you are truly the best father I could ask for! 🌟"}
                    {index === 1 && "Your wisdom and advice have been invaluable in shaping who I am today. 🎯"}
                    {index === 2 && "You inspire me to work harder every single day with your dedication and perseverance. 💪"}
                    {index === 3 && "Thank you for always being there, guiding me, and showing me the path to success. 🌠"}
                    {index === 4 && (
                      <span className="font-bold text-xl">
                        You're my role model and the best mentor I could ever have! ⭐
                      </span>
                    )}
                    {index === 5 && (
                      <motion.div
                        className="mt-8 text-right italic text-xl text-blue-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        With all my love,<br />
                        Sola, your son ❤️
                      </motion.div>
                    )}
                  </animated.p>
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -top-4 -left-4 text-4xl"
                animate={{
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                🌟
              </motion.div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetterDad; 