import React from "react";

const Projects = () => {
    return (

        <div class = "main_projects mt-4" >
            <div class = "project">
                 <div class="text-center mt-8 mb-8">
                    <p class = "text-neutral-500 font-bold ">Browse My Recent</p>
                    <h1 class = " font-bold text-4xl ">Projects</h1>
                </div>
               
            </div>

            <div class = "myprojects flex gap-4" >
                <div class= "project_card">
                    <div class = "project_img" >
                        <img src = "/pro 1.png"></img>
                    </div>
                    <div class = "protitle text-center font-bold text-neutral-500 text-2xl"> Project One</div>
                    <div className = "download_btn flex  justify-center  mt-6" >
                        <button class="text-white bg-slate-700  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Git Hub</button>
                        <button  class="text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
                    </div>
                </div>
                
                <div class= "project_card">
                    <div class = "project_img" >
                        <img src = "pro2.png"></img>
                    </div>
                    <div class = "protitle text-center text-neutral-500 font-bold text-2xl"> Project Two</div>
                    <div className = "download_btn flex  justify-center  mt-6" >
                        <button class="text-white bg-slate-700  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Git Hub</button>
                        <button  class="text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
                    </div>
                </div>
                
                <div class= "project_card">
                    <div class = "project_img" >
                        <img src = "pro3.png"></img>                    
                    </div>
                    <div class = "protitle text-center text-neutral-500 font-bold text-2xl" > Project Three</div>
                    <div className = "download_btn flex  justify-center  mt-6" >
                        <button class="text-white bg-slate-700  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Git Hub</button>
                        <button  class="text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default Projects