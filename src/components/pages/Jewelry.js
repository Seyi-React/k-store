
import punk from '../../images/punk.jpg'
import pen from '../../images/cute.jpg'
import modern from '../../images/modern.jpg'
import rettro from '../../images/rettro.jpg'

const Jewelry = () => {

    return <>
    
    <div className="main-products">
            <div>
              <h3 className="product-header">Female Jewelries</h3>
             </div>
            <div className="products">   
                <section>
                <img src={punk} alt='img' className='product-img'/>
                   <h5>Cuban Punk butterfly</h5> 
                   <h6>$44</h6>
                </section>
                <section>
                <img src={pen} alt='img' className='product-img'/>
                   <h5>Luminous Pendant </h5> 
                   <h6>$28</h6>
                </section>
                <section>
                <img src={modern} alt='img' className='product-img'/>
                   <h5>Trending and Modern Necklace</h5> 
                   <h6>$55</h6>
                </section>
                <section>
                <img src={rettro} alt='img' className='product-img'/>
                   <h5>Cute Rettro Butterfly</h5> 
                   <h6>$30</h6>
                </section>
            </div>


         </div>
    
    </>
}


export default Jewelry;