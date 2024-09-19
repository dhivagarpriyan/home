import React from 'react'

const NewsLetter = () => {
  return (
   /* <div className=' w-full bg-black py-8 mt-8 mb-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-8'>
                  <h1 className='text-2xl text-white sm:text-3xl md:text-4xl lg:text-sxl'>Want tips and tricks to optimize your flow? </h1>
                  <p className='py-4 text-gray-300'>Get the latest news and updates from our newsletter</p>
            </div>
            <div className='md:my-8'>
                <input type='email' placeholder='Enter your Email'
                  className='px-2 w-full md:w-[250px] mx-auto py-1 focus:outline-none border-2 text-black border-gray-600 rounded-md'

                />
                <button className='bg-coral-red px-2 py-1 mx-4  my-2 font-bold text-white rounded-md'>
                    Notify me
                </button>
                <p className='text-white my-2 max-w-[350px] font-semibold'>We care about protection of your data read our           <span className='text-coral-red'> privacy policy </span> </p>
            </div>
        </div>
    </div> 
    */
   <div className="w-full bg-[#1A1D2B] border-b mt-8">
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
                <h2 className="text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">
                  Want tips and tricks to optimize your flow? 
                </h2>
                <p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200" id="newsletter-headline">
                    Sign up for our newsletter to stay up to date.
                </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form target="_blank" className="sm:flex" aria-labelledby="newsletter-headline">
                    <input aria-label="Email address" type="email" required="" className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400" placeholder="Enter your email"/>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-coral-red border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">Subscribe</button>
                    </div>
                </form>
                <p className="mt-3 text-sm leading-5 text-indigo-200">
                We care about protection of your data read our <span className='text-coral-red'> privacy policy </span>
                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default NewsLetter