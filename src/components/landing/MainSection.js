import React from 'react';

function MainSection() {
    return (
        <div className="relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/5">
                        <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-24">
                            <div className="flex mb-6 items-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                                    <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
                                </svg>
                                <span className="ml-2 text-sm font-medium">Powering Tomorrow</span>
                            </div>
                            <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8">The Future of page creation</h1>
                            <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
                                Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.
                            </p>
                            <div className="flex flex-col sm:flex-row">
                                <a href="#" className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200">
                                    Browse demo
                                </a>
                                <a href="#" className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200">
                                    Create site
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5">
                        <div className="hidden lg:flex items-center justify-center h-full p-3 bg-lime-500">
                            <img className="absolute bottom-0 left-0 -ml-16" src="https://static.shuffle.dev/components/preview/d0fe0dce-49f2-4365-ac59-e9cb4c2aa512//flow-assets/headers/card-small.png" alt="" />
                            <img className="block xl:h-full mx-auto rounded-full" src="https://images.unsplash.com/photo-1635405038683-39ac9c4c70c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyN3x8d3d3fGVufDB8fHx8MTcxNzA3MDcxN3ww&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
                        </div>
                        <div className="relative flex lg:hidden p-3 bg-lime-500 items-center justify-center">
                            <img className="absolute top-0 right-0 -mt-16" src="https://static.shuffle.dev/components/preview/d0fe0dce-49f2-4365-ac59-e9cb4c2aa512//flow-assets/headers/card-small.png" alt="" />
                            <img className="block w-full max-w-2xl h-auto rounded-full" src="https://static.shuffle.dev/components/preview/d0fe0dce-49f2-4365-ac59-e9cb4c2aa512/assets/public/flow-assets/headers/image-hero-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;