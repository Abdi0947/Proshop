import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Row, Image, Card, ListGroup, Button } from 'react-bootstrap';
import Rating from '../component/Rating';

const ProductScreen = () => {
  const [product, setProduct] = useState(null);  // Initialize product as null
  const { id: productId } = useParams();  // Get productId from URL params
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use POST request with body instead of GET, just in case query params were long
        const { data } = await axios.post('/api/products', { id: productId }, {
          withCredentials: false,  // Prevent sending unnecessary cookies
        });

        setProduct(data);  // Set fetched product
        setLoading(false);  // Stop loading
      } catch (err) {
        setError(err.message || "Something went wrong!");  // Handle error
        setLoading(false);  // Stop loading on error
      }
    };

    fetchProduct();  // Call the function to fetch product
  }, [productId]);  // Dependency array with productId

  // If loading, show loading message
  if (loading) return <p>Loading...</p>;

  // If there's an error, display the error message
  if (error) return <p>{error}</p>;

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      {product && (  // Check if product exists before rendering
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product.price}</strong></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
