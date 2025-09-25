import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
        {/* Column 1: Services */}
        <div>
          <h3 className="font-semibold text-indigo-600 mb-2">24/7 Amazing Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-700">Free in-store pick up</a></li>
            <li><a href="#" className="hover:text-indigo-700">Free Shipping</a></li>
            <li><a href="#" className="hover:text-indigo-700">Flexible Payment</a></li>
            <li><a href="#" className="hover:text-indigo-700">Convenient help</a></li>
          </ul>
        </div>

        {/* Column 2: About Emox */}
        <div>
          <h3 className="font-semibold mb-2">About Emox</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-700">Company Info</a></li>
            <li><a href="#" className="hover:text-indigo-700">News</a></li>
            <li><a href="#" className="hover:text-indigo-700">Investors</a></li>
            <li><a href="#" className="hover:text-indigo-700">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-700">Diversity & Inclusion</a></li>
            <li><a href="#" className="hover:text-indigo-700">Advertise with us</a></li>
            <li><a href="#" className="hover:text-indigo-700">Policies</a></li>
            <li><a href="#" className="hover:text-indigo-700">Verified Rights Owner (VeRO) Program</a></li>
            <li><a href="#" className="hover:text-indigo-700">eCILicenses</a></li>
          </ul>
        </div>

        {/* Column 3: Order & Purchases */}
        <div>
          <h3 className="font-semibold mb-2">Order & Purchases</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-700">Check order status</a></li>
            <li><a href="#" className="hover:text-indigo-700">Shipping, Delivery & Pickup</a></li>
            <li><a href="#" className="hover:text-indigo-700">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-indigo-700">Price Match Guarantee</a></li>
            <li><a href="#" className="hover:text-indigo-700">Product Recalls</a></li>
            <li><a href="#" className="hover:text-indigo-700">Trade In Program</a></li>
            <li><a href="#" className="hover:text-indigo-700">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 4: Popular Categories */}
        <div>
          <h3 className="font-semibold mb-2">Popular Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-700">Check order status</a></li>
            <li><a href="#" className="hover:text-indigo-700">Shipping, Delivery & Pickup</a></li>
            <li><a href="#" className="hover:text-indigo-700">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-indigo-700">Price Match Guarantee</a></li>
            <li><a href="#" className="hover:text-indigo-700">Product Recalls</a></li>
            <li><a href="#" className="hover:text-indigo-700">Trade In Program</a></li>
            <li><a href="#" className="hover:text-indigo-700">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 5: Support & Services */}
        <div>
          <h3 className="font-semibold mb-2">Support & Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-700">Seller Center</a></li>
            <li><a href="#" className="hover:text-indigo-700">Contact Us</a></li>
            <li><a href="#" className="hover:text-indigo-700">eBay Returns</a></li>
            <li><a href="#" className="hover:text-indigo-700">eBay Money Back Guarantee</a></li>
          </ul>
          <div className="mt-4">
            <span className="inline-flex items-center">
              <span className="mr-2">Region Country</span>
              <span className="flex items-center">
                <span className="w-4 h-3 bg-red-600 mr-1"></span>
                <span className="w-4 h-3 bg-green-600 mr-1"></span>
                <span className="w-4 h-3 bg-black"></span>
                <span className="ml-2">United Arab Emirates</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Image src="https://via.placeholder.com/24" alt="Facebook" width={24} height={24} className="hover:opacity-75" />
            </a>
            <a href="#" aria-label="X">
              <Image src="https://via.placeholder.com/24" alt="X" width={24} height={24} className="hover:opacity-75" />
            </a>
            <a href="#" aria-label="Instagram">
              <Image src="https://via.placeholder.com/24" alt="Instagram" width={24} height={24} className="hover:opacity-75" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src="https://via.placeholder.com/24" alt="LinkedIn" width={24} height={24} className="hover:opacity-75" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="mb-4 md:mb-0">
          <a href="#" className="hover:text-indigo-700">Download Our App</a>
          <div className="flex space-x-2 mt-2">
            <Image src="https://via.placeholder.com/120x40" alt="App Store" width={120} height={40} className="h-10 w-auto" />
            <Image src="https://via.placeholder.com/120x40" alt="Google Play" width={120} height={40} className="h-10 w-auto" />
          </div>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Image src="https://via.placeholder.com/40" alt="tabby" width={40} height={40} className="h-8 w-auto" />
          <Image src="https://via.placeholder.com/40" alt="tamara" width={40} height={40} className="h-8 w-auto" />
          <Image src="https://via.placeholder.com/40" alt="Visa" width={40} height={40} className="h-8 w-auto" />
          <Image src="https://via.placeholder.com/40" alt="PayPal" width={40} height={40} className="h-8 w-auto" />
          <Image src="https://via.placeholder.com/40" alt="Google Pay" width={40} height={40} className="h-8 w-auto" />
        </div>
        <p className="text-center md:text-right">© 2025 Emox. All Rights Reserved. <a href="#" className="hover:text-indigo-700">Privacy Policy</a> | <a href="#" className="hover:text-indigo-700">Terms of Use</a> | <a href="#" className="hover:text-indigo-700">Warranty Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;