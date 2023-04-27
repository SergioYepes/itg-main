import { FormattedMessage } from 'react-intl';
import { useState, useRef, useContext } from 'react';
import PhoneInputWithSelect from './PhoneInput';
import { formData } from '../../interfaces/formData';
import '../../../styles/form.scss';
import FormName from '../atoms/FormName';
import FormEmail from '../atoms/FormEmail';
import FormFile from '../atoms/FormFile';
import FormCheckBox from '../atoms/FormCheckBox';
import FormTextarea from '../atoms/FormTextarea';
import ReCAPTCHA from 'react-google-recaptcha';
import { postEmail, Form as typeForm } from '../../../axios/emailPost';
import LanguageContext from '../../../context/language';

function Form() {
  const { language } = useContext(LanguageContext);
  const [value, setValue] = useState<string>('');
  const [file, setFile] = useState<File | string>('');
  const [form, setForm] = useState<formData>({
    name: '',
    email: '',
    company: '',
    role: '',
    file: {},
    services: '',
    tellUs: '',
  });

  const [notifications, setNotifications] = useState(false);
  const [dataOfPolicy, setDataOfPolicy] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string>('');

  const handleCheckboxChangesetDataOfPolicy = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataOfPolicy(event.target.checked);
  };

  const handleCheckboxChangeNotifications = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifications(event.target.checked);
  };
  const onChange = (value: string | null) => {
    if (value) {
      setCaptchaValue(value);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxFileSize = 4 * 1024 * 1024;
  const handleFileInputChange = () => {
    if (fileInputRef.current?.files) {
      let selectedFile = fileInputRef.current.files[0];
      if (selectedFile.type === 'application/x-msdownload') {
        language === 'en'
          ? alert('File form not allowed, enter a valid format')
          : alert(
              'Formarto de archivo no permitido, ingresar un formato valido'
            );
      }
      if (selectedFile) {
        if (selectedFile.size > maxFileSize) {
          language === 'en'
            ? alert('incorrect file size, max file size is 4MB')
            : alert(
                'Tamaño de archivo incorrecto, el tamaño máximo de archivo es de 4MB'
              );
          setFile('');
        } else {
          setFile(selectedFile);
        }
      }
    }
  };

  const fileSizeInBytes = typeof file === 'string' ? parseInt(file) : file.size;
  const fileSizeInKB = fileSizeInBytes ? Math.floor(fileSizeInBytes / 1024) : 0;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    postEmail(
      language === 'en' ? 'comercial-en' : 'comercial',
      file,
      captchaValue,
      form.email,
      form.name,
      value,
      form.tellUs,
      form.role,
      form.services,
      form.company,
      notifications === true ? 'yes' : 'no',
      language
    );
    setForm({
      name: '',
      email: '',
      company: '',
      role: '',
      services: '',
      tellUs: '',
    });
    setFile('');
    setValue('');
    setDataOfPolicy(false);
    setNotifications(false);
  };

  function handleChange(e: any) {
    const newValue = e.target.value;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className='contacts__form' onSubmit={handleSubmit}>
      <FormName formValue={form.name} handleChange={handleChange} />
      <FormEmail handleChange={handleChange} formValue={form.email} />
      <FormattedMessage id='contact-company'>
        {message => (
          <input
            type='text'
            className='contact-input'
            placeholder={message && message.toString()}
            value={form.company}
            onChange={handleChange}
            name='company'
            required
          />
        )}
      </FormattedMessage>
      <FormattedMessage id='contact-position'>
        {message => (
          <input
            type='text'
            className='contact-input'
            placeholder={message && message.toString()}
            value={form.role}
            onChange={handleChange}
            name='role'
          />
        )}
      </FormattedMessage>
      <PhoneInputWithSelect label='en' value={value} setValue={setValue} />
      <div className='container__select--services'>
        <select
          className='select--services'
          name='services'
          onChange={handleChange}
        >
          <FormattedMessage id='contact-service'>
            {message => (
              <option hidden selected>
                {message}
              </option>
            )}
          </FormattedMessage>
          <FormattedMessage id='slider-title-create'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
          </FormattedMessage>
          <FormattedMessage id='slider-title-Technical'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
          </FormattedMessage>
          <FormattedMessage id='slider-title-design'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
          </FormattedMessage>
          <FormattedMessage id='slider-tittle-support'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
          </FormattedMessage>
          <FormattedMessage id='slider-title-trainings'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
          </FormattedMessage>
          <FormattedMessage id='slider-title-other'>
            {message => (
              <option value={message && message.toString()}>{message}</option>
            )}
          </FormattedMessage>
        </select>
      </div>
      <FormFile
        file={file}
        onChange={handleFileInputChange}
        fileName={typeof file === 'string' ? '' : file.name}
        fileSizeInKB={fileSizeInKB}
        ref={fileInputRef}
        id='contact-file'
      />
      <FormTextarea
        formValue={form.tellUs}
        handleChange={handleChange}
        className={'contact--textarea'}
        id={'contact-project'}
      />
      <section className='container-check-box'>
        <FormCheckBox
          checked={dataOfPolicy}
          onChange={handleCheckboxChangesetDataOfPolicy}
        />
        <label htmlFor='notifications' className='checkbox-label'>
          <input
            type='checkbox'
            id='notifications'
            name='notifications'
            checked={notifications}
            onChange={handleCheckboxChangeNotifications}
          />
          <span className='checkbox-custom'></span>
          <FormattedMessage id='check-box-notifications'>
            {message => <span className='checkbox-text'> {message} </span>}
          </FormattedMessage>
        </label>
      </section>
      <div className='Captcha'>
        <ReCAPTCHA
          sitekey='6Lfa7GAlAAAAACvgB_6ENkAurCr5Bli_oibsZzRb'
          onChange={onChange}
        />
      </div>
      <FormattedMessage id='contact-send'>
        {message => (
          <input
            className='contact-send'
            name='submit'
            type='submit'
            value={message && message.toString()}
            disabled={!value || !dataOfPolicy || form.services === ''}
          />
        )}
      </FormattedMessage>
    </form>
  );
}

export default Form;
