export default function Price ({idx}) {
    let oldPrice = ["50000","20000","15000","12000"];
    let newPrice = ["45000","19000","14000","11000"];
    let oldStyles = {
        textDecorationLine:"line-through"
    };
    let style = {
        backgroundColor: "#ff9900",
        padding : "8px 20px",
        borderBottomLeftRadius:"8px",
        borderBottomRightRadius:"8px"
    }
    return (
        <div style={style}>
            <span style={oldStyles}>{oldPrice[idx]}</span>
            &nbsp;&nbsp;&nbsp;
            <b><span>{newPrice[idx]}</span></b>
        </div> 
    )
}