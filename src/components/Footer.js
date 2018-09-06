import React from 'react';

const Footer = () => (
    <footer className="bg-dark text-white">
        <div className="container py-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-5 text-center text-md-left">
                    <ul className="nav lavalamp"><div className="lavalamp-object ease"></div>
                        <div className="lavalamp-object ease lavalamp-item"></div>
                        <li className="nav-item lavalamp-item">
                            <a className="nav-link" href="https://kb.projectmerge.org/" target="_blank">Knowledge Base</a>
                        </li>
                        <li className="nav-item lavalamp-item">
                            <p className="copyright">Copyright © 2018 projectmerge.org. All rights reserved.</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-center">
                    <img className="logo-sm" src="https://www.projectmerge.org/assets/images/logo-white.png" alt="Merge Logo" />
                </div>
                <div className="col-md-5 text-center text-md-right">
                    <ul className="socials">
                        <li><a href="https://discord.gg/B4qrhe3" target="_blank" className="fs-20"><img src="https://discordapp.com/assets/41484d92c876f76b20c7f746221e8151.svg" /></a></li>
                        <li><a href="https://t.me/joinchat/EBHH3xH76wTvINb91IIxDg" target="_blank" className="fab fa-telegram fs-20"></a></li>
                        <li><a href="https://twitter.com/TheProjectMerge" target="_blank" className="fab fa-twitter fs-20"></a></li>
                        <li><a href="https://www.facebook.com/TheProjectMerge" target="_blank" className="fab fa-facebook-f fs-20"></a></li>
                        <li><a href="https://www.instagram.com/theprojectmerge__" target="_blank" className="fab fa-instagram fs-20"></a></li>
                        <li><a href="mailto:contact@projectmerge.org" target="_blank" className="fas fa-envelope fs-20"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;