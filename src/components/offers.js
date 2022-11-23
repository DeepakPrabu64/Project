import { Link } from 'react-router-dom';
import './offers.css';
const Offers =()=>{
    return(
        <div className="Offers"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <center>
<img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669015111/logo_2_vqa5nf.png" width="200" height="180" />
</center>
<ul>
<li><a href="/">HOME</a></li>
        <li><a href="/About">MENU</a></li>
        <li><a href="/offers">DEALS</a></li>
      </ul>
        <center><h1>OFFERS AND DEALS</h1></center><br></br>
    <button class="hi" onclick='window.open(".html")'><b>Back to menu →</b></button>
    <br></br>
    <br></br>
    <div className="cards">
        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023675/off3_rtrrjp.jpg" height="300" width="300"/>
            <center>
            <button className='btn'><Link to="/1">Redeem</Link></button>
            </center></div>

        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023674/BIGSAVE_zorcya.jpg" height="300" width="300"/>
            <center><button className='btn'><Link to="/2">Redeem</Link></button>
            </center></div>

        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023673/box_ojxozb.jpg" height="300" width="300"/>
            <center><button className='btn'><Link to="/3">Redeem</Link></button>
            </center></div>
    </div>

    <div class="cards">
        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023678/off2_rhorig.jpg" height="300" width="300"/> 
            <center><button className='btn'><Link to="/4">Redeem</Link></button>
            </center> </div>

        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/rsz_addchk99_q71szu.jpg" height="300" width="300"/> 
            <center><button className='btn'><Link to="/5">Redeem</Link></button>
            </center></div>

        <div className="card1"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/VEGZINGER_yvdiw7.jpg" height="300" width="300"/>
            <center><button className='btn'><Link to="/6">Redeem</Link></button>
            </center></div>
    </div>
    </div>
    )
};
export default Offers;