import Image from 'next/image';
import style from './page.module.scss';

interface CardEventProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CardEvent({ title, description, imageUrl }: CardEventProps) {
  return (
    <div className={style.card_event}>
      <Image 
        src={`/${imageUrl}`}
        alt={title}
        width={300}
        height={200}
        className={style.image}
        priority
      />
      <div className={style.overlay}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}