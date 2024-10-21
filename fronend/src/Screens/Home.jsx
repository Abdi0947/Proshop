import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../component/Product';
import axios from 'axios';

const Home = () => {
  const [product, setProduct] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/products');  
        setProduct(result.data);  
        console.log(result.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching products:', error); 
        setLoading(false);  
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>; 

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
      {product.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
    </>
  );
};

export default Home;
