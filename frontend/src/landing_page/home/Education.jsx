import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>

                {/* Image Section */}
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img 
                        src="media/images/Learn.png" 
                        style={{ width: "70%", height: "auto" }} 
                        alt="Fincrub Education" 
                    />
                </div>

                {/* Text Section */}
                <div className='col-12 col-md-6'>
                    <h1 className='mb-3 fs-3 text-center text-md-start'>
                        Learn and Grow with Fincrub
                    </h1>
                    
                    <div>
                        <p className='text-muted mb-4 text-center text-md-start'>
                            Fincrub Academy – simple, beginner-friendly guides and resources 
                            to help you understand trading and investing step by step.
                        </p>
                        {/* <a href='' style={{ textDecoration: "none" }}>
                            Explore Academy <i className="fa-solid fa-arrow-right"></i>
                        </a> */}
                    </div>
                    
                    <div className='mt-5'>
                        <p className='text-muted mb-4 text-center text-md-start'>
                            Fincrub Community – connect with fellow traders, ask questions, 
                            and share insights to grow together in your investment journey.
                        </p>
                        {/* <a href='' style={{ textDecoration: "none" }}>
                            Join Community <i className="fa-solid fa-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
