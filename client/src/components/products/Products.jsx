import { useEffect, useState } from 'react';
import * as productsService from '../../services/productsService';
import ProductItem from './product-item/ProductItem.jsx';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsService.getAll()
            .then(result => setProducts(result));
    }, []);
    return (<main>
        <header className="site-header section-padding d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-12">
                        <h1>
                            <span className="d-block text-primary">Choose your</span>
                            <span className="d-block text-dark">favorite style</span>
                
                        </h1>
                        
                    </div>
                </div>
            </div>
        </header>

        <section className="products section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-5">Amazing styles</h2>
                    </div>
                    {products.map(product => (
                        <ProductItem key={product._id} {...product} />
                    ))}
                    {products.length === 0 && (
                        <h3 className="no-articles">No articles yet</h3>
                    )}
                </div>
            </div>
        </section>
    </main>)
}

export default Products