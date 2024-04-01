import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-5" style={{ backgroundColor: '#f7e6ff' }}>
            <div className="container">
                <h2 className="text-center skills-title mb-5">Our Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <ServiceCard title="Development" description="Description of development service." />
                    </div>
                    <div className="col-md-4 mb-4">
                        <ServiceCard title="Design" description="Description of design service." />
                    </div>
                    <div className="col-md-4 mb-4">
                        <ServiceCard title="Another Service" description="Description of another service." />
                    </div>
                </div>
            </div>
        </section>
    );
}

const ServiceCard = ({ title, description }) => {
    return (
        <div className="card service-card shadow">
            <div className="card-body">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Services;
