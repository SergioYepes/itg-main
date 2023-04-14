import { useState } from "react";
import { FormattedMessage } from "react-intl";

export const ValueTitle = () => {
  const [quote, setQuote]: any = useState("value-proposal1");
  const [counter, setCounter]: any = useState(1);
  const [styles, setStyles]: any = useState(1);

  setTimeout(() => {
    switch (counter) {
      case 1:
        setQuote("value-proposal-slider1");
        break;
      case 2:
        setQuote("value-proposal-slider2");
        break;
      case 3:
        setQuote("value-proposal-slider3");
    }
    if (counter < 3) {
      setCounter(counter + 1);
      setStyles(counter + 1);
    } else {
      setCounter(1);
      setStyles(1);
    }
  }, 3000);

  return (
    <div className="value-proposal__group">
      <FormattedMessage id="value-proposal">
        {(message) => <h1 className="value-proposal__title"> {message}</h1>}
      </FormattedMessage>
      <FormattedMessage id={quote}>
        {(message) => (
          <span
            className={`value-proposal__title value-proposal__title--color-${styles}`}
          >
            {" "}
            {message}
          </span>
        )}
      </FormattedMessage>
      <FormattedMessage id="value-proposal1">
        {(message) => <h1 className="value-proposal__title">{message}</h1>}
      </FormattedMessage>
    </div>
  );
};
