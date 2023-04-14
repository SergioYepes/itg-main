interface IButton {
  text: string;
  href: string;
  light: boolean;
}

export const Button = ({ text, href, light }: IButton) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={light ? "button button--light" : "button"}
    >
      {text}
    </a>
  );
};
