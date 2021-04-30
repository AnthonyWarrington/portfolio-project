import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className = "container py-5">
            <div className = "row">

                <div className ="col-lg-6 col-xm-12">
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-img" src = {author} alt = "Author picture..."/>
                    </div>
                </div>

                <div className = "col-lg-6 col-xm-12">
                    <h1 className = "about-heading">About Me</h1>
                    <p>I'm a Software Developer living in Cambridge, NZ.
                        I have a serious passion for learning and problem solving.
                        Working hard to learn more about problems and find solutions is what I love most about working with Software.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;