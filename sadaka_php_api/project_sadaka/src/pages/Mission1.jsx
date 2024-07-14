import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mission1 = () => {
    return (
        <>
         <Navbar/>
       
        <div className="page-heading text-center">
          <div className="container zoomIn animated">
            <h1 className="page-title">
              OUR MISSIOM <span className="title-under" />
            </h1>
            <p className="page-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
            </p>
          </div>
        </div>
        <div className="main-container">
          <div className="our-causes fadeIn animated">
            <div className="container">
              <h2 className="title-style-1">
                OUR MISSIOM <span className="title-under" />
              </h2>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-hunger.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "30%" }}
                      >
                        10$ / 500$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUNGER AND POVERTY </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-education.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">EDUCATION AND TRAINING</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-rights.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        400$ / 1000$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUMAN RIGHTS</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-culture.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">ARTS AND CULTURE </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-hunger.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "30%" }}
                      >
                        10$ / 500$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUNGER AND POVERTY </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-education.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">EDUCATION AND TRAINING</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-rights.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        400$ / 1000$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUMAN RIGHTS</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-culture.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">ARTS AND CULTURE </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /.our-causes */}
        </div>{" "}
        {/* /.main-container  */}
        <Footer/>
      </>
      
    );
};

export default Mission1;