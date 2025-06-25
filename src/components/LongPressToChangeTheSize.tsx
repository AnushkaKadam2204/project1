import { useState } from "react";
import { motion } from "framer-motion";

const LongPressToChangeTheSize = () => {
  const [isLarge, setIsLarge] = useState(false);

    const handleLongPressStart = () => setIsLarge(true);
    const handleLongPressEnd = () => setIsLarge(false);

  return (
    <motion.div
        onTapStart={handleLongPressStart}
        onTapCancel={handleLongPressEnd}
        onTap={handleLongPressEnd}
      className={`w-32 bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
        isLarge ? "w-48h-48" : ""
      }`}
    >
      Long press me!
    </motion.div>
  );
};

export default LongPressToChangeTheSize;
