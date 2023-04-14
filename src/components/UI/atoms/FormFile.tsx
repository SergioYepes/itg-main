import { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import "../../../styles/form.scss";
import { inputFile } from "../../interfaces/formValues";
import imgInputFile from "../../../assets/img/adjuntar-archivo.png";

const FormFile = forwardRef<HTMLInputElement, inputFile>(
  ({ onChange, fileSizeInKB, fileName, file }, ref) => {
    return (
      <div>
        <section className="container__input--file">
          <label htmlFor="file-upload" className="custom-file-upload">
            <img
              className="img__input--file"
              src={imgInputFile}
              alt=" input-type-file"
            />
          </label>
          <input id="file-upload" type="file" ref={ref} onChange={onChange} />
          {file ? (
            <div className="input__file--chargedPlaceholder">
              <p>{`${fileName}`}</p>
              <p>{`${fileSizeInKB} KB`}</p>
            </div>
          ) : (
            <FormattedMessage id="contact-file">
              {(message) => <p className="input--file--text">{message}</p>}
            </FormattedMessage>
          )}
        </section>
      </div>
    );
  }
);
export default FormFile;
