import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
  };

  return (
    <Link to={`/product/${props.id}`}>
      <div className={styles['cart']}>
        <div
          className={styles['head']}
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <div className={styles['price']}>
            {props.price}&nbsp;
            <span className={styles['currency']}>₽</span>
          </div>
          <button className={styles['add-to-cart']} onClick={add}>
            <img
              className={styles['cart-icon']}
              src='/cart-button-icon.svg'
              alt='Добавить в корзину'
            />
          </button>
          <div className={styles['rating']}>
            {props.rating}&nbsp;
            <img src='/star-icon.svg' alt='Иконка звезды' />
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['title']}>{props.name}</div>
          <div className={styles['description']}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
};
