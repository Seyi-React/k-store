import cuban from "../../images/goldchain.jpg";
import ice from "../../images/iced.jpg";
import gold from "../../images/hand.jpg";
import link from "../../images/cubanlink.jpg";
// import data from './check'

const Product = () => {
  return (
    <>
      <div className="main-products">
        <div>
          <h3 className="product-header">Products you may like</h3>
        </div>
        <div className="products">
          <section>
            <img src={cuban} alt="img" className="product-img" />
            <h5>Cuban Link Chain With Plug</h5>
            <h6 className='money'>$20</h6>
          </section>
          <section>
            <img src={ice} alt="img" className="product-img" />
            <h5>Iced Out Cuban Chain</h5>
            <h6>$22</h6>
          </section>
          <section>
            <img src={gold} alt="img" className="product-img" />
            <h5>Gold Chain With Cross</h5>
            <h6>$15</h6>
          </section>
          <section>
            <img src={link} alt="img" className="product-img" />
            <h5>Cuban Link Chain</h5>
            <h6>$30</h6>
          </section>
        </div>
      </div>
    </>
  );
};
export default Product;
