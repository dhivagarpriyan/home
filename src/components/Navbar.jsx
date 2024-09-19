import React,{useState} from 'react'
import poster from "../assets/poster.png"
import { X,Menu } from 'lucide-react';


const Navbar = () => {

    const [nav,setNav]=useState(false);

    const navItems = [
        { label: "Features", href: "#" },
        { label: "Applications", href: "#" },
        { label: "Business", href: "#" },
        { label: "Company", href: "#" },
      ];
     
    return (

    <div  className=' sticky z-50 top-0 py-4 backdrop-blur-lg border-b border-coral-red'>
       <div className=' container mx-auto px-4 text-md'>
        <div className='flex justify-between items-center'>
            {/*<h1 className='font-bold text-3xl text-[#00df9a]'>BEACHES</h1>*/}
            <img src={poster} className='w-[150px] '/>
            <ul className=' hidden md:flex gap-x-4 font-medium text-medium '>
                    {navItems.map((item,index)=>(
                       <li className='text-black hover:text-coral-red' key={index}>{item.label}</li>
                    ))}
            </ul>
            <div className=' hidden md:flex gap-x-4'>
                    <button className='border-2 border-gray-300 bg-coral-red text-white py-1 px-2 rounded-md'>
                        Sign in
                    </button>
                    <button className='border-2 border-gray-300 bg-coral-red text-white  py-1 px-2 rounded-md hidden lg:block'>
                        Create Button
                    </button>
                 </div>
                 <div className=' md:hidden text-coral-red'>
                     <button onClick={()=>setNav(!nav)}>
                        {nav?<X/>:<Menu/>}
                     </button>
                 </div>
        </div>
        {nav && (
                <div className=' ease-in-out duration-200 fixed z-10 right-0 w-full mx-4 bg-white flex flex-col items-center py-8  md:hidden h-fit'>
                     
                 <ul onClick={()=>setNav(!nav)} className='flex flex-col gap-y-4 font-medium '>
                    {navItems.map((item,index)=>(
                       <li  className=" hover:text-[00df9a]" key={index}>{item.label}</li>
                    ))}
                 </ul>
                 
                 <div className=' pt-8 flex gap-x-4'>
                    <button onClick={()=>setNav(!nav)} className='border-2 border-gray-500 bg-coral-red text-white py-1 px-2 rounded-md'>
                        Sign in
                    </button>
                    <button onClick={()=>setNav(!nav)} className='border-2 border-gray-500 bg-coral-red text-white py-1 px-2 rounded-md'>
                        Create Button
                    </button>
                 </div>
                </div>
            )}
       </div>
    </div>

  )
}

export default Navbar