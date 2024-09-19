import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does the billing work?',
      answer: 'Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.',
    },
    {
      question: 'Can I get a refund for my subscription?',
      answer: 'We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.',
    },
    {
      question: 'How do I contact support?',
      answer: 'If you need help with our platform or have any other questions, you can contact the company\'s support team by submitting a support request through the website or by emailing support@ourwebsite.com.',
    },
    {
      question: 'Do you offer any discounts or promotions?',
      answer: 'We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company\'s newsletter or follow it on social media.',
    },
  ];

  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 my-8  ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-5xl sm:rounded-lg sm:px-10">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
      </div>
      <div className="mt-8 max-w-4xl mx-auto divide-y divide-neutral-200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5">
      <details
        className="group"
        open={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className="flex cursor-pointer justify-between items-center font-medium">
          <span>{faq.question}</span>
          <span className={`transition ${isOpen ? 'rotate-180' : ''}`}>
            <svg
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </summary>
        <p className="mt-3 text-neutral-600">{faq.answer}</p>
      </details>
    </div>
  );
};

export default FAQ;
