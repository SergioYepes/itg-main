import { FormattedMessage } from "react-intl";
import "../../../styles/form.scss";
import FormValueProps from "../../interfaces/formValues";

function FormEmail({ formValue, handleChange }: FormValueProps) {
  return (
    <FormattedMessage id="contact-mail">
      {(message) => (
        <input
          type="email"
          className="contact-input"
          placeholder={message && message.toString()}
          value={formValue}
          onChange={handleChange}
          name="email"
          required
        />
      )}
    </FormattedMessage>
  );
}

export default FormEmail;
