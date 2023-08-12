import React, { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          num={i + 1}
          title={faq.title}
          text={faq.text}
          key={faq.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, currOpen, onOpen }) {
  const isOpen = currOpen === num;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className="item"
      style={isOpen ? { borderTopColor: "green" } : {}}
      onClick={handleToggle}
    >
      <p className="number" style={isOpen ? { color: "green" } : {}}>
        {num < 10 ? `0${num}` : num}
      </p>
      <p className="title" style={isOpen ? { color: "green" } : {}}>
        {title}
      </p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <p className="content-box" style={isOpen ? {} : { display: "none" }}>
        {text}
      </p>
    </div>
  );
}
