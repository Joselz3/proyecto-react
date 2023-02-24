import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/costum-styles.css'

const product={
    id:'1',
    title:'Coffe Mug - Card2',
    img:'./coffee-mug.png'
}

export const ShoppingPages = ()=>
{
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

                <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image style={{
                        boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                    }} className='costum-image'/>
                    <ProductCard.Title title="" className='text-white text-bold'/>
                    <ProductCard.Buttons className='costum-buttons'/>
                </ProductCard>
                <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                    >
                    <ProductImage className='costum-image'/>
                    <ProductTitle className='text-white text-bold' title="Hola Mundo"/>
                    <ProductButtons className='costum-buttons'/>
                </ProductCard>
                <ProductCard 
                    product={product}
                    style={{
                        backgroundColor:'#70D1F8'
                    }}
                    >
                    <ProductImage style={{
                        boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle style={{
                        fontWeight:'bold'
                    }}/>
                    <ProductButtons style={{
                        display:'flex',
                        justifyContent:'end'
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}