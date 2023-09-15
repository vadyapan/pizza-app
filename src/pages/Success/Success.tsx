import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import styles from './Success.module.css';

export const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['success']}>
      <img
        className={styles['image']}
        src='/pizza.svg'
        alt='Изображение пиццы'
      />
      <div className={styles['text']}>Ваш заказ успешно оформлен!</div>
      <Button apperance='big' onClick={() => navigate('/')}>
        Сделать новый
      </Button>
    </div>
  );
};
