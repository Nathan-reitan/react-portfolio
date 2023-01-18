import React from "react";

export default function Footer(){

    return (
        <footer>
            <div className="footer">
                <div className="footerWrapper">
                    <h1>
                        Nathan Reitan
                    </h1>
                    <div className="contactWrapper">
                        <h2 className="contactTitle">Contact Me</h2>
                        <ul className="listContainer">
                            <li>
                                <span>
                                    <a href="tel:+9497019646" className="contactMe">
                                        <img src="./icons/mobilePhone.svg" alt="phone Icon" className="footerContactIcons"/>
                                        (949) 701-9646
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="mailto:nathanreitan@gmail.com" className="contactMe">
                                        <img src="./icons/envelope-solid.svg" alt="email Icon" className="footerContactIcons" />
                                        nathanreitan@gmail.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="socialWrapper">
                        <a href="https://github.com/Nathan-reitan">
                            <img src="./icons/github.svg" alt="" className="socialIcons"/>
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-reitan/">
                            <img src="./icons/linkedin.svg" alt="" className="socialIcons"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
