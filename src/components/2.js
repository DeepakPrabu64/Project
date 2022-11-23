import { Link } from 'react-router-dom';
import myFunction from './123456';
import './offers.css';
const Offertwo =()=>{
    return(
        <div className="Offers">
            {/* <div className="dialog"><br></br><br></br>
  </div> */}
<div className="two">
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023674/BIGSAVE_zorcya.jpg" height="300px" width="320px"/>
  <div className="content">
    <h4><b>Box only on Wednesday</b></h4> 
    <p>With buckets, chicken strips and a special meal, Wednesday OMG offer never seemed more exciting. Wednesday special offer of 10 Boneless Strips + 4 Hot Wings +
        2 regular fries + 3 dips serves 2-3 comfortably.</p>
    <p>Valid till June 28th 2023</p> 
    <input defaultValue="BOX1ONEIN" id="myInput" style={{opacity: 0}} />
    <center><button onClick={myFunction}>Copy coupon</button></center>
</div>
</div>
        </div>
        )
    };
    export default Offertwo;