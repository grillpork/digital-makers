import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "React คืออะไร?",
    answer: "React เป็นไลบรารี JavaScript สำหรับสร้าง UI ที่พัฒนาโดย Facebook.",
  },
  {
    question: "Tailwind CSS คืออะไร?",
    answer: "Tailwind CSS เป็นเฟรมเวิร์ก CSS ที่ช่วยให้สามารถใช้ utility classes ในการออกแบบเว็บได้ง่ายขึ้น.",
  },
  {
    question: "ใช้ React กับ Tailwind CSS ร่วมกันได้อย่างไร?",
    answer:"สามารถใช้ร่วมกันได้โดยติดตั้ง Tailwind CSS ในโปรเจกต์ React และใช้ utility classes ใน component ต่าง ๆ.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">FAQS</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="p-4 border-b border-gray-700 cursor-pointer"
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{faq.question}</h3>
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <ChevronDown />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 ,y: 10, scale: 0.3 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? "auto" : 0,
                y: openIndex === index ? 0 : 100,
                scale: openIndex === index ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" , bounce: 0.25}}
              className="overflow-hidden"
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
