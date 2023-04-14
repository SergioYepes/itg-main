import { FormattedMessage } from "react-intl";
import "../../../styles/form.scss";
import { formCheckBox } from "../../interfaces/formValues";

// eslint-disable-next-line @typescript-eslint/no-redeclare
function FormCheckBox({ checked, onChange }: formCheckBox) {
  return (
    <div className="data-of-policy">
      <label htmlFor="dataOfPolicy" className="checkbox-label">
        <input
          className="contact__checkBox--form"
          type="checkbox"
          name="dataOfPolicy"
          required
          checked={checked}
          id="dataOfPolicy"
          onChange={onChange}
        />
        <span style={{ top: -3 }} className="checkbox-custom"></span>
      </label>
      <FormattedMessage id="check-box-accept">
        {(message) => (
          <span className="checkbox-text">
            {" "}
            {message}
            <a href="/policy" target="_blank">
              {
                <FormattedMessage id="text-data-of-policy">
                  {(message) => (
                    <span className="checkbox-text"> {message} </span>
                  )}
                </FormattedMessage>
              }
            </a>
          </span>
        )}
      </FormattedMessage>
    </div>
  );
}

export default FormCheckBox;
