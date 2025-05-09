import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How much time it takes to develop a website?',
      answer: "The development time varies depending on the complexity of your website. A simple landing page may take 1-2 weeks, while more complex websites with custom functionality can take 4-8 weeks or more. We'll provide a specific timeline after understanding your requirements."
    },
    {
      id: 'faq-2',
      question: 'Any info required from me to get started?',
      answer: "Yes, we'll need your brand assets (logo, colors, fonts), content (text, images), project goals, target audience information, and any specific functionality requirements. We'll guide you through this process with a detailed questionnaire after you apply."
    },
    {
      id: 'faq-3',
      question: 'Why do I need monthly upgrades?',
      answer: 'Monthly upgrades help keep your website secure, optimized, and up-to-date with the latest web standards. Regular maintenance prevents technical issues, ensures compatibility with browsers and devices, and allows for continuous improvement based on user feedback and analytics.'
    },
    {
      id: 'faq-4',
      question: 'How do we communicate?',
      answer: 'We communicate primarily through email and scheduled video calls. We also provide access to our project management system where you can track progress, leave comments, and share files. Our team is responsive and typically replies within 24 hours on business days.'
    },
    {
      id: 'faq-5',
      question: 'Do we offer refunds?',
      answer: "We offer a satisfaction guarantee on our services. If you're not satisfied with the initial design concepts, we provide revisions until you're happy. For development work, we offer partial refunds based on the stage of the project if you need to cancel. Please refer to our terms of service for detailed refund policies."
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Answers to your questions
        </h2>

        {/* FAQ accordion */}
        <Accordion type="single" collapsible className="mb-12">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-white/10">
              <AccordionTrigger className="text-white text-left py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Message us section */}
        <div className="flex flex-col items-center">
          <Button className="bg-black border border-white/10 text-white px-6 py-5 h-auto rounded-full hover:bg-white/5 mb-2">
            <MessageCircle className="w-5 h-5 mr-2" /> Message us if you have more
          </Button>
          <a href="mailto:hello@kingtroy.studio" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
            hello@kingtroy.studio
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
