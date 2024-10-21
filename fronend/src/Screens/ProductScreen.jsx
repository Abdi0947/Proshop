import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Row, Image, Card, ListGroup, Button, Spinner } from 'react-bootstrap';
import Rating from '../component/Rating';

const ProductScreen = () => {
  const [product, setProduct] = useState(null); // State to store product data
  const { id: productId } = useParams(); // Get the product ID from URL
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading to true before making API request
        const { data } = await axios.get(`http://localhost:8000/api/products/${productId}`);
        setProduct(data); // Store the fetched product data in state
        setLoading(false); // Turn off loading once data is fetched
      } catch (err) {
        setError(err.message); // Set error message in case of failure
        setLoading(false); // Turn off loading when there is an error
      }
    };

    fetchProduct(); // Fetch product when the component mounts
  }, [productId]); // Re-run effect if productId changes

  // Render loading spinner if data is being fetched
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Render error message if there was an error fetching the product
  if (error) {
    return <p>Error: {error}</p>; // Display the error message
  }

  // Main return block to display product information
  return (
    <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>
      {product && (  
        <Row>
          <Col md={5}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fluid 
              onError={(e) => { e.target.src = '/path/to/default/image.jpg'; }} // Fallback image if the main one fails
            />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
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
              <ListGroup variant="flush">
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
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    // Add functionality to handle adding to cart
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
