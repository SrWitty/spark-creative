import React from 'react';

const Team = () => {
    return (
        <section id="team" className="py-5">
            <div className="container">
                <h2 className="text-center skills-title mb-4">Our Team</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <TeamMember name="iim7md11" role="Developer" description="Description of iim7md11." imageSrc="./images/logo.png" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <TeamMember name="AmtixDev" role="Designer, Developer" description="Description of AmtixDev." imageSrc="./images/logo.png" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

const TeamMember = ({ name, role, description, imageSrc }) => {
    return (
        <div className="card team-member shadow">
            <img src={imageSrc} alt={name} className="card-img-top" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{role}</p>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Team;
