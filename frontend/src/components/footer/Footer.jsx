import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Join an online community of 60000+ pet parents in Bangalore
        </h2>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg">
          Ask us anything
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm px-4 md:px-20 mb-8">
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-300">
                Pet Grooming
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Dog Walking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Dog Behaviourist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Vet Home Visit
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Vet Video Call
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Pet Nutritionist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Cat Grooming
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">More</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-300">
                Experience Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-300">
                Dog Food Planner
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p>
            Phone:{" "}
            <a href="tel:08049670496" className="hover:text-red-300">
              08049670496
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:social@kuddle.pet" className="hover:text-red-300">
              social@kuddle.pet
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-300">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="#" className="hover:text-red-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-red-300">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-red-300">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="hover:text-red-300">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Location</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left text-xs md:text-sm">
            <a href="#" className="hover:text-red-300">
              Mumbai
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white pt-4">
        <div className="flex justify-center space-x-4 text-xs">
          <a href="#" className="hover:text-red-300">
            About Us
          </a>
          <span>|</span>
          <a href="#" className="hover:text-red-300">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-red-300">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-red-300">
            Refund Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-red-300">
            Return Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-red-300">
            Shipping Policy
          </a>
        </div>
        <p className="text-center mt-4 text-xs">
          © 2022 Kuddle, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
