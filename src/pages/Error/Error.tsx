import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import styles from './Error.module.css';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['container']}>
      <div className={styles['message']}>Такая страница не найдена</div>
      <img className={styles['image']} src='/pizza.svg' alt='Гифка пиццы' />
      <Button apperance='big' onClick={() => navigate('/')}>
        Вернуться на главную
      </Button>
    </div>
  );
};
