import React from 'react'
import Product from '../Product/Product'
import style from './ProductList.module.css'

function ProductList() {

  const products = [
    { id: 1, imgUrl: "https://i.pinimg.com/236x/f7/9c/4e/f79c4e939c1344fc512e643cfdc5da94.jpg", name: "Desserts" },
    { id: 2, imgUrl: "https://i.pinimg.com/564x/a0/87/6b/a0876bb6ed8621e7bd86c6f8fb2508c2.jpg", name: "Coffee" },
    { id: 3, imgUrl: "https://i.pinimg.com/236x/a6/90/d5/a690d5b176b09e2174327cc77ef86c72.jpg", name: 'Tea'},
    { id: 4, imgUrl: "https://i.pinimg.com/236x/e3/d4/d8/e3d4d8672f4c2ab0bcc3c025d9953cf4.jpg", name: "Milkshakes"},
    { id: 5, imgUrl: "https://i.pinimg.com/564x/27/c3/78/27c378260f5ed4a805b78fb1d37d5980.jpg", name: "Smoothies" },
    { id: 6, imgUrl: "https://i.pinimg.com/236x/29/c5/28/29c5289212378c9ba44c648e29dc2551.jpg", name: "Ice-cream"}
    
    
  ]



  return (
    <div className={style.cards}>
      {products.map((product, index) => (
        <div key={product.id}>
         
          <Product props={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList