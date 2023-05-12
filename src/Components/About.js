import React from "react";


const About=({children})=>{
    return(
        <div className="about">
            <h1>About</h1>
            <p>A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.</p>
            {children}
        </div>
    )
}
export default About;