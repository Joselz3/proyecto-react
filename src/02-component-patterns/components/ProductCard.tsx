import { Children, createContext, ReactElement, useContext, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import {ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers} from '../interfaces/interfaces'
import styles from "../styles/styles.module.css";

import { ProductImage,ProductTitle,ProductButtons } from "./";


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext

export interface Props{
  product:Product;
  className?:string;
  children:(args:ProductCardHandlers)=> JSX.Element;
  style?:React.CSSProperties;
  onChange?:(args:onChangeArgs)=>void;
  value?:number;
  initialValues?: InitialValues
}


export const ProductCard = ({children,product,className,style,onChange,value, initialValues}:Props) => {

  const {counter, increaseBy, maxCount,isMaxCountReached,reset} = useProduct({onChange,product,value,initialValues});

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
      }}>

      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >
      {/*  <img className={styles.productImg} src="./coffee-mug.png" alt="Caffee Mug" /> */}
      { 
        children({
          count:counter,
          isMaxCountReached,
          maxCount:initialValues?.maxCount,
          product,
          increaseBy,
          reset
      }) }
          {/* <ProductImage img={product.img}></ProductImage>
        <ProductTitle title={product.title}></ProductTitle>
        <ProductButtons increaseBy={increaseBy} counter={counter}></ProductButtons> */}
      
      </div>
    </Provider>
  )
}
