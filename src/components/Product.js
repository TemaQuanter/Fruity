import './Product.css';

function Product(props) {

    return (
        <div className="product">
            <img className="logo" src={props.logo} />
            <p className="product-name">{props.name}</p>
            <p className="price">${props.price}</p>
            <div className="input-field">
                <input className="buy-number" type="number" min="1" placeholder="1" />
                <button className="buy-button">Buy</button>
            </div>
        </div>
    );

}

export default Product;