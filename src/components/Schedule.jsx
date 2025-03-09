import React from "react";

const Schedule = () => {
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
              initial={{ opacity: 0, height: 0, y: 10, scale: 0.3 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? "auto" : 0,
                y: openIndex === index ? 0 : 100,
                scale: openIndex === index ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeInOut", bounce: 0.25 }}
              className="overflow-hidden p-4"
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
