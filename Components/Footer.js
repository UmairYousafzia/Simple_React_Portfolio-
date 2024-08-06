import React from "react";

const Footer = () => {

    return (

        <div class="flex  flex-col justify-center font-mono items-center text-neutral-500">
            <div class="mb-4">
                <ul class="flex gap-2 font-bold text-lg cursor-pointer list-none">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experiance</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>

            <div class ="mainfooter flex justify-center">
                <i class ="mb-3">Copyright @2022 umairsb84 All right Reserved</i>
            </div>
            <hr class =" bg-slate-600 w-full h-1 rounded-lg mb-4"></hr>
        </div>
    )

}
export default Footer