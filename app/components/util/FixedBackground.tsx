// components/FixedBackground.tsx
import { motion } from 'framer-motion';

interface FixedBackgroundProps {
  color: string;
}

const FixedBackground: React.FC<FixedBackgroundProps> = ({ color }) => {
  return (
    <motion.div
      initial={{ backgroundColor: '#000000' }}
      animate={{ backgroundColor: color }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full -z-0"
    />
  );
};

export default FixedBackground;