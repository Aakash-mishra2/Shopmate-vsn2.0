import React from "react";
import './styles/footer.css';

function Footer() {
    const day = new Date();
    const currentYear = day.getFullYear();
    return (
        <footer>
            <p>Thank You for shopping with us ❤️🛒! </p>
            <p>Copyright Skybazaar@{currentYear} </p>
        </footer>);
}

export default Footer;