<template>

  <div class="footer">
    <div class="heading">
      <h3><i class="fa fa-shopping-bag"></i>&nbsp;Aaliyah <sup>Shop</sup></h3>
    </div>
    <div class="content">
      <div class="services">
                <!-- <h4>Services</h4> -->
                <!-- <p><a href="#">money-saving deals</a></p>
                <p><a href="#">hard to find items</a></p>
                <p><a href="#">markdowns</a></p>
                <p><a href="#">sales</a></p>
                <p><a href="#">clearances</a></p>
                <p><a href="#">coupons</a></p>
                <p><a href="#">promo codes</a></p>
                <p><a href="#">free shipping codes</a></p> -->
            </div>
      <div class="social-media">
                <!-- <h3>Contact Email</h3>
                <p>
                    <a href="mail:DiscountsByAli@gmail.com"><i class="fa fa-envelope"></i>&nbsp;DiscountsByAli@gmail.com</a>
                </p> -->
            </div>
      <div class="links">
                <!-- <h4>Quick links</h4>
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Blogs</a></p>
                <p><a href="#">Contact</a></p> -->
            </div>
      <div class="details">
        <p>
          <h3>Amazon Associates Program</h3>
          <br/>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to
          provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. My website
          contains affiliate links, meaning, if you click through and make a purchase or sign up for a program, I may
          earn a commission. This is at no additional cost to you. Some posts may contain Sponsored Links which are in
          the form of Banner Ads, Image and Text Links.
        </p>
        <br/>
        <hr/>
        <p>
        <h3>Contact Us</h3>
        <a href="mail:ali.rinabor@gmail.com"><i class="fa fa-envelope"></i>&nbsp;ali.rinabor@gmail.com</a>
        </p>
      </div>
    </div>
    <footer>
      <hr />
      © 2024 &dash; <i class="fa fa-shopping-bag"></i>&nbsp;Aaliyah Amazing Deals 
      <br/>
      <br/>
    </footer>
  </div>
</template>

<style scoped>
h3 {
  color: antiquewhite;
}

.heading h3 {
  color: #fefefe !important;
}

.details {
  color: #fff;
}

.footer {
  /* background-color: rgb(192, 188, 192); */
  background-image: linear-gradient(135deg, #37005a69 10%, #a53c036b 100%);
  color: #060606;
  width: 100%;
  bottom: 0;
  left: 0;
}


.footer .heading {
  color: #fefefe;
  max-width: 98%;
  width: 100%;
  text-transform: uppercase;
  margin: 30% auto;
  margin-bottom: 3rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.footer .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.5rem;
}

.footer .content p {
  margin-bottom: 1.3rem;
}

.footer .content a {
  text-decoration: none;
  color: #fefefe;
}

.footer .content a:hover {
  border-bottom: 1px solid #971717;
}

.footer .content h4 {
  margin-bottom: 1.3rem;
  font-size: 19px;
}

footer {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}

footer hr {
  margin: 2rem 0;
}

@media (max-width: 767px) {
  .footer .content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .footer {
    position: unset;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {

  .footer .content,
  .footer {
    font-size: 14px;
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .footer {
    position: unset;
  }
}
</style>