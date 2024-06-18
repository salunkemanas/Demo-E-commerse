import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Card = ({selectedOption}) => {
  
  let products = [
      {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Focus Paper Refill',
        href: '#',
        price: '89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]

  products = [...products].sort((a, b) => {
    if (selectedOption === 'Name') {
      return a.name.localeCompare(b.name);
    } else if (selectedOption === 'Low To High') {
      return parseInt(a.price,10) - parseInt(b.price,10);
    } else if (selectedOption === 'High To Low') {
      return  parseInt(b.price,10) - parseInt(a.price,10);
    }
  });
  
  
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
//     <div className="bg-white">
//   <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//     <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
//       {products.map((product) => (
//         <Link key={product.id} to={`/product/${product.id}`} className="group">
//           <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 sm:w-4/5 sm:mx-auto">
//             <img
//               src={product.imageSrc}
//               alt={product.imageAlt}
//               className="h-full w-full object-cover object-center group-hover:opacity-75"
//             />
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>
  )
}

export default Card