import { motion } from "framer-motion";

const DraggeableBox = () => {
  return (
    <motion.div className="w-32 h-32 bg-green-500 rounded-lg shadow-lg"
    drag
    dragContraints={{
        left:0,
        right:300,
        top:0,
        bottom:300,
    }}
    >
      Drag Me!
    </motion.div>
  )
}

export default DraggeableBox
