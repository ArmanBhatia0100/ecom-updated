import React from "react";
import Product from "../Product/Product";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div class="banner__div">
            <h1>Banner</h1>
            <p>This is just a demo project ignore the layout and coloring.</p>
          </div>
        </div>
        <div className="home__row">
          <Product
            details={{
              id: 1,
              title: "Bag",
              price: 20,
              img: "https://i5.walmartimages.ca/images/Enlarge/100/140/999999-6678962100140.jpg",
            }}
          ></Product>
          <Product
            details={{
              id: 7,
              title: "Mask",
              price: 2,
              img: "https://images-na.ssl-images-amazon.com/images/I/61G8ugYuItL._AC_UL200_SR200,200_.jpg",
            }}
          ></Product>
          <Product
            details={{
              id: 2,
              title: "Siri",
              price: 120,
              img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*",
            }}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            details={{
              id: 3,
              title: "Chair",
              price: 88,
              img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-1633038782.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
            }}
          ></Product>
          <Product
            details={{
              id: 4,
              title: "Ok Google",
              price: 50,
              img: "https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd",
            }}
          ></Product>
          <Product
            details={{
              id: 6,
              title: "Adaptor",
              price: 880,
              img: "https://media.cnn.com/api/v1/images/stellar/prod/210928131838-underscored-amazon-favs-sept-anker-nano-ii-65w-usb-c-charger.jpg?q=x_0,y_0,h_900,w_1600,c_fill/h_270,w_480",
            }}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            details={{
              id: 7,
              title: "Mask",
              price: 2,
              img: "https://images-na.ssl-images-amazon.com/images/I/61G8ugYuItL._AC_UL200_SR200,200_.jpg",
            }}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
