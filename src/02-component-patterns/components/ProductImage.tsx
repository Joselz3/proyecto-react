import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { useContext } from "react";

export const ProductImage = ({img=''}) => {
    const {product} = useContext(ProductContext)
    return (
      <img className={styles.productImg} src={img?img:product.img||noImage} alt="Caffee Mug" />
    )
  }