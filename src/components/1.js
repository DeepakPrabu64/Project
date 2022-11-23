import './offer.css';
import myFunction from './123456';
const OfferOne =()=>{
    return(
        <div className="Offers">
<div className="two">
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023675/off3_rtrrjp.jpg" height="320px" width="320px"/>
  <div className="content">
    <h4><b>Get Free McAloo Tikki Burger</b></h4> 
    <p>Only on our app</p>
    <p>Valid till December 28th</p> 
    <input defaultValue="ADDDCHKK89" id="myInput" style={{opacity: 0}} />
    <center><button onClick={myFunction}>Copy coupon</button></center>
  </div>
</div>
</div>
)
};
export default OfferOne;