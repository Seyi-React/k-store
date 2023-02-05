import { BsHandbag } from "react-icons/bs";
import { AiFillStar } from 'react-icons/ai';
import main from '../../images/hand.jpg';
import first from '../../images/first.jpg';
import second from '../../images/second.jpg';
import third from '../../images/third.jpg';



const Article = () => {


  // const [add,setAdd] = React.useState([]);

    return (
        <>
          <div className="article-div">
             <div>
                 <img src={second} alt='img' className="main-img" />
                   <div className="three-img">
                      <div>
                        <img src={first} alt='img' className="first"/>
                     </div>
                     <div>
                        <img src={main} alt='img' className="second"/>
                     </div>
                     <div>
                       <img src={third} alt='img' className="third"/>
                     </div>
                   </div>
                <button className="order">Order Now</button>
                <button className="cart"> <BsHandbag/> Add to Cart</button>
             </div>
               <div className="article-sub">
                    <h3>
                    Cuban Link Chain With Cross<br/>
                    Pendant Silver
                   </h3>
                      <div className="pricing">
                          <p> <AiFillStar className="star"/>4.5 Ratings</p>
                            <p>340+ Reviews</p>
                               <p>700+ sold</p>
                      </div>
                  <br/>
                     <h5 className="price">$45.00</h5>
                  <br/>
                     <p className="choose">Choose color:</p>
                  <br/>
                      <div className="color-div">
                        <div className="peach"></div>
                        <div className="yellow"></div>
                         <div className="black"></div>
                      </div>
                      <br/>
               <h4 className="details">Details</h4>
               <br/>
               <p className="info">Its a high class quality chain that makes you <br/> stand out
                with pride and style this quality chain necklace and Pendant
                takes complexity out of our wardrobe and replaces it with simplicity.
                it is made from genuine material perfect on your formal and semi formal occasion.
                Now you can step out in style without hurting your budgets!!!!!either of Silver
                or gold in color men and women can rock if in stainless makes it very trendy or unique...
               </p>
               <br/>
               <h4 className="details">Description</h4>
               <input type='range' min='50' max='100' className="range" />
               <div className="main-range">
                  <div className="range-div">
                    <p className="range-p">Color:<strong>Silver</strong></p>
                    <p className="range-p">Gender:<strong>Unisex</strong></p>
                    <p className="range-p">Weight:<strong>0.001kg</strong></p>
                    <p className="range-p">Material:<strong>Stainless steel</strong></p>
                  </div>
                  <div>
                    <div className="main-ranges">
                        <p className="features">Features</p>
                        <h5 className="feature-p">Unique</h5>
                        <h5 className="feature-p">Trendy</h5>
                        <h5 className="feature-p">Long lasting </h5>
                    </div>
                  </div>
               </div>
              

               </div>


           </div>
        </>
    )
}

export default Article;

