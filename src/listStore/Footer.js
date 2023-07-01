import React from "react";
import './styles/footer.css';

function Footer() {
    const day = new Date();
    const currentYear = day.getFullYear();
    return (<footer><p>Copyright @ {currentYear}</p></footer>);
}

export default Footer;