import './fq.css';

const Faq =()=>{
    return(
<div className="faq">
        <center>
      <h2>Frequently Asked Questions</h2></center>
      <div className="accordion">
        <div className="accordion-item">
          <button className='accordion-button-1' aria-expanded="false">
            <span class="accordion-title">Will I get to interact with OMG tech professionals through this website?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
                Yes! We will have OMG techies as mentors through the program duration. 
                We will also have Masterclass presentations from OMGers on a weekly basis on topics such as
                ‘What is Product First thinking at OMG’ and ‘How do we strive for Operational Excellence at OMG’. 
                These sessions will give deep insights into what it means to be a  techie.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-2" aria-expanded="false">
            <span className="accordion-title">I dont remember my password?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
                You have already created an account but you can't remember your password? Click on 'Login/Sign Up' at the top of the page.
                 Then click on 'Forgot Password?'.
                 Fill out your phone number and a password recovery will be sent to you by phone.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-3" aria-expanded="false">
            <span className="accordion-title">What are your delivery hours?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
                Our delivery hour is from 10:00 AM to 08:00 PM.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-4" aria-expanded="false">
            <span class="accordion-title">I need to cancel or change my order! How can I do this?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
                Please contact helpline Number as soon as possible, we can let the kitchen know before it starts preparing your order.
                 Once the order goes in the process, it can not be changed. 
                 With regard to any refund of a payment you have made online, please contact Bliss Meal delivery.
                Please contact Blissful Meal delivery.
                
                +91 - 987 654 3210 Or omgbur@gmail.com
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-5" aria-expanded="false">
            <span class="accordion-title">How do you support the bulk orders?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
                In order to provide all customers with a great selection and to ensure on-time delivery of your meal, 
                we request you to order bulk quantity at least 24 hours in advance.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
};
export default Faq;