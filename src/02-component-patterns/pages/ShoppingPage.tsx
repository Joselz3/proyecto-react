import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


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
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title="Hola Mundo"/>
                    <ProductButtons/>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title=""/>
                    <ProductCard.Buttons/>
                </ProductCard>
            </div>
        </div>
    )
}