import React from "react";

const Experiance = () => {
    return (

        <div class = "main_experince mt-4" >
            <div class = "experince">
                 <div class="text-center mt-8 mb-8">
                    <p class = "text-neutral-500 font-bold ">Explore My</p>
                    <h1 class = " font-bold text-4xl ">Experiance</h1>
                </div>
                <div class = "expereince_card flex gap-4">

                    <div class = "exp_card">
                        
                        <p class = "text-center font-bold text-2xl text-neutral-500"> FrontEnd Development</p>
                        <div class = "skills flex p-4" >
                            <ul>
                                <li class = "text-neutral-500 font-bold" > <span><img src = "/true.png"></img></span> HTML</li>
                                <li class = "text-neutral-500 font-bold"> <span><img src = "/true.png"></img></span> CSS</li>
                                <li class = "text-neutral-500 font-bold" > <span><img src = "/true.png"></img></span> JavaScript</li>
                                <li class = "text-neutral-500 font-bold" > <span><img src = "/true.png"></img></span> Tailwind</li>
                            </ul>
                            <ul>
                                <li class = "text-neutral-500 font-bold" > <span><img src = "/true.png"></img></span> Bootstrap 5</li>
                                <li class = "text-neutral-500 font-bold"> <span><img src = "/true.png"></img></span> React Js</li>
                            </ul>
                        </div>

                    </div>
                    <div class = "exp_card">
                        
                        <p class = "text-center font-bold text-2xl text-neutral-500"> BackEnd Development</p>
                        <div class = "skills flex p-4" >
                            <ul>
                                <li class = "text-neutral-500 font-bold" > <span><img src = "/true.png"></img></span> Laravel</li>
                             </ul>
                           
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
    )

}
export default Experiance