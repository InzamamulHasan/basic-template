import React from "react";
import Section from "./Components/Section.js";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";

let section_data = [
    {title: "Skills" , content: "For anyone interested in learning front end web development, it’s crucial to understand the difference between HTML, CSS, and JavaScript. Whether you’re booking a flight or figuring out what to make for dinner, these three front end languages are the user interface building blocks of every website you’ve ever visited. And, while each language has a different functional focus, they all work together to create exciting, interactive websites that keep users engaged. For this reason, you’ll find that learning all three languages is important."},

    {title: "Education" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},


    {title: "Experience" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},

    {title: "Projects" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},

    {title: "Contact" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
]


let App=()=>{
    return (
        <div>
           
            <Navbar>
             
        
            </Navbar>
            <About>
                <br/>
                <hr/>
            </About>
            {
            section_data.map((el,index)=>{
                return(
                    <div>
                        <Section
                        title={el.title}
                         content={el.content}
                        >
                        {index!==section_data.length-1?<div><br/><hr/></div>:<br/>}
                        </Section>
                    </div>
                )
            })
            }
            <Footer/>
        </div>
    )
}
export default App