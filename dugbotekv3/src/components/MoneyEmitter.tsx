import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const moneyEmojis = ['💰', '💵', '💸', '🤑', '💎'];

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const MoneyEmitter = ({ isActive }: { isActive: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isActive) {
      // Create new particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        emoji: moneyEmojis[Math.floor(Math.random() * moneyEmojis.length)],
        x: (Math.random() - 0.5) * 200, // Random spread
        y: -Math.random() * 150 - 50, // Upward direction
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1
      }));
      
      setParticles(prev => [...prev, ...newParticles]);

      // Clean up particles after animation
      const timer = setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticles[0].id));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            opacity: 1,
            x: 0,
            y: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            opacity: 0,
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
            rotate: particle.rotation
          }}
          transition={{ 
            duration: 2,
            ease: [0.23, 0.96, 0.77, 0.99]
          }}
          className="absolute left-1/2 top-1/2 text-2xl"
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default MoneyEmitter; 