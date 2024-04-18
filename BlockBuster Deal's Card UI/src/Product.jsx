import "./Product.css"
import Price from "./Price";

export default function Product({title,index}) {
    let style = {
        marginRight :" 10px"
    }
    let Description = ["15 pro max", "g40 5G", "note 8 pro", "narz0 20"];
    return (
    <div className="Product" style={style}>
        <h4>{title}</h4> 
        <p>"{Description[index]}"</p>  
        <Price idx={index}></Price>
    </div>
    );
};