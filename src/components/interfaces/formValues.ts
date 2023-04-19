
type ClassName = "workWithUS__textarea" | "contact--textarea";
export default interface FormValueProps {
  formValue: string;
  handleChange: (e: any) => void;
  className?: ClassName;
  id?: string;
}

export interface inputFile {
  onChange: (e: any) => void;
  ref: HTMLInputElement;
  fileSizeInKB: number;
  fileName: File | string;
  file: File | string;
  id?: string;
}
export interface formCheckBox {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
