import React from 'react'
import { useState } from 'react';
const ProductDetail = () => {
  
  const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'materials':
                return (
                    <ul className="list-disc pl-5">
                        <li>100% Cotton Paper</li>
                        <li>Gold Engraved Printing</li>
                    </ul>
                );
            case 'shipping':
                return (
                    <ul className="list-disc pl-5">
                        <li>Ships in 2-3 business days</li>
                        <li>Free shipping in the USA</li>
                    </ul>
                );
            case 'overview':
            default:
                return (
                    <ul className="list-disc pl-5">
                        <li>Folded Note</li>
                        <li>10 notes / 10 regency lined envelopes</li>
                        <li>3 13/16 x 5 3/16</li>
                        <li>Printing Process: Engraved</li>
                        <li>Processing Time: 2-3 business days</li>
                    </ul>
                );
        }
    };

  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 6,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]
  return (
    <div className="container px-4 w-3/5 mx-auto mt-5">
            <div className="flex flex-col lg:flex-row">
                {/* Thumbnail images column for large screens */}
                <div className="hidden lg:flex lg:flex-col lg:space-y-2 lg:mr-4">
                    {products.slice(0, 3).map((product, index) => (
                        <img key={index} src={product.imageSrc} alt={`Thumbnail ${index + 1}`} className="w-16 h-16 object-cover" />
                    ))}
                </div>

                {/* Main content */}
                <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full lg:w-1/2">
                        <img src={`${products[0].imageSrc}`} alt="Product Image" className="w-full" />
                        {/* Thumbnail images for small screens */}
                        <div className="flex lg:hidden justify-center space-x-2 mt-4">
                            {products.slice(0, 3).map((product, index) => (
                                <img key={index} src={product.imageSrc} alt={`Thumbnail ${index + 1}`} className="w-16 h-16 object-cover" />
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 lg:mt-0 lg:ml-6">
                        <h1 className="text-2xl font-bold">Regency Thank You Note</h1>
                        <p className="mt-2 text-gray-600">
                            A thoughtful gesture or generous gift deserves a special thank you note. Made from warm white, all-cotton paper with classic,
                            its engraved by a proprietary and expertly into cover, our Gold Engraved Regency Thank You Note rises to the occasion.
                        </p>
                        <div className="flex mt-4">
                            <span className="text-xl font-semibold">$20.00/box</span>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input type="number" id="quantity" name="quantity" min="1" className="mt-1 block w-1/3 pl-3 pr-12 sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 w-full">Add to Cart</button>
                        
                        {/* Tab navigation */}
                        <div className="mt-4 flex border-b">
                            <button
                                className={`py-2 px-4 text-sm font-medium ${activeTab === 'overview' ? 'border-b-2 border-purple-600' : ''}`}
                                onClick={() => handleTabClick('overview')}
                            >
                                Overview
                            </button>
                            <button
                                className={`py-2 px-4 text-sm font-medium ${activeTab === 'materials' ? 'border-b-2 border-purple-600' : ''}`}
                                onClick={() => handleTabClick('materials')}
                            >
                                Materials
                            </button>
                            <button
                                className={`py-2 px-4 text-sm font-medium ${activeTab === 'shipping' ? 'border-b-2 border-purple-600' : ''}`}
                                onClick={() => handleTabClick('shipping')}
                            >
                                Shipping
                            </button>
                        </div>

                        {/* Tab content */}
                        <div className="p-4">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductDetail




