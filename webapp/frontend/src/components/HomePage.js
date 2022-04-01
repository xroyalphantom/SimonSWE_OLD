import React from "react";
import Resume from "../../static/files/SimonHuang_Resume.pdf";

import '../../static/css/homepage.css';
import ParallaxJSXWrapper from "./ParallaxJSXWrapper";

function HomePage() {
    const Name = ParallaxJSXWrapper(<div className="name">Simon Huang</div>, 0.05);
    const Space = ParallaxJSXWrapper(<img src="../../static/images/SpaceWallpaper.jpg" alt="" className="space" />, 0.01);

    const Section2 = ParallaxJSXWrapper(
		<div className="section2">
			<svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#572148" viewBox="0 0 100 100" preserveAspectRatio="none" >
				<path d="M0,100 C20,-80 26,90 100,100" />
			</svg>

			<div className="section2_container">
                <div className="left">
					<img src="../../static/images/pfp.jpg" alt="" className="image" />
				</div>
                <div className="right">
					<p className="aboutme">
                        UWaterloo SE 2025
                    </p> 
                    <a href="https://github.com/xroyalphantom" className="button" target="_blank">GitHub</a>
                    <a href="https://linkedin.com/in/simon-d-huang" className="button" target="_blank">LinkedIn</a>
                    <a href={Resume} target="_blank" className="button">Resume</a>
                </div>
			</div>
		</div>
		, 0.03);

    return (
        <div className="main-container" style={{height: '1500px'}}>
            <div className="section1">
                <Space />
                <Name />
            </div>
            <Section2 />
        </div>
    );
}

export default HomePage;