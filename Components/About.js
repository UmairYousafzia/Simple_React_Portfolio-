import React from "react";

const About = () => {
    return (

        <div class ="main">
            
            <div class = "main_content flex items-center">

                <div class = "About_pic w-1/4">
                        <img class = "rounded-lg  w-full h-full p-4" src = "/card.jpg"></img>
                </div>

                <div class = "about_content w-3/4 flex flex-col items-center">
                    <div class = "content_card flex gap-8" >
                        <div class = " card">
                            <p class = "font-bold" >Experiance</p>
                            <p class = "text-neutral-500  font-bold" >2 + Year</p>
                            <p class = "text-neutral-500 " >Front End Developer</p>
                        </div>
                        
                        <div class = "card">
                            <p class = "font-bold">Education</p>
                            <p class = "text-neutral-500 " >Bscs Bachlor Degree</p>
                            <p class = "text-neutral-500 " >Computer Science</p>
                        </div>

                    </div>
                   
                    <div class = "aboutme text-neutral-500" >
                        <p>Welcome to my profile! I'm a Website Developer and Designer with 2 years of experience focusing on the frontend. My expertise lies in HTML, CSS, Bootstrap,tailwind css, JavaScript, jQuery Laravel Php.I'm dedicated to providing sincere and effective assistance to help you achieve your goals.Excited to collaborate with you, and thanks for considering my services!</p>
                    </div>
                </div>

            </div>

        </div>

    )

}
export default About