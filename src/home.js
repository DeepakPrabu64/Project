import { Link } from 'react-router-dom';
import './home.css';
import './footer.css';

import Faq from './components/faq';

const Home =()=>{
    return(
        <div className="home"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<center>
<img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669015111/logo_2_vqa5nf.png" width="200" height="180" />
</center>
<div>
<ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/offers">DEALS</a></li>
        {/* <li><a href="/about">WISHLIST</a></li> */}
        <li style={{float: 'right'}}><a href="">SIGN IN</a></li>
      </ul>
</div>
<img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131026/Banner_g13wjc.jpg" height="400" width="100%" style={{borderRadius:0}} />
<button><Link to="/offers"><b>View Deals→</b></Link></button>
<h2 style={{textAlign:'left'}}>OFFERS AND DEALS</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023675/off3_rtrrjp.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023673/box_ojxozb.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/VEGZINGER_yvdiw7.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023678/off2_rhorig.jpg" height="340" width="320"style={{borderRadius:0}} /></div>
</div>
<button><Link to="/1"><b>View Menu→</b></Link></button>
<h2 style={{textAlign:'left'}}>CATEGORIES</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131574/P2_d8vtf4.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131552/a3_njgirj.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669182910/CD_pwgbof.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131628/Noo_ffle32.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
</div>

<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="signin.js">about us</a></li>
                <li><a href="/privacy">privacy policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100088095992292"><i className="fab fa-facebook-f" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136043/1_xriwsb.jpg' width={40} height={40}style={{borderRadius:50}}></img></a>
                <a href="https://twitter.com/OMG__burgers"><i className="fab fa-twitter" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136581/7_m5zlyz.jpg' width={40} height={40} style={{borderRadius:50}}></img></a>
                <a href="https://www.linkedin.com/in/omg-burgers-939437257/"><i className="fab fa-linkedin-in" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136599/5_tf2hye.png' width={40} height={40} style={{borderRadius:50}}></img></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
</div>

)
};
export default Home;
