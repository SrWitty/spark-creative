import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Terms of Service</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card border-0" style={{ backgroundColor: '#f7e6ff' }}>
                        <div className="card-body">
                            <h2 className="card-title">Returns and Modifications</h2>
                            <hr className="my-4" /> 
                            <div className="mb-4">
                                <h3 className="card-subtitle mb-3">Returns</h3>
                                <p className="card-text">
                                    Due to the nature of digital content shared on the server, returns are generally not accepted.
                                    Please ensure that any transactions or exchanges are conducted with care.
                                </p>
                            </div>
                            <hr className="my-4" /> 
                            <div>
                                <h3 className="card-subtitle mb-3">Modifications</h3>
                                <p className="card-text">
                                    We reserve the right to modify, suspend, or terminate access to the server for any user who violates these terms.
                                    Additionally, these terms may be updated or revised from time to time. By continuing to use the server, you agree to abide by the latest version of the terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfService;
