import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";
import images from "../../constants/images";
const Contact = () => {
    return (
        <div>
            <Header />
            <div class="container px-14 mx-auto border-t-[0.1px] border-black">
                <section class=" text-gray-800">
                    <div class="block rounded-lg shadow-lg bg-white">
                        <div class="flex flex-wrap items-center">
                            <div className="flex py-10">
                                <div class="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                    <form>
                                        <div class="form-group mb-6">
                                            <input
                                                type="text"
                                                class="form-control block w-full px-3 first-letter:py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput7"
                                                placeholder="Name" required
                                            />
                                        </div>
                                        <div class="form-group mb-6">
                                            <input
                                                type="email"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput8"
                                                placeholder="Email address" required autoComplete="email"
                                            />
                                        </div>
                                        <div class="form-group mb-6">
                                            <textarea
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleFormControlTextarea13"
                                                rows="3"
                                                placeholder="Message" required
                                            ></textarea>
                                        </div>
                                        <div class="form-group form-check text-center mb-6">
                                            <input
                                                type="checkbox"
                                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                                id="exampleCheck87"
                                            />
                                            <label
                                                class="form-check-label inline-block text-gray-800"
                                                for="exampleCheck87"
                                            >
                                                Send me a copy of this message
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Send
                                        </button>
                                    </form>
                                </div>
                                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                    <div class="flex flex-wrap pt-12 lg:pt-0">
                                        <div class="grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="headset"
                                                            class="w-5 text-white"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="grow ml-6">
                                                    <p class="font-bold mb-1">Technical support</p>
                                                    <p class="text-gray-500">nguyenkiencke@gmail.com</p>
                                                    <p class="text-gray-500">0388314851</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                                            <div class="flex items-start">
                                                <div class="shrink-0">
                                                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="dollar-sign"
                                                            class="w-3 text-white"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 288 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="grow ml-6">
                                                    <p class="font-bold mb-1">Sales questions</p>
                                                    <p class="text-gray-500">sales@example.com</p>
                                                    <p class="text-gray-500">0388314851</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                                            <div class="flex align-start">
                                                <div class="shrink-0">
                                                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="newspaper"
                                                            class="w-5 text-white"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="grow ml-6">
                                                    <p class="font-bold mb-1">Press</p>
                                                    <p class="text-gray-500">press@example.com</p>
                                                    <p class="text-gray-500">0388314851</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                                            <div class="flex align-start">
                                                <div class="shrink-0">
                                                    <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="bug"
                                                            class="w-5 text-white"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="grow ml-6">
                                                    <p class="font-bold mb-1">Bug report</p>
                                                    <p class="text-gray-500">bugs@example.com</p>
                                                    <p class="text-gray-500">0388314851</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full">
                <iframe
                    src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
