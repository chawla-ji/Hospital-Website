import React, { useState } from "react";
import { Calendar,Clock } from "lucide-react";

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

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Image Section */}
      <div
        className="lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/12/26/09/16/vet-3895477_1280.jpg')",
        }}
      >
        <div className="h-full w-full bg-blue-200 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black text-center px-4">
            Veterinary Care
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 bg-[#f8f4f0] p-4 overflow-y-auto">
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
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex space-x-4">
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 p-2 focus:ring-opacity-50 pl-10"
                  />
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-10 p-2"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                  <Clock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
