<template>

    <div class="footer">
        <div class="heading">
            <h3>Aaliyah <sup>Shop</sup></h3>
        </div>
        <div class="content">
            <!-- <div class="services">
                <h4>Services</h4>
                <p><a href="#">App development</a></p>
                <p><a href="#">Web development</a></p>
                <p><a href="#">DevOps</a></p>
                <p><a href="#">Web designing</a></p>
            </div> -->
            <!-- <div class="social-media">
                <h4>Social</h4>
                <p>
                    <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
                </p>
                <p>
                    <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
                </p>
                <p>
                    <a href="https://github.com/farazc60"><i class="fab fa-github"></i> Github</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/codewithfaraz"><i class="fab fa-facebook"></i> Facebook</a>
                </p>
                <p>
                    <a href="https://www.instagram.com/codewithfaraz"><i class="fab fa-instagram"></i> Instagram</a>
                </p>
            </div> -->
            <!-- <div class="links">
                <h4>Quick links</h4>
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Blogs</a></p>
                <p><a href="#">Contact</a></p>
            </div> -->
            <div class="details">
                <p>
                    Hi there thrifty shoppers, I love saving you money with my fantastic daily deals. - Happy Shopping!
                </p>
            </div>
        </div>
        <footer>
            <hr />
            © 2024 AaliyahShop
        </footer>
    </div>
</template>

<style scoped>
.details {
    color: #fff;
}
.footer {
  /* background-color: rgb(192, 188, 192); */
  background-image: linear-gradient( 135deg, #37005a69 10%, #a53c036b 100%);
  color: #060606;
  width: 100%;
  bottom: 0;
  left: 0;
}

.footer .heading {
  color: #fefefe;
  max-width: 1010px;
  width: 90%;
  text-transform: uppercase;
  margin: 30% auto;
  margin-bottom: 3rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.footer .content {
  display: flex;
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