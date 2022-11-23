import './offers.css';
import myFunction from './123456';
const Offersix =()=>{
    return(
        <div className="Offers">
            <div className="two">
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/VEGZINGER_yvdiw7.jpg" height="320px" width="320px"/>
  <div className="content">
    <h4><b>Get Free Whopper</b></h4> 
    <p>Create & login to a free OMG Burger account. Open Offers and deals then click on the coupons</p>
    <p>Valid till March 15th 2023</p> 
    <input defaultValue="WHOPPERSS@15" id="myInput" style={{opacity: 0}} />
    <center><button onClick={myFunction}>Copy coupon</button></center>
  </div>
</div>
        </div>
    )
};
export default Offersix;