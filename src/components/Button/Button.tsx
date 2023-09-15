import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export function Button({
  children,
  apperance = 'small',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles['button'], styles['accent'], className, {
        [styles['small']]: apperance === 'small',
        [styles['big']]: apperance === 'big',
      })}
      {...props}
    >
      {children}
    </button>
  );
}
