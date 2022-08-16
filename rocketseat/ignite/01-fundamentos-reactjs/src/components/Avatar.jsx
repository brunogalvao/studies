import styles from './Avatar.module.css';

export default function Avatar({ hasBorder = true, src = true, ...props }) {

    const notFind = "https://img.freepik.com/fotos-gratis/jovem-confuso-com-penteado-da-moda-e-olhos-azuis-usa-camisa-de-desmin-sobre-camiseta-cinza-encolhe-os-ombros-com-espanto-faz-escolhas-ou-decisoes-dificeis-em-sua-vida-tenta-encontrar-solucao_176420-13634.jpg?w=826&t=st=1659526098~exp=1659526698~hmac=c36c9afd9a2f1d166da055e5461d4a8d344ffc603dccc8e6249ef39739ab8ef6"

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={props.text}
        />
    )
}