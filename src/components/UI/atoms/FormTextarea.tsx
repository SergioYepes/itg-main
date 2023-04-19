import { FormattedMessage } from "react-intl";
import "../../../styles/form.scss";
import FormValueProps from "../../interfaces/formValues";

function FormTextarea({ formValue, handleChange, className, id }: FormValueProps) {
  return (
    <FormattedMessage id={id}>
      {(message) => (
        <textarea
          className={className}
          name="tellUs"
          rows={10}
          cols={40}
          placeholder={message && message.toString()}
          value={formValue}
          onChange={handleChange}
        />
      )}
    </FormattedMessage>
  );
}

export default FormTextarea;
