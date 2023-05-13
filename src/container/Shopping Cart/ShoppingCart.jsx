import React from 'react'
import images from '../../constants/images'
const ShoppingCart = () => {
    return (
        <div class="container mx-auto bg-white h-screen">
            <div class="flex">
                <div class="w-3/4 bg-white px-10 py-10">
                    <div class="flex justify-between border-b pb-8 text-black">
                        <h1 class="font-semibold text-2xl">SHOPPING CART</h1>
                        <h2 class="font-semibold text-2xl">3 ITEMS</h2>
                    </div>
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-black text-xs uppercase w-2/5">Product Details</h3>
                        <h3 class="font-semibold text-center text-black text-xs uppercase w-1/5 ">Quantity</h3>
                        <h3 class="font-semibold text-center text-black text-xs uppercase w-1/5 ">Price</h3>
                        <h3 class="font-semibold text-center text-black text-xs uppercase w-1/5 ">Total</h3>
                    </div>
                    <div class="flex items-center text-black hover:bg-gray-100 -mx-8 px-6 py-5 ">
                        <div class="flex w-2/5">
                            <div class="w-20">
                                <img class="h-24" src={images.sofa} alt="" />
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm text-black">SOFA</span>
                                <span class="text-red-500 text-xs">SOFA</span>
                                <a href="#" class="font-semibold hover:text-red-500 text-black text-xs">Remove</a>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>

                            <input class="mx-2 border text-center w-8 text-black" type="text" value="1" />

                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
                    </div>

                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 text-black">
                        <div class="flex w-2/5">
                            <div class="w-20">
                                <img class="h-24" src={images.chair} alt="" />
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm text-black">CHAIR</span>
                                <span class="text-red-500 text-xs">Chair</span>
                                <a href="#" class="font-semibold hover:text-red-500 text-black text-xs">Remove</a>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>

                            <input class="mx-2 border text-center w-8 text-black" type="text" value="1" />

                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
                        <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
                    </div>

                    <div class="flex items-center text-black hover:bg-gray-100 hover:text-black -mx-8 px-6 py-5">
                        <div class="flex w-2/5">
                            <div class="w-20">
                                <img class="h-24" src={images.table} alt="" />
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm text-black">TABLE</span>
                                <span class="text-red-500 text-xs">Table</span>
                                <a href="#" class="font-semibold hover:text-red-500 text-black text-xs">Remove</a>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                            <input class="mx-2 border text-center w-8 text-black" type="text" value="1" />

                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
                        <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
                    </div>

                    <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </a>
                </div>

                <div id="summary" class="w-1/4 px-8 py-10 text-black">
                    <h1 class="font-semibold text-2xl border-b pb-8">ORDER SUMMARY</h1>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold text-sm uppercase">Items 3</span>
                        <span class="font-semibold text-sm">590$</span>
                    </div>
                    <div class="border-t mt-8">
                        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart