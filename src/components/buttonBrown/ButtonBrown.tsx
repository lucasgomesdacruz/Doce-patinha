import styles from "./ButtonBrown.module.scss"
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
};

const ButtonBrown = ({ text, icon }: ButtonProps) => {
  return (
    <button className={styles.buttonBrown}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default ButtonBrown;
