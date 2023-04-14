import { FormattedMessage } from "react-intl";
import "../../../styles/form.scss";
import FormValueProps from "../../interfaces/formValues";

function FormName({ formValue, handleChange }: FormValueProps) {
  return (
    <FormattedMessage id="contact-name">
      {(message) => (
        <input
          type="text"
          className="contact-input"
          placeholder={message && message.toString()}
          value={formValue}
          onChange={handleChange}
          name="name"
          pattern="^[A-Za-z]+$"
          required
        />
      )}
    </FormattedMessage>
  );
}

export default FormName;
