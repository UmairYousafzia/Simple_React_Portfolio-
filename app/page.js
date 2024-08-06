"use client"
import React from 'react'
import Header from "@/Components/Header"
import Showcase from "@/Components/Showcase"
import About from "@/Components/About"
import Experience from "@/Components/Experience"
import Projects from "@/Components/Projects"
import Contact from "@/Components/Contanct"
import Footer from '@/Components/Footer'


const page = () => {
    return (
        <>
            <Header/>
            <Showcase/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default page