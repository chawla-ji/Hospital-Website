import React, { useState } from "react";
import Slider from "react-slick";
import { Calendar, Clock } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export default function VetAppointmentPage() {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    petType: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Appointment request submitted!");
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Image Slider Section */}
      <div className="lg:w-1/2 w-full hidden lg:block relative">
        <Slider {...sliderSettings} className="h-full">
          <div className="relative">
            <img
              src={image1}
              alt="Veterinary Care 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src={image2}
              alt="Veterinary Care 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src={image3}
              alt="Veterinary Care 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 w-full bg-orange p-8 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Book a Vet Appointment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="ownerName"
                className="block text-sm font-medium text-gray-700"
              >
                Owner's Name
              </label>
              <input
                id="ownerName"
                name="ownerName"
                type="text"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="petName"
                className="block text-sm font-medium text-gray-700"
              >
                Pet's Name
              </label>
              <input
                id="petName"
                name="petName"
                type="text"
                value={formData.petName}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="petType"
                className="block text-sm font-medium text-gray-700"
              >
                Pet Type
              </label>
              <select
                id="petType"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="appointmentDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <div className="relative mt-1">
                  <input
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-3 focus:ring-opacity-50 pl-10"
                  />
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="appointmentTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <div className="relative mt-1">
                  <select
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-10 p-3"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                  <Clock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Reason for Visit
              </label>
              <input
                id="reason"
                name="reason"
                type="text"
                value={formData.reason}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
