import { useState, useEffect, useContext } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  isValidPhoneNumber,
  getCountryCallingCode,
} from 'react-phone-number-input';
import LanguageContext from "../../../context/language";
function PhoneInputWithSelect({ value, setValue }: any) {
  type ValidationInput = 'notValid' | 'PhoneInput' | 'isValid';
  const { language } = useContext(LanguageContext);

  const [country, setCountry] = useState<any>('CO');
  const [code, setCode] = useState<any>();
  const [isValid, setIsValid] = useState<ValidationInput>();

  useEffect(() => {
    if (country === undefined) {
      setCountry('US');
    } else {
      setCode(getCountryCallingCode(country));
    }
  }, [country]);
  const handlePhoneChange = (value: string) => {
    if (!value) {
      setIsValid('PhoneInput');
      return;
    }
    if (!isValidPhoneNumber(value)) {
      setIsValid('notValid');
      return;
    }
    setIsValid('isValid');
    setValue(value);
  };

  return (
    <div className='contact__form--container'>
      <p className='dial-code'>{code}</p>
      <PhoneInput
        className={isValid}
        placeholder={language==='en' ? "Enter Phone Number" : "Ingresa el Teléfono"}
        value={value}
        onChange={handlePhoneChange}
        defaultCountry='CO'
        limitMaxLength
        onCountryChange={setCountry}
        focusInputOnCountrySelection
      />
    </div>
  );
}
export default PhoneInputWithSelect;
