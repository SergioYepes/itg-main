import "../../../styles/experience.scss";
import { FormattedMessage } from "react-intl";

export const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <FormattedMessage id="value-text">
          {(message) => <p className="experience__paragraph">{message}</p>}
        </FormattedMessage>
      </div>
    </div>
  );
};
