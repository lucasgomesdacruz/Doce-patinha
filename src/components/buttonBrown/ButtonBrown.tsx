import styles from "./ButtonBrown.module.scss"
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const ButtonBrown = ({ text, icon, type, onClick}: ButtonProps) => {
  return (
    <button className={styles.buttonBrown} type={type} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default ButtonBrown;
