import React from 'react'
import img4 from '../assets/home-banner.jpg'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

function Home() {
  return (
    <>
      {/* <p className='notic'><marquee behavior="scroll" direction="left"> <b> <span style={{ color: "red" }}>ખાસ નોંધ :</span> જો તમારા દ્વારા કરવામાં આવેલો ઓર્ડર ગીર ગઢડા , ફરેડા , જુના જાખિયા , નવા જાખિયા , બાબરીયા, થોરડી ,ભાખા માં થી હશે તો ડિલિવરી ફ્રી હશે બાકી  ડિલિવરી ચાર્જ લેવામાં આવશે...</b>
      </marquee></p> */}
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero">
          <h1 className="fade-in">Premium Hosiery Collection</h1>
          <p className="fade-in delay">Soft, Comfortable & Stylish</p>
          <button className="shop-btn">Shop Now</button>
        </div>

        {/* Features Section */}
        <div className="features">
          <div className="feature-card fade-in">
            <h2>Quality Fabric</h2>
            <p>Experience unmatched comfort with our premium materials.</p>
          </div>
          <div className="feature-card fade-in">
            <h2>Trendy Designs</h2>
            <p>Stay in style with our latest hosiery fashion trends.</p>
          </div>
          <div className="feature-card fade-in">
            <h2>Affordable Prices</h2>
            <p>Get the best quality at pocket-friendly rates.</p>
          </div>
        </div>
        <div className="om">

        </div>

        {/* Product Gallery */}
        <div className="product-gallery">
          <h2 className="fade-in">Explore Our Collection</h2>
          <div className="gallery-grid">
            <img src="https://godbolegear.com/cdn/shop/files/ClassicWalletinDualTonesbyGodboleLeatherGoods.jpg?v=1689083829&width=1206" alt="Wallet" className="fade-in" />
            <img src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/375x375/Buy-1-Get-1-Track-Pant--(2T1)-1.jpg" alt="Night Pant" className="fade-in" />
            <img src="https://www.urbanmonkey.com/cdn/shop/files/super-suede-005-umbc003ps-blk-723125.jpg?v=1737061969&width=600" alt="Cap" className="fade-in" />
            <img src="https://www.smilykiddos.in/cdn/shop/files/MK11001767_1.jpg?v=1740743388" alt="Bag" className="fade-in" />
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPp3GlfOuNmE2ycpzRhewEYpwVtg9yS0KsNg&s" alt="Men Socks" className="fade-in" /> */}
            {/* <img src="https://www.escaro.in/cdn/shop/files/IMG_105100.jpg?v=1741023227" alt="Men Belt" className="fade-in" /> */}
          </div>
          <div className="gallery-grid">
            {/* <img src="https://godbolegear.com/cdn/shop/files/ClassicWalletinDualTonesbyGodboleLeatherGoods.jpg?v=1689083829&width=1206" alt="Wallet" className="fade-in" /> */}
            {/* <img src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/375x375/Buy-1-Get-1-Track-Pant--(2T1)-1.jpg" alt="Night Pant" className="fade-in" /> */}
            <img src="https://images.meesho.com/images/products/373067944/uuol2_512.webp" alt="Cap" className="fade-in" />
            <img src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Set-of-6-Leatherette-Travel-Bags-new-brown-1.jpg" alt="Bag" className="fade-in" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPp3GlfOuNmE2ycpzRhewEYpwVtg9yS0KsNg&s" alt="Men Socks" className="fade-in" />
            <img src="https://www.escaro.in/cdn/shop/files/IMG_105100.jpg?v=1741023227" alt="Men Belt" className="fade-in" />
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2 className="fade-in text-center text-white">Customer Reviews</h2>
        <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="review-card">
                <p>"Amazing quality! The fabric is soft and comfortable. Highly recommended!"</p>
                <h4>- Vinod Chudasma</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="review-card">
                <p>"Great collection at affordable prices. Loved the design and fit."</p>
                <h4>- Utsav kava</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="review-card">
                <p>"ઓમ હોજિયરીના કપડાં ખૂબ જ આરામદાયક અને સ્ટાઇલિશ છે. હું ઘણી વખત ખરીદી કરું છું અને હંમેશા ખુશ રહું છું."</p>
                <h4>- Vasoya jay  </h4>
              </div>
            </div><div className="carousel-item">
              <div className="review-card">
                <p>"આજે પહેલીવાર ઓમ હોજિયરી ટ્રાય કર્યું અને બસ, LOVE IT! હવે બીજું ક્યાંયથી લેવું જ નહિ!"❤️."</p>
                <h4>- Kirtan Buha</h4>
              </div>
            </div>
            {/* <div className="carousel-item">
              <div className="review-card">
                <p>"Great collection at affordable prices. Loved the design and fit."</p>
                <h4>- Utsav kava</h4>
              </div>
            </div> */}
            {/* <div className="carousel-item">
              <div className="review-card">
                <p>"Great collection at affordable prices. Loved the design and fit."</p>
                <h4>- Utsav kava</h4>
              </div>
            </div> */}
            {/* <div className="carousel-item">
              <div className="review-card">
                <p>"Best hosiery collection I’ve bought so far. Super stylish and comfy!"</p>
                <h4>- Aman Verma</h4>
              </div>
            </div> */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We provide high-quality hosiery products that combine comfort and style.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Arun modhkiya</p>
            <p>Sailesh modhkiya</p>
            <p>Email: support@hosieryshop.com</p>
            <p>Phone: 8140362933</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Hosiery Shop. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home