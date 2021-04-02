import React from 'react'
import Product from '../product/Product';
import './home.css';
 function Home(props) {
    

    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" width="100%" alt=""/>
            <div className="home__row">
                <Product  id="2"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
                 <Product 
                  id="3"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
                  <Product
                   id="4"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
            </div>
            <div className="home__row">
                <Product
                id="1"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
                 <Product
                  id="5"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
                  <Product
 id="6"                  
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
            </div>
            <div className="home__row">
                <Product
                 id="7"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
                 <Product
                  id="8"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
                  <Product
                   id="9"
                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                 price={39.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/518rJtqDMFL._SX327_BO1,204,203,200_.jpg"
                 />
            </div>
           </div>
        </div>
    )
}

export default Home;
