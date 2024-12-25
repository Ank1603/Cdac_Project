import React from "react";
import img from "../assests/periodicservices1.jpg";
import bat1 from "../assests/acservicerepair5.jpg";
import bat2 from "../assests/android-app-store.png";
import bat3 from "../assests/batteries3.jpg";
import bat4 from "../assests/customer-service.png";
import bat5 from "../assests/dentingpainting2.jpg";
import bat6 from "../assests/expert-mechanic.png";
import bat7 from "../assests/garage  image1.jpg";
import bat8 from "../assests/garage.png";
import acci from "../assests/accidentservice.jpg";
import tyre from "../assests/tyreswheels6.jpg";
import detail from "../assests/detailingservices8.jpg";
import custom from "../assests/customservices9.png";
import wind from "../assests/windsheild.jpg";
import light from "../assests/light.jpg";
import enigine from "../assests/Engine_Decarbonization.png";
import wash from "../assests/carwash-removebg-preview(3).png";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const reviews = [
    {
      id: 1,
      title: "I Can Vouch For Them",
      text: "I always visit gomechanic garage near my place for all kinds of repair and car needs. They always use genuine techniques and parts. The staff was very professional, more than willing to answer my queries. Great place, friendly atmosphere, and reasonable rates. Highly recommended!",
      name: "Shehzan Khan",
      platform: "Twitter",
      workshop: "GoMechanic - HITEC City, Hyderabad",
      icon: "twitter-icon.png",
    },
    {
      id: 2,
      title: "It is definitely GoMechanic for me",
      text: "One of the best customer services I have experienced at a car garage. Technicians gave me clear information about what was wrong with my car, they also gave me a reasonable price quote before starting the repair process. The services were commendable and satisfactory.",
      name: "Raj Thakur",
      platform: "Facebook",
      workshop: "GoMechanic - Vaishali Nagar, Jaipur",
      icon: "facebook-icon.png",
    },
    {
      id: 3,
      title: "Highly Recommended!",
      text: "My car suddenly stopped in the middle of the road on my way to the office, and it was gomechanic to the rescue. I called them, they took the vehicle and returned it the same day. I was very pleased with the professionalism and the speediness of the service. Their services really impressed me a lot, and I would definitely recommend them to my friends and colleagues.",
      name: "Manish Singh",
      platform: "Google",
      workshop: "GoMechanic - Dwarka, Delhi",
      icon: "google-icon.png",
    },

  ];
  const steps = [
    {
      id: 1,
      title: "Choose",
      description: "Choose Your Service From Our Wide Range Of Offerings",
    },
    {
      id: 2,
      title: "Book",
      description: "Make An Appointment With Us",
    },
    {
      id: 3,
      title: "Fair Pricing",
      description: "Always Get a Fair Quote",
    },
    {
      id: 4,
      title: "At Your Doorstep",
      description: "Get a Door Step Pick Up & Drop Facility",
    },
  ];


  const navigator = useNavigate();

  function f1() {
    navigator("/login");
  }

  function f2() {
    navigator("/batteriesservices");
  }

  function f3() {
    navigator("/DentingAndPainting");
  }

  function f4() {
    navigator("/periodicservices");
  }

  function f5() {
    navigator("/accidentalCarRepair");
  }

  function f6() {
    navigator("/tyresandwheels");
  }
  function f7() {
    navigator("/customservices");
  }

  function f8() {
    navigator("/windshieldandglass");
  }

  function f9() {
    navigator("/lightsandfitments");
  }

  function f10() {
    navigator("/engine-decarbonization");
  }
  function f11() {
    navigator("/carwash");
  }



  return (
    <>
      <div>
        <div className="hero-section">
          <img
            src="https://www.cmsgarageandbody.com/images/InteriorBanner3.jpg"
            alt="Car Service Image"
          />
          <div className="hero-text">
            <h1>World-Class Service for Your Car</h1>
            <p>
              At Bosch Car Service, quality service is affordable. We are powered
              by Bosch, to be your world-class workshop next door for complete car
              care - service, maintenance, and car repairs, for any car.
            </p>
          </div>
        </div>


      </div>



      {/* https://www.cmsgarageandbody.com/images/InteriorBanner3.jpg */}
      <div class="body">
        <div className="container text-center mt-5">
          <h1 className="Head">
            <b>Fake Car Repair & Services</b>
          </h1>
        </div>

        {/* Services Section */}
        <div className="container-fluid home text-center p-5 mt-3 me-3">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f2}>
              <img src={bat3} alt="" />
              <b style={{ fontSize: "15px"}}>
                <h6>
                  <b>Batteries</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f3}>
              <img src={bat5} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Denting And Painting</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f4}>
              <img src={img} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Periodic Services</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f5}>
              <img src={acci} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Accidental Car Repair</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f6}>
              <img src={tyre} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Tyres And Wheels</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f7}>
              <img src={custom} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Custom Services</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f8}>
              <img src={wind} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Windshield And Glass</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f9}>
              <img src={light} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Lights And Fitments</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f10}>
              <img src={enigine} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Engine Decarbonization</b>
                </h6>
              </b>
            </div>
            <div className="col-xl-2 img-fluid homeContainer p-2" onClick={f11}>
              <img src={wash} alt="" />
              <b style={{ fontSize: "15px" }}>
                <h6>
                  <b>Car Wash</b>
                </h6>
              </b>
            </div>
          </div>
        </div>
        {/* Garage Information */}
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <h1>Urja Automobile Garage - For All Your Automotive Requirements</h1>
              <p>
                Urja Automobile Garage is redefining the way people look after their cars.
                We provide an advanced and simple way to book an auto repair and
                maintenance service with just a few clicks. Quality and
                reliability are the two most important pillars of our products
                and services. We are passionate and believe that your vehicle
                deserves to be as healthy as you are. MMC Garage helps in
                maximizing the lifespan of your car with quality services
                exceeding your expectations.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 m-3">
                    <img src="Car2/car2/src/assests/garage.png" alt="" />
                    <b className="h-text">Expert Engineers</b>
                    <br />
                    <span>Hire the best and certified engineers</span>
                  </div>
                  <div className="col-xl-4 m-3">
                    <img
                      src="https://www.garage.movemycar.in/assets/images/garage.png"
                      alt=""
                    />
                    <b className="h-text">Modern Workshop</b>
                    <br />
                    <span>Modern workshop having the right infrastructure</span>
                  </div>

                  <div className="col-xl-4 m-3">
                    <img
                      src="https://www.garage.movemycar.in/assets/images/wallet.png"
                      alt=""
                    />
                    <b className="h-text">Cost Effective</b>
                    <br />
                    <span>
                      Get the best car services with affordable charges
                    </span>
                  </div>
                  <div className="col-xl-4 m-3">
                    <img
                      src="https://www.garage.movemycar.in/assets/images/customer-service.png"
                      alt=""
                    />
                    <b className="h-text">Creative Thinking</b>
                    <br />
                    <span>Accurate dashboard tracker for service status</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Car Garage Image */}
            <div className="col-xl-4">
              <figure>
                <img
                  src="https://www.garage.movemycar.in/assets/images/image-1.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>

        {/* How it works*/}

        <section className="how-it-works">
          <div className="background-overlay">
            <div className="content">
              <h2 className="header">How It Works</h2>
              <p className="subheader">
                We Offer Full Service Auto Repair & Maintenance
              </p>
              <div className="steps-container">
                {steps.map((step) => (
                  <div key={step.id} className="step">
                    <h3 onClick={f1} className="step-number">{`0${step.id}`}</h3>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}

        <div class="container my-5 py-4 text-start">
          <div class="row align-items-center">

            <div class="col-md-4 text-center">
              <figure>
                <img
                  src="https://www.garage.movemycar.in/assets/images/schedule-apointment.png"
                  alt="Schedule Appointment"
                  class="img-fluid"
                />
              </figure>
            </div>

            <div class="col-md-8">
              <h1 class="display-5 fw-bold text-primary mb-3">
                Schedule Your Appointment Today
              </h1>
              <h2 class="text-danger mb-3">Call: 1800-12312-9655</h2>
              <p class="lead text-muted mb-4">
                Repair services that come with our commitment to quality.
              </p>
              <button onClick={f1} className="p-2 mt-3 btn btn-danger">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>


      </div>
      <div class="handy-guide-section">
        <h2>Handy Guide</h2>
        <div class="handy-guide-cards">
          <div class="handy-guide-card">
            <img src="https://www.boschcarservice.com/xrm/media/guides/accident_guide_image_640w_360h.jpg" alt="Accident Guide" />
            <h4>Accident Guide</h4>
            <p>
              You had a car accident - what should you do next? Our Accident Guide provides important
              tips and advice for navigating worst-case scenarios.
            </p>
          </div>

          <div class="handy-guide-card">
            <img src="https://www.boschcarservice.com/xrm/media/guides/battery_guide_image_640w_360h.jpg" alt="Battery Guide" />
            <h4>Battery Guide</h4>
            <p>
              The most frequent cause of vehicle breakdowns is a defective battery. With our Battery
              Guide, ensure better battery maintenance and get helpful advice.
            </p>
          </div>

          <div class="handy-guide-card">
            <img src="https://www.boschcarservice.com/xrm/media/guides/fuel_saving_guide_image_640w_360h.jpg" alt="Fuel Saving Guide" />
            <h4>Fuel Saving Guide</h4>
            <p>
              Our Fuel Saving Guide makes efficient driving easy and helps reduce long-term fuel
              consumption, saving both money and the environment.
            </p>
          </div>
        </div>
      </div>

      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <blockquote>
                <h3>{review.title}</h3>
                <p>{review.text}</p>
              </blockquote>
              <div className="review-footer">
                <img src={review.icon} alt={review.platform} />
                <div>
                  <p><strong>{review.name}</strong></p>
                  <p>{review.platform}</p>
                  <p>Workshop Name: {review.workshop}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <style jsx="true">{`
  /* Global Styles */
  .body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #f8f9fa;
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
/* Image Styling */
.img-fluid {
  max-width: 100%; /* Ensures image is responsive */
  max-height: 200px; /* Restricts image height */
  object-fit: contain; /* Maintains aspect ratio */
  border-radius: 8px; /* Adds rounded corners to the image */
}

/* Headings */
h1.display-5 {
  font-size: 2.5rem; /* Larger title for better visibility */
  color: #007bff; /* Primary blue color */
}

h2 {
  font-size: 1.8rem; /* Slightly smaller subtitle */
  color: #dc3545; /* Red for emphasis */
}

p.lead {
  font-size: 1.2rem; /* Larger font for descriptions */
  color:rgb(255, 255, 255); /* Muted gray for readability */
}

/* Button Styling */
.btn-danger {
  background-color: #dc3545;
  color: white;
  font-size: 1.2rem; /* Slightly larger text */
  padding: 12px 25px; /* Adds spacing inside the button */
  border-radius: 5px; /* Smooth rounded edges */
  border: none; /* Removes border */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; /* Pointer cursor on hover */
}

.btn-danger:hover {
  background-color: #c82333; /* Darker red on hover */
  transform: translateY(-5px); /* Lift effect */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Soft shadow on hover */
}

/* Row and Column Alignment */
.row {
  display: flex;
  flex-wrap: wrap; /* Ensures responsiveness on smaller screens */
  align-items: center; /* Vertically aligns content */
}

.col-md-4,
.col-md-8 {
  padding: 15px; /* Adds spacing between columns */
}
  h1.display-5 {
    font-size: 2rem; /* Adjusts title size for smaller devices */
  }

  h2 {
    font-size: 1.5rem; /* Adjusts subtitle size */
  }

  p.lead {
    font-size: 1rem; /* Smaller paragraph text */
  }

  .btn-danger {
    font-size: 1rem; /* Adjusts button text size */
    padding: 10px 20px; /* Reduces button padding */
  }
}
  .Head {
    color: #f8fafc;
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    margin-bottom: 3rem;
  }

  /* Service Cards */
  .service-card {
    margin-bottom: 2.5rem;
  }

  .service-card .card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .service-card .card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }

  .service-card img {
    height: 150px;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .service-card .card-body {
    padding: 20px;
    text-align: center;
  }

  /* Info Section */
  .info-section {
    background: rgba(255, 255, 255, 0.05);
    padding: 4rem 2rem;
    border-radius: 24px;
    margin: 4rem 0;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  .info-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 16px;
    margin-bottom: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(45deg, #fb7185 0%, #f43f5e 100%);
    padding: 4rem 2rem;
    border-radius: 24px;
    text-align: center;
    color: #fff;
    margin: 4rem 0;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  }

  .btn-custom {
    background: #fff;
    color: #f43f5e;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: none;
    cursor: pointer;
  }

  .btn-custom:hover {
    background: #f43f5e;
    color: #fff;
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .Head {
      font-size: 2.5rem;
    }

    .cta-section {
      padding: 3rem 1.5rem;
    }

    .info-section {
      padding: 3rem 1.5rem;
    }

    .service-card img {
      height: 100px;
    }
  }
    
       /* General section styling */
.about-section {
  background-color: #f4f4f4; /* Softer background for better readability */
  padding: 40px 20px;
  border-radius: 12px; /* Slightly increased border radius for smoother edges */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  margin: 20px auto;
  max-width: 900px; /* Slightly increased max-width for better content flow */
  font-family: 'Arial', sans-serif; /* Clear and professional font */
}

/* Section title */
.about-section h3 {
  color: #222;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

/* Paragraph styling */
.about-section p {
  color: #444;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 17px; /* Slightly larger font for improved readability */
}

/* List styling */
.about-section ul {
  list-style-type: disc;
  padding-left: 25px;
  margin-bottom: 25px;
}

.about-section ul li {
  margin-bottom: 12px;
  color: #555;
  font-size: 17px;
}

.about-section ul li strong {
  color: #222;
}

/* Call to action */
.about-section .cta {
  text-align: center;
  margin-top: 30px;
}

.about-section .cta a {
  display: inline-block;
  padding: 12px 25px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
}

.about-section .cta a:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Added hover animation */
}

/* Contact info section */
.contact-info {
  margin-top: 40px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-info h4 {
  margin-bottom: 15px;
  color: #222;
  font-size: 20px;
  font-weight: bold;
}

.contact-info p {
  margin-bottom: 12px;
  color: #444;
  font-size: 16px;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.contact-info a:hover {
  text-decoration: underline;
  color: #0056b3; /* Subtle color change on hover */
}

/* Handy guide section */


.handy-guide-section {
  display: flex; /* Use flex to align elements */
  flex-direction: column; /* Align title and cards vertically */
  gap: 20px; /* Add spacing between the title and the card section */
}

.handy-guide-section h2 {
  text-align: center;
  margin: 0;
  font-size: 28px; /* Increase font size for better visibility */
  color: #333;
}

.handy-guide-cards {
  display: flex; /* Flex container for the cards */
  justify-content: space-between; /* Ensures the cards are evenly spaced */
  gap: 20px; /* Space between the cards */
  width: 100%;
}

.handy-guide-card {
  width: 32%; /* Each card takes up about 1/3 of the row */
  text-align: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.handy-guide-card:hover {
  transform: translateY(-10px); /* Slight lift effect on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
}

.handy-guide-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.handy-guide-card h4 {
  font-size: 20px;
  color: #222;
  margin: 15px 0;
}

.handy-guide-card p {
  font-size: 16px;
  color: #555;
  margin: 0 15px 15px;
}

.handy-guide-card a {
  display: block;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 0 0 12px 12px;
  transition: background-color 0.3s ease;
}

.handy-guide-card a:hover {
  background-color: #0056b3;
}


.hero-section {
  position: relative;
  text-align: center;
  color: white;
  background-color: #1a3e61;
}

.hero-section img {
  width: 100%;
  height: auto;
  opacity: 0.7;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: bold;
}

.hero-text p {
  font-size: 1.2rem;
  font-weight: lighter;
}

.main-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
}

.main-content img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}

.main-content .text {
  flex: 1;
  padding-left: 20px;
}

.main-content .text h2 {
  font-size: 2rem;
  color: #333;
}

.main-content .text p {
  font-size: 1.1rem;
  color: #555;
}

.main-content .buttons {
  display: flex;
  gap: 20px;
}

.main-content .button {
  padding: 12px 20px;
  background-color: #1a3e61;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.main-content .button:hover {
  background-color: #1b2e43;
}


.customer-reviews {
    padding: 40px;
    background-color: #f9f9f9;
    text-align: center;
}

.customer-reviews h2 {
    font-size: 28px;
    margin-bottom: 20px;
}

.reviews-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.review {
    background: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    width: 300px;
    text-align: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review blockquote {
    margin: 0 0 20px;
    padding: 0;
}

.review h3 {
    font-size: 18px;
    color: #e63946;
    margin-bottom: 10px;
}

.review p {
    font-size: 14px;
    color: #333;
}

.review-footer {
    display: flex;
    align-items: center;
    gap: 10px;
}

.review-footer img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.review-footer div {
    font-size: 12px;
}

.review-footer p {
    margin: 2px 0;
}




/* General styles for the section */
.how-it-works {
  position: relative;
  background: url('/path-to-your-background-image.jpg') no-repeat center center;
  background-size: cover;
  padding: 50px 0;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

.background-overlay {
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
  padding: 50px 0;
}

.content {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subheader {
  font-size: 18px;
  margin-bottom: 40px;
  color: #d1d1d1;
}

.steps-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.step {
  background: #000;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 220px;
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-number {
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

.step-title {
  font-size: 20px;
  font-weight: bold;
  color: #e50914; /* Highlighted color (red) */
  margin-bottom: 10px;
}

.step-description {
  font-size: 14px;
  color: #d1d1d1;
}

/* Hover Effect */
.step:hover {
  transform: scale(1.05); /* Slightly scale the card */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Increase shadow */
}

.step-title:hover {
  color: #ff4b5c; /* Slightly brighter red for the title on hover */
}`
}</style>

    </>
  );
}
