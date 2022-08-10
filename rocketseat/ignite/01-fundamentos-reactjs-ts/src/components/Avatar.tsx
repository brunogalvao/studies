import styles from './Avatar.module.css'

 interface AvatarProps {
   hasBorder?: boolean; //Propriedade opcional
   src: string;
   alt?: string; //Propriedade opcional
 }

 export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
   return (
     <img
       className={hasBorder ? styles.avatarWithBorder : styles.avatar}
       src={src}
       alt={alt}
     />
   );
 }