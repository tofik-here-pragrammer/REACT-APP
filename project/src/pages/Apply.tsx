import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const colleges = [
  "Delhi University",
  "Mumbai University",
  "Bangalore University",
  "Chennai University",
  "Kolkata University"
];

const reasons = [
  "Transfer to Another College",
  "Higher Studies",
  "Employment",
  "Personal Reasons",
  "Other"
];

interface FormData {
  fullName: string;
  enrollmentNumber: string;
  college: string;
  course: string;
  branch: string;
  yearOfAdmission: string;
  yearOfPassing: string;
  reasonForLeaving: string;
  email: string;
  mobile: string;
}

export default function Apply() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    enrollmentNumber: '',
    college: '',
    course: '',
    branch: '',
    yearOfAdmission: '',
    yearOfPassing: '',
    reasonForLeaving: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Apply for Your College Leaving Certificate</h1>
            <p className="mt-2 text-gray-600">Please fill in all the required details accurately</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Personal Details</h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name (As per college records)
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-gray-700">
                    Enrollment Number / Roll Number
                  </label>
                  <input
                    type="text"
                    id="enrollmentNumber"
                    name="enrollmentNumber"
                    value={formData.enrollmentNumber}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* College Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">College Details</h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700">
                    College Name
                  </label>
                  <select
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select College</option>
                    {colleges.map(college => (
                      <option key={college} value={college}>{college}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                    Course
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                    Branch
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="yearOfAdmission" className="block text-sm font-medium text-gray-700">
                    Year of Admission
                  </label>
                  <input
                    type="text"
                    id="yearOfAdmission"
                    name="yearOfAdmission"
                    value={formData.yearOfAdmission}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="yearOfPassing" className="block text-sm font-medium text-gray-700">
                    Year of Passing
                  </label>
                  <input
                    type="text"
                    id="yearOfPassing"
                    name="yearOfPassing"
                    value={formData.yearOfPassing}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="reasonForLeaving" className="block text-sm font-medium text-gray-700">
                    Reason for Leaving
                  </label>
                  <select
                    id="reasonForLeaving"
                    name="reasonForLeaving"
                    value={formData.reasonForLeaving}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Reason</option>
                    {reasons.map(reason => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Contact Details</h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Required Documents</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                      >
                        <span>Upload required documents</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      ID Proof, Last Semester Marksheet (PDF, JPG, PNG up to 5MB each)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                You will receive an email and SMS confirmation after submission
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}