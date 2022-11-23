const About =()=>{
    return(
<div className="About">
        <center>
          <img src="logo 1.png" width={200} height={180} />
        </center>
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="about (2).html">ABOUT</a></li>
          <li><a href="menu2.html">MENU</a></li>
          <li><a href="/offers">DEALS</a></li>

        </ul>
        <div className id="about">
          <div className="content">
            <center><h1 className="b" style={{marginBottom: '64px'}}>ABOUT US</h1></center>
            <center><img src="C:\Users\Deepak\Downloads\logo 2.png" alt="logo" width="15%" /></center>
            <p className="keer">Every day, more than 11 million guests visit OMG Burger restaurants around the world.
              And they do so because our restaurants are known for serving high-quality, great-tasting,
              and affordable food. Founded in 1954, OMG Burger is the second largest fast food hamburger
              chain in the world. The original Home of the Whopper, our commitment to premium ingredients,
              signature recipes, and family-friendly dining experiences is what has defined our brand for 
              more than 50 successful years</p>
            <center><img src="https://nijuuichi.com/wp-content/uploads/2022/07/round-chef.png" style={{width: '150px'}} className="circle right" alt="Chef" /></center>
            <center><p><strong>The Chef?</strong> Mr. Italiano himself</p></center>
            <br /><center><h2>We are proud of our interiors.</h2></center>
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" style={{width: '100%'}} alt="Restaurant" />
            <center><h2><b>Opening Hours</b></h2></center>
            <div className>
              <div className>
                <center><p>Mon &amp; Tue CLOSED</p>
                  <p>Wednesday 10.00 - 24.00</p>
                  <p>Thursday 10:00 - 24:00</p></center>
              </div>
              <center><div className>
                  <p>Friday 10:00 - 12:00</p>
                  <p>Saturday 10:00 - 23:00</p>
                  <p>Sunday Closed</p></div></center>
              <center><h2 className="pillai">CONTACT</h2>
                <h3>OMG Burger Corporation</h3>
                <h4>Phone Number: 1-866-394-2493</h4></center>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="card">
            <i className="card-icon far fa-envelope" />
            <p>omgB@email.com</p>
          </div>
          <div className="card">
            <i className="card-icon fas fa-phone" />
            <p>+91 9876543210</p>
          </div>
          <div className="card">
            <i className="card-icon fas fa-map-marker-alt" />
            <p>SKCET, Coimbatore</p>
          </div>
        </div>
      </div>
    )
};
export default About;