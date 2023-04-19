import { useState, useRef, useEffect, useContext } from 'react';
import { Translate } from '../UI/molecules/Translate';
import { FormattedMessage } from 'react-intl';
import shadow from '../../assets/img/shadow.png';
import img from '../../assets/img/workWithUsImg.png';
import shadowMobile from '../../assets/img/shadowMobile.png';
import imgMobile from '../../assets/img/workWithUsMobile.png';
import texto from '../../assets/img/Texto.png';
import TextoEnglish from '../../assets/img/TextoEnglish.png';


import FormName from '../UI/atoms/FormName';
import FormEmail from '../UI/atoms/FormEmail';
import PhoneInputWithSelect from '../UI/molecules/PhoneInput';
import FormCheckBox from '../UI/atoms/FormCheckBox';
import FormTextarea from '../UI/atoms/FormTextarea';
import FormFile from '../UI/atoms/FormFile';

import ReCAPTCHA from 'react-google-recaptcha';
import { postEmailWithUs } from '../../axios/emailPost';

import LanguageContext from '../../context/language';
import { formWorkData } from '../interfaces/formData';

import '../../styles/withUs.scss';

function WorkWithUS() {
  const { language } = useContext(LanguageContext);
  type TextID = 'contact-Cv' | 'contact-send' | undefined;
  const [file, setFile] = useState<File | string>('');
  const [value, setValue] = useState<string>('');
  const [dataOfPolicy, setDataOfPolicy] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [orientation, setOrientation] = useState<TextID>('contact-Cv');
  const [captchaValue, setCaptchaValue] = useState<string>('');
  const [form, setForm] = useState<formWorkData>({
    name: '',
    email: '',
    phone: '',
    file: {},
    tellUs: '',
  });
  useEffect(() => {
    setOrientation(isMobile ? 'contact-send' : 'contact-Cv');

    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, orientation]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxFileSize = 4 * 1024 * 1024;
  const handleFileInputChange = () => {
    if (fileInputRef.current?.files) {
      let selectedFile = fileInputRef.current.files[0];
      if (selectedFile) {
        if (selectedFile.size > maxFileSize) {
          alert('incorrect file size');
          setFile('');
        } else {
          setFile(selectedFile);
        }
      }
    }
  };
  const handleCheckboxChangesetDataOfPolicy = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataOfPolicy(event.target.checked);
  };
  const onChange = (value: string | null) => {
    if (value) {
      setCaptchaValue(value);
    }
  };
  const fileSizeInBytes = typeof file === 'string' ? parseInt(file) : file.size;
  const fileSizeInKB = fileSizeInBytes ? Math.floor(fileSizeInBytes / 1024) : 0;

  function handleChange(e: any) {
    const newValue = e.target.value;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (event: any) => {
    postEmailWithUs(
      language === 'en' ? 'trabajaconnosotros-en' : 'trabajaconnosotros',
      file,
      captchaValue,
      form.email,
      form.name,
      value,
      form.tellUs,
      language
    );
    event.preventDefault();
    setForm({
      name: '',
      email: '',
      phone: '',
      file: {},
      tellUs: '',
    });
    setFile('');
    setValue('');
    setDataOfPolicy(false);
  };
  return (
    <div className='work-bigCont'>
      <Translate />
      <div className='work-ImgCont'>
        <img
          src={isMobile ? shadowMobile : shadow}
          alt='shadowImg'
          className='work-ShadowImg'
        />
        <img
          src={isMobile ? imgMobile : img}
          alt='workImg'
          className='work-FullImg'
        />
        {language === 'es' ? (
          <img src={texto} alt='workText' className='work-TextImg' />
        ) : (
          <img src={TextoEnglish} alt='workText' className='work-TextImg' />
        )}
      </div>
      <form className='work-FormCont' onSubmit={handleSubmit}>
        <div className='work-FirstRowCont'>
          <FormName formValue={form.name} handleChange={handleChange} />
          <FormEmail formValue={form.email} handleChange={handleChange} />
        </div>
        <div className='work-SecondRowCont'>
          <PhoneInputWithSelect label='en' value={value} setValue={setValue} />
          <FormFile
            file={file}
            onChange={handleFileInputChange}
            fileName={typeof file === 'string' ? '' : file.name}
            fileSizeInKB={fileSizeInKB}
            ref={fileInputRef}
            id={"workWithUs-file"}
          />
        </div>
        <div className='work-TextArea'>
          <FormTextarea
            formValue={form.tellUs}
            handleChange={handleChange}
            className={'workWithUS__textarea'}
            id={"workWithUs-project"} 
          />
        </div>
        <div className='container-check-box-us'>
          <FormCheckBox
            checked={dataOfPolicy}
            onChange={handleCheckboxChangesetDataOfPolicy}
          />
        </div>
        <div className='captcha'>
          <ReCAPTCHA
            sitekey='6Lfa7GAlAAAAACvgB_6ENkAurCr5Bli_oibsZzRb'
            onChange={onChange}
          />
        </div>
        <FormattedMessage id={orientation}>
          {message => (
            <input
              className='contact-send'
              name='submit'
              type='submit'
              value={message && message.toString()}
              disabled={!value || !dataOfPolicy}
            />
          )}
        </FormattedMessage>
      </form>
    </div>
  );
}

export default WorkWithUS;
