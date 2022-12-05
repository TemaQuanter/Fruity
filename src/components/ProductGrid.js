import './ProductGrid.css';

import Product from './Product';
import Data from './../data.json';


function ProductGrid() {

    return (
        <div className="product-grid">
            {
                Data.map((item) => {

                    return (
                        <Product key={item.id} {...item} />
                    );

                })
            }
        </div>
    );

}

export default ProductGrid;