import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <section id="blog" className="py-5" style={{ backgroundColor: '#f7e6ff' }}>
            <div className="container">
                <h2 className="text-center skills-title mb-5">Our Blog</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <BlogPost title="Blog Post 1" description="This is a sample blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    </div>
                    <div className="col-md-4 mb-4">
                        <BlogPost title="Blog Post 2" description="This is another sample blog post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </div>
                    <div className="col-md-4 mb-4">
                        <BlogPost title="Blog Post 3" description="Yet another sample blog post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </div>
                </div>
            </div>
        </section>
    );
}

const BlogPost = ({ title, description }) => {
    return (
        <div className="card service-card shadow-lg">
            <div className="card-body">
                <div className="text-center mb-4"><FontAwesomeIcon icon={faNewspaper} size="3x" /></div>
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text">{description}</p>
                <div className="text-center">
                  
                <a href="https://discord.gg/Gx9fmhzb3Q" className="btn btn-primary join-btn" target="_blank" rel="noopener noreferrer">Join Us</a>
                </div>
            </div>
        </div>
    );
}

export default Blog;
