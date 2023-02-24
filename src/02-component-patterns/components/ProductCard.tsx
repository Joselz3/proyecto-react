import { Children, createContext, ReactElement, useContext, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import {ProductContextProps, Product} from '../interfaces/interfaces'
import styles from "../styles/styles.module.css";

import { ProductImage,ProductTitle,ProductButtons } from "./";


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext

export interface Props{
  product:Product;
  className?:string;
  children?:ReactElement | ReactElement[];
  style?:React.CSSProperties; 
}


export const ProductCard = ({children,product,className,style}:Props) => {

  
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
      }}>

      <div  
        className={`${styles.productCard} ${className}`}
        style={style}
      >
      {/*  <img className={styles.productImg} src="./coffee-mug.png" alt="Caffee Mug" /> */}
      {children}
          {/* <ProductImage img={product.img}></ProductImage>
        <ProductTitle title={product.title}></ProductTitle>
        <ProductButtons increaseBy={increaseBy} counter={counter}></ProductButtons> */}
      
      </div>
    </Provider>
  )
}
