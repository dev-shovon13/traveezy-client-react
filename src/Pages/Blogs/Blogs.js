import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Blog from './Blog/Blog';
import blogs from "./blogsData"
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className="bg-service">
            <Helmet>
                <title>Blogs | Traveezy</title>
                <meta name="This is the blogs page of Traveezy" content="Traveezy- Travel Website" />
            </Helmet>
            <Container className="pb-5 pt-3">
                <div className="text-center py-3">
                    <h5 className="color">BLOG</h5>
                    <h1 className="service-txt w-75 mx-auto">Our Latest News From Blog</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
                </Row>
                <div className="text-center">
                    <Button variant="outline-primary" className="fs-5 py-1 px-5 mt-5">View More Blogs</Button>
                </div>
            </Container>
            <ScrollButton />
        </div>
    );
};

export default Blogs;