


const Footer = () => {


    return <>
    
        <div className="footer-main">
            <div className="footer-content">
                <div>
                    <h3>K.Stores</h3>
                    <p className="footer-p">Our products includes rings,earrings,<br/>
                    necklaces,bracelets and more.We have something for <br/>
                    every occasion,whether you are looking for <br/>
                    everyday wear or something special for a night out
                    </p>
                </div>
            <div className="footer-child">
                <h4>Company</h4>
                <p>Home</p>
                <p>Great Deals</p>
                <p>Blog</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className="footer-child">
                <h4>Help</h4>
                <p>FAQs</p>
                <p>How to buy</p>
                <p>Customer service</p>
                <p>Returns and Refunds</p>
            </div>
            <div className="footer-child">
                <h4>Contact Us</h4>
                <p>Ikeja Mall,Lagos</p>
                <p>+23481680000000</p>
                <p>kstores@gmail.com</p>
            </div>
            
            </div>
            <hr/>
            <div className="built">
                <p>&copy;Built by Oluwaseyi {new Date().getFullYear()}</p>
            </div>
        </div>
    
    
    </>
}

export default Footer;