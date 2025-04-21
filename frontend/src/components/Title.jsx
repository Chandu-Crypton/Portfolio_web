import { motion } from "framer-motion";

export function Title() {
  const text = "Hi,Chandu Srikakulam";
  return (
    <div>
      <div className="overflow-hidden text-[100px]">
        <motion.p
          initial={{ y: "100%" }}
          whileInView={{ y: "0" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          threshold={0.9999999}
          viewport={{ once: true }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}
