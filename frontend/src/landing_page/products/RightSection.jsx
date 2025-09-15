import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center p-3">
                

                <div className="col-12 col-md-6 mt-4 mt-md-5 p-3 p-md-5">
                    <h1 className="fs-3 text-muted mb-3">{productName}</h1>
                    <p className="text-muted mb-3">{productDescription}</p>
                    <a href={learnMore} className="text-decoration-none fw-semibold">
                        Learn More
                    </a>
                </div>


                <div className="col-12 col-md-6 text-center">
                    <img 
                        src={imageURL} 
                        alt={productName} 
                        className="img-fluid" 
                        style={{ maxWidth: "45%", height: "auto" }}
                    />
                </div>
            </div>
        </div>
     );
}

export default RightSection;
