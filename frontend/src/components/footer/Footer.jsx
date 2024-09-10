import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-8 py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Join an online community of 60,000+ pet parents in Bangalore
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm mb-10">
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-black pb-2">Services</h3>
            <ul className="space-y-2">
              {["Pet Grooming", "Dog Walking", "Dog Behaviourist", "Vet Home Visit", "Vet Video Call", "Pet Nutritionist", "Cat Grooming"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-dark_purple transition duration-300 ease-in-out">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-black pb-2">More</h3>
            <ul className="space-y-2">
              {["Experience Center", "Dog Food Planner"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-black pb-2">Contact Us</h3>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel:08049670496" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                08049670496
              </a>
            </p>
            <p className="mb-4">
              Email:{" "}
              <a href="mailto:social@kuddle.pet" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                social@kuddle.pet
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <MessageCircle size={24} />, label: "WhatsApp" },
                { icon: <Instagram size={24} />, label: "Instagram" },
                { icon: <Facebook size={24} />, label: "Facebook" },
                { icon: <Youtube size={24} />, label: "YouTube" },
                { icon: <Linkedin size={24} />, label: "LinkedIn" },
              ].map((social) => (
                <a key={social.label} href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-black pb-2">Location</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-left text-sm">
              <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                Mumbai
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-xs mb-2">
            {["About Us", "Privacy Policy", "Terms & Conditions", "Refund Policy", "Return Policy", "Shipping Policy"].map((item, index) => (
              <React.Fragment key={item}>
                <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                  {item}
                </a>
                {index < 5 && <span className="text-gray-400">|</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-xs">
            © 2022 Kuddle, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;