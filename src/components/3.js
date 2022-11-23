import './offers.css';
import myFunction from './123456';
const Offertre =()=>{
    return(
        <div className="Offers">
            <div className="two">
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023673/box_ojxozb.jpg" height="320px" width="320px"/>
  <div className="content">
    <h4><b>There are 3 new flavours in town today!</b></h4> 
    <p>Available in Cola Twist, Lime Twist & Jamun Twist.
      Try the all-new Thirsteez today, starting at INR 79/- each.</p>
    <p>Valid only till August 21nd</p> 
    <label className="AQWERST"></label>
    <input defaultValue="FREEDRINKSS2223" id="myInput" style={{opacity: 0}} />
    <center><button onClick={myFunction}>Copy coupon</button></center>
    </div>
</div>
        </div>
    )
};
export default Offertre;