import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Blogs.css'

const Blog = (props) => {
    const { title, img, description, date, type } = props.blog
    return (
        <Col>
            <Card className="h-100">
                <div className="blog-img">
                    <Card.Img variant="top" src={img} className="card-img" style={{ height: "230px" }} />
                </div>
                <Card.Body className="p-4">
                    <Card.Text>
                        <span className="text-secondary"><FontAwesomeIcon icon={faClock} className="me-2" />{date}</span> <span className="border-primary border-3 border-start color ps-3 ms-3">{type}</span>
                    </Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-secondary mt-3">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Blog;