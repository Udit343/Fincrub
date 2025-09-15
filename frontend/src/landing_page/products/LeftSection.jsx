import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center p-3">

        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            style={{ width: "80%", height: "auto" }}
            className="img-fluid"
          />
        </div>


        <div className="col-12 col-md-6 mt-3 mt-md-0 p-3">
          <h1 className="text-muted fs-3 p-2">{productName}</h1>
          <p className="text-muted p-2">{productDescription}</p>

          <div className="d-flex flex-wrap gap-3 p-2">
            <a href={tryDemo} className="text-decoration-none text-primary">
              Try Demo
            </a>
            <a href={learnMore} className="text-decoration-none text-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
