import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedPathProps {
  path: string;
  color?: string;
  progress?: number;
}

const AnimatedPath: React.FC<AnimatedPathProps> = ({ 
  path, 
  color = '#94a3b8',
  progress = 1 
}) => {
  const [pathLength, setPathLength] = useState(0);
  
  useEffect(() => {
    const element = document.querySelector('.flow-path');
    if (element) {
      setPathLength(element.getTotalLength());
    }
  }, [path]);

  return (
    <>
      {/* Background path */}
      <path
        d={path}
        stroke={color}
        strokeOpacity={0.2}
        strokeWidth={2}
        fill="none"
      />
      
      {/* Animated progress path */}
      <motion.path
        d={path}
        stroke={color}
        className="flow-path"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ 
          duration: 1.5, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="5"
      />
      
      {/* Animated dot */}
      <motion.circle
        cx="0"
        cy="0"
        r="3"
        fill={color}
        initial={{ offset: 0 }}
        animate={{ 
          offset: 1,
          transition: {
            duration: 1.5,
            ease: "linear",
            repeat: Infinity
          }
        }}
      >
        <animateMotion
          dur="1.5s"
          repeatCount="indefinite"
          path={path}
        />
      </motion.circle>
    </>
  );
};

export default AnimatedPath; 