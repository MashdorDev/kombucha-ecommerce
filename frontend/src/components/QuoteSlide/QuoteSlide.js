import React, { useState, useEffect } from "react";
import "./QuoteSlide.css";

function QuoteSlide({ quote, author, fadeIn }) {
  return (
    <div className={`quotes-slide ${fadeIn ? "fade-in" : ""}`}>
      <div className="h4 quote">
        <p>{quote}</p>
      </div>
      <span className="quote-author">- {author}</span>
    </div>
  );
}

function QuotesSection() {
  const quotesData = [
    {
      quote:
        "Bought your Red Grape kombucha at the Bean Fiend the other day and it was amazing!",
      author: "Victoria Erin",
    },
    {
      quote: "Tried the Gin-Ja and Amy’s Blend and both are delicious!!",
      author: "Britt Silegren",
    },
    {
      quote:
        "I love your kombucha! I have tried many brands and yours is the best!",
      author: "Dor",
    },
    {
      quote:
        "I always find myself coming back to your kombucha. It’s the best I’ve ever had!",
      author: "Lorena",
    },
    {
      quote:
        "Your kombucha has changed my life! Before, I was just a mere mortal, but after one sip, I felt like I could fly, speak 17 languages, and communicate with dolphins! Every other kombucha now tastes like mere pond water in comparison. I've even replaced my morning coffee with it and now I can see sounds and hear colors! Truly a magical elixir!",
      author: "Dor",
    },
    // Add more quotes as needed
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const changeQuote = () => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuoteIndex(
          (prevIndex) => (prevIndex + 1) % quotesData.length
        );
        setFadeIn(true);
      }, 1000); // 1s for fade-out, then change quote
    };

    const interval = setInterval(changeQuote, 6000); // 1s for fade-out, 1s for fade-in, 4s visible

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [quotesData.length]);

  return (
    <div>
      <QuoteSlide
        quote={quotesData[currentQuoteIndex].quote}
        author={quotesData[currentQuoteIndex].author}
        fadeIn={fadeIn}
      />
    </div>
  );
}

export default QuotesSection;
