import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
};

const Button = ({ text, icon, className }: ButtonProps) => {
  return (
    <a className={className}>
      {icon && <span>{icon}</span>}
      {text}
    </a>
  );
};

export default Button;
