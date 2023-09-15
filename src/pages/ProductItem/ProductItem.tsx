import { useLoaderData, useNavigate } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import styles from './ProductItem.module.css';
import { Button } from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { MouseEvent } from 'react';
import { Headling } from '../../components/Headling/Headling';

export const ProductItem = () => {
  const data = useLoaderData() as Product;
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(data.id));
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['action']}>
          <button
            className={styles['back-to-menu']}
            onClick={() => navigate('/')}
          >
            <img src='/arrow-icon.svg' alt='Иконка назад' />
          </button>
          <Headling>{data.name}</Headling>
        </div>
        <Button apperance='small' className={styles['cart']} onClick={add}>
          <img src='/cart-button-icon.svg' alt='Иконка корзины' />В корзину
        </Button>
      </div>
      <div className={styles['product']}>
        <div
          className={styles['image']}
          style={{ backgroundImage: `url('${data.image}')` }}
        ></div>
        <div className={styles['description']}>
          <div className={styles['row']}>
            <div className={styles['parametr']}>Цена</div>
            <div className={styles['price']}>
              {data.price}&nbsp;<span>₽</span>
            </div>
          </div>
          <hr className={styles['line']} />
          <div className={styles['row']}>
            <div className={styles['parametr']}>Рейтинг</div>
            <div className={styles['rating']}>
              {data.rating}&nbsp;
              <img src='/star-icon.svg' alt='Иконка звезды' />
            </div>
          </div>
          <div className={styles['list']}>
            <div className={styles['title']}>Состав:</div>
            <ul>
              {data.ingredients.map((i) => (
                <li className={styles['ingredient']}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
