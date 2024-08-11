import React from 'react';
import PropTypes from 'prop-types';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const moreLinks = ['About Us', 'Products', 'Career', 'Contact Us'];
  const socialLinks = [
    { href: 'https://instagram.com', icon: FaInstagram },
    { href: 'https://twitter.com', icon: FaTwitter },
    { href: 'https://facebook.com', icon: FaFacebook },
  ];

  return (
    <footer className="bg-white py-8 w-full">
      <div className="container mx-auto max-md:w-[80vw] px-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0">
          <img src="icon.svg" alt="Food Truck Logo" className="h-20 w-auto" />
        </div>

        <div className="text-left mb-8 md:mb-0 max-md:w-full">
          <h4 className="text-lg font-bold text-[#0E2368] mb-4">Contact Us</h4>
          <address className="not-italic text-[#646874] text-sm max-w-[230px]">
            <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className="mt-2">example2020@gmail.com</p>
            <p className="mt-2">(904) 443-0343</p>
          </address>
        </div>

        <nav aria-label="Footer navigation" className="mb-8 md:mb-0 max-md:w-full">
          <h4 className="text-lg font-bold text-[#0E2368] mb-4">More</h4>
          <ul className="text-[#646874] text-sm space-y-2">
            {moreLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </nav>

        <div className="text-center md:text-left flex md:flex-col flex-col-reverse">
          <div>
            <h4 className="text-lg md:block hidden font-bold text-[#0E2368] mb-4">Social Links</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4 max-md:mt-4">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-[#0E2368]">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="text-[#828B9C] text-sm">
            &copy; 2022 Food Truck Example
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  moreLinks: PropTypes.arrayOf(PropTypes.string),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  })),
};

export default Footer;