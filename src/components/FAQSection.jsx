import React, { useState } from "react";
import { Link } from "react-router";

const PRIMARY_COLOR_CLASS = "text-[#007d7d]";
const PRIMARY_BG_CLASS = "bg-[#007d7d]";
const PRIMARY_HOVER_BG_CLASS = "hover:bg-[#006060]";

const PlusIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
const MinusIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-gray-800 hover:text-gray-900 transition duration-150"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
      >
        {question}
        <div
          className={`${PRIMARY_COLOR_CLASS} flex-shrink-0 ml-4  cursor-pointer`}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-gray-600 leading-relaxed pr-6">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const faqData = [
    {
      question: "How are providers on SkillSwap vetted?",
      answer:
        "Every provider goes through a multi-step verification process which includes skill testing, identity verification, and background checks to ensure a safe and high-quality learning environment for all users. We review all feedback rigorously.",
    },
    {
      question: "What is the cancellation and refund policy?",
      answer:
        "We offer full refunds for cancellations made at least 24 hours before the scheduled session time. Cancellations made within 24 hours may be subject to a partial or no refund, depending on the provider's specific policy, which is clearly listed on their profile.",
    },
    {
      question: "Can I host group sessions instead of 1-on-1?",
      answer:
        "Yes! Providers can choose to offer both individual and group sessions. The booking process allows learners to see the maximum capacity and the price per participant for group sessions.",
    },
    {
      question: "How does the payment system work?",
      answer:
        "All payments are securely processed through our platform upon booking. Funds are held in escrow and released to the provider only after the session is successfully completed, ensuring satisfaction for both parties.",
    },
    {
      question: "What technology do I need for a session?",
      answer:
        "Most sessions require only a stable internet connection, a desktop or laptop computer, and a webcam/microphone. Our platform supports integrated video conferencing, so no external software downloads are necessary.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-inter">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header and CTA */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-start mb-16">
          {/* Title & Description */}
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <p
              className={`font-semibold uppercase text-sm tracking-wider ${PRIMARY_COLOR_CLASS}`}
            >
              Need Help?
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to the most common questions about booking,
              payments, and becoming a provider on SkillSwap.
            </p>
            <Link
              to="/contact"
              className={`mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white ${PRIMARY_BG_CLASS} ${PRIMARY_HOVER_BG_CLASS} transition duration-300`}
            >
              Contact Support
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-2 bg-gray-50 p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleFAQ={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
