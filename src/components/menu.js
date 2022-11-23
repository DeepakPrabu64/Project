import './menu.css';
const Menu =()=>{
    return(
        <div>
        <center>
          <img src="logo 1.png" width={200} height={180} />
        </center>
        <nav className="navbar background">
          <ul className="nav-list">
            <li><a href="index.html">HOME</a></li>
            <li><a href="about (2).html">ABOUT</a></li>
            <li><a href="menu2.html">MENU</a></li>
            <li><a href="offers.html">DEALS</a></li>
          </ul>
        </nav>
        <br />
        <br /><br /><br />
        <div className="sidebar"><center>
            <img src="banner.png" style={{width: '100px'}} />
            <h1>OMG MENU</h1>
            {/* <a class="active" href="#home">Home</a> */}
            <a href="#COMBOS">COMBOS</a>
            <a href="#BURGERS">BURGERS</a>
            <a href="#PIZZA">PIZZA</a>
            <a href="#BEVRAGES">BEVRAGES</a>
          </center></div>
        <div className="contents">
          <center><h1><b>MENU</b></h1></center>
          <h2 id="BURGERS">BURGERS</h2>
          <div className="butty">
            <div className="pal">
              <img src="1.jpeg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>DOUBLE CHEESY BURGER</h3><br />
              <p className="price">₹100</p><br />
              <p />
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="2.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} /><br />
              <h3>BLACK BEAN BURGER</h3><br />
              <p className="price">₹120</p><br />
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <opacity id="load"><img src="3.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} /></opacity>
              <h3>VEGGIE BURGER</h3>
              <p className="price">₹80</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>  
          <div className="butty">
            <div className="pal">
              <opacity><img src="a1.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} /></opacity>
              <h3>CHEESY BURGER</h3>
              <p className="price">₹100</p>
              <p />
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="a2.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>CHICKEN BURGER</h3>
              <p className="price">₹120</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="a3.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>MEXICAN BURGER</h3>
              <p className="price">₹80</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>
          <h2 id="PIZZA">PIZZA</h2>
          <div className="butty">
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192826/P6_w9nucf.jpg" alt="BURGER" style={{height:'300px',width: '300px'}} />
              <p className='Title'>MUSHROOM TIKKA PIZZA</p>
              <p className="price">₹120</p>
              <p />
              <p><button className='btnn'>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="P2.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>FARM HOUSE PIZZA</h3>
              <p className="price">₹180</p>
              <p><button className='btnn'>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="P3.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>SPINACH PIZZA</h3>
              <p className="price">₹110</p>
              <p><button className='btnn'>Add to Cart🛒</button></p>
            </div>
          </div>  
          <div className="butty">
            <div className="pal">
              <img src="P4.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>PANNER TIKKA PIZZA</h3>
              <p className="price">₹190</p>
              <p />
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="P5.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>VEGGIE PIZZA</h3>
              <p className="price">₹180</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="P6.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>MARGHERITA</h3>
              <p className="price">₹80</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>
          <h2 id="BEVRAGES">BEVRAGES</h2>
          <div className="butty">
            <div className="pal">
              <img src="B1.jpeg" alt="BURGER" style={{width: '300px'}} />
              <h3>COCA COLA 250ML</h3>
              <p className="price">₹45</p>
              <p />
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="B2.png" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>RED BULL 250ML</h3>
              <p className="price">₹110</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="B3.jpeg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3>MONSTER 350ML</h3>
              <p className="price">₹110</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>      
        </div>
      </div>
    )
};
export default Menu;