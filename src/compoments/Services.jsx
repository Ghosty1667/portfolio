import React from 'react'

function Services() {
    return (
        <section className="services text-bg-dark py-5 position-relative">
            <div className="container position-relative">
                <div className="text-center mb-5">
                    <h4 className="text-uppercase fw-bold text-primary">Services</h4>
                    <hr className="w-25 mx-auto" />
                    <h2 className="mb-4">What Can I Do For You?</h2>
                    <p className="lead">
                        Here are some of the services that I offer when it comes to web
                        development and business.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <i className="bi bi-globe text-primary mb-3"></i>
                        <h3 className="fs-3">Web Design</h3>
                        <hr className="w-25 mx-auto" />
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis
                            autem quam, illo quisquam eligendi illum delectus nam amet porro!
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <i className="fas fa-code fa-3x text-primary mb-3"></i>
                        <h3 className="fs-3">Web Development</h3>
                        <hr className="w-25 mx-auto" />
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis
                            autem quam, illo quisquam eligendi illum delectus nam amet porro!
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <i className="bi bi-shopping-cart text-primary mb-3"></i>
                        <h3 className="fs-3">Advetising & SEO</h3>
                        <hr className="w-25 mx-auto" />
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis
                            autem quam, illo quisquam eligendi illum delectus nam amet porro!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services