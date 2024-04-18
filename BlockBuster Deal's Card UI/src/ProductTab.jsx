import Product from "./Product";

function ProductTab () {
    let style = {
        display:"flex",
    }
    return (
        <div style={style}>
            <Product title="Iphone" index={0} ></Product>
            <Product title="MOTO" index={1} ></Product>
            <Product title="MI" index={2} ></Product>
            <Product title="REALME" index={3} ></Product>
        </div>
    )
}

export default ProductTab;