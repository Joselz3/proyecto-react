import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { Product, ProductInCart } from "../interfaces/interfaces"
import '../styles/costum-styles.css'



export const ShoppingPages = ()=>
{
    const {onProductCountChange,shoppingCart} = useShoppingCart()
    
    return(
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap'
                }}
            >
                {
                    products.map(product=>(
                    <ProductCard 
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                        >
                        <ProductImage className='costum-image'/>
                        <ProductTitle className='text-white text-bold' title="Hola Mundo"/>
                        <ProductButtons className='costum-buttons'/>
                    </ProductCard>
                    ))
                }
                
            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key,product])=>(
                        <ProductCard 
                        key={key}
                        product={product}
                        className="bg-dark text-white"
                        style={{width:'100px'}}
                        value={product.count}
                        onChange={onProductCountChange}
                        >
                        <ProductImage className='costum-image'/>
                        <ProductButtons 
                            className='costum-buttons'
                            style={{
                                display:'flex',
                                justifyContent:'center'
                            }}
                        
                        />
                    </ProductCard>
                    ))
                   
                }
            </div>
        </div>
    )
}