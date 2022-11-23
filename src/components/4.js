import './offers.css';
import myFunction from './123456';
const Offerfr =()=>{
    return(
        <div className="Offers">
            <div className="two" >
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023678/off2_rhorig.jpg" height="320px" width="320px"/>
  <div className="contents">
    <h4><b>Grab-and-Go</b></h4> 
    <p>Valid only till Feburary 2022</p>
    <p>We sell grab-and-go meals ranging from burritos to Asian chicken salad.</p> 
    <input defaultValue="GRABFEASTi12" id="myInput" style={{opacity: 0}} />
    <center><button onClick={myFunction}>Copy coupon</button></center>
</div>
        </div>
        </div>
    )
};
export default Offerfr;