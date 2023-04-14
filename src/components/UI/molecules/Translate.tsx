import { FormattedMessage } from "react-intl";
import ReactMarkdown from "react-markdown";
import { Language } from "../atoms/Language";

import "../../../styles/language.scss";

export const Translate = () => {
  return (
    <div className="container__language">
      <FormattedMessage id="selection-language">
        {(message) => (
          <ReactMarkdown className="selection_languaje">
            {`${message}`}
          </ReactMarkdown>
        )}
      </FormattedMessage>{" "}
      <Language />
    </div>
  );
};
