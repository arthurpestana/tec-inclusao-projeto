import style from './page.module.scss';

interface CardEventProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CardEvent({ title, description, imageUrl }: CardEventProps) {
  return (
    <div className={style.card_event}>
      <img src={imageUrl} alt={title} className={style.image} />
      <div className={style.overlay}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}