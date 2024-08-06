import React from "react";

const Header = () => {

    return (

        <div class="flex justify-between font-mono items-center text-neutral-500">
            <div>
                    <h1 class="font-bold text-3xl ">Umair Hussain</h1>
            </div>
            <div class="mb-2">
                <ul class="flex gap-2 font-bold text-lg cursor-pointer list-none">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experiance</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        </div>
    )

}
export default Header