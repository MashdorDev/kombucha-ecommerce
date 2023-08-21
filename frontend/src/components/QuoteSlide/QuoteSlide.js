import React from 'react';

function QuoteSlide({ quote, author }) {
  return (
    <div className="quotes-slide">
      <div className="h4 quote">
        <p>{quote}</p>
      </div>
      <span className="quote-author">- {author}</span>
    </div>
  );
}

export default QuoteSlide;
