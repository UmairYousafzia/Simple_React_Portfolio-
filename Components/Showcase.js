import React from "react";

const Showcase = () => {

    return (
        <div>
            <div class="flex justify-center items-center">
            <div class = "w-2/6">
                    <img  class= " w-full rounded-full p-10" src="/aa.jpg"></img>
            </div>
            <div class ="content text-center font-mono w-1/2">
                <p> Hello I'm</p>
                <h1 class = "font-bold text-2xl ">Umair Hussain</h1>
                <h2 class = "font-bold text-neutral-500  text-2xl">Full Stack Developer</h2>

                <div class="content_btn mt-2">
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV</button>
                    <button  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contact Info</button>
                </div>
            </div>
                    
            </div>
            <div class="text-center mt-4">
                <p class = "text-neutral-500 ">Get To Know More</p>
                <h1 class = " font-bold text-4xl ">About Me</h1>
            </div>
           
        </div>
       
        
        
    )
}
export default Showcase