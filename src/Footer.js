import React from 'react';

const Footer = () => {
    return (
        <div className="text-center py-3 text-warning">
            &copy; {new Date().getFullYear()}  Thanks for visiting :)
        </div>
    );
}

export default Footer;