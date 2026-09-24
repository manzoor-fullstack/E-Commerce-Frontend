"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        {/* Exclusive */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Exclusive</h2>
          <p className="text-sm mb-4">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center bg-transparent border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-sm px-3 py-2 outline-none placeholder-gray-400"
            />
            <button className="bg-white text-black px-3 py-2 hover:bg-gray-200 transition">
              ➜
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Support</h2>
          <p className="text-sm leading-6 mb-4">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Download App</h2>
          <p className="text-xs mb-3 text-gray-400">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/qr-code.jpg"
              alt="QR Code"
              width={16}
              height={16}
              className="w-16 h-16 border border-gray-600 rounded-md"
            />
            <div className="flex flex-col space-y-2">
              <Image src="/google-store.png" alt="Google Play" className="w-28" width={18} height={18} />
              <Image src="/app-store.png" alt="App Store" className="w-28" width={8} height={8}/>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
