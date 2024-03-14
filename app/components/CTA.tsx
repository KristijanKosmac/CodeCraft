'use client';

import Button from './Button';
import React, { FormEvent, useEffect } from 'react';
import emailjs from "@emailjs/browser";

const CTA = () => {

  useEffect(() => emailjs.init("2euX4FWzPzRY-iJbV"), []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    const serviceId = "service_5x09zy8";
    const templateId = "template_2kb8v1p";

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const fullName = formData.get('fullName') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const company = formData.get('company') as string;

    console.log({ email, fullName, message, phone, company });

    try {
      const res = await emailjs.send(serviceId, templateId, { email, fullName,message, phone, company });
      console.log("res", res)
    } catch (error: any) {
      // Capture the error message to display to the user
      console.error(error);
    }
  };


  return (
    <section
      className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow"
      id="contact-us"
    >
      <div className="flex-1 flex flex-col">
        <h2 className="heading2">Contact us</h2>
        <h3 className="heading3">Let’s build something great together.</h3>
        <form className="mt-10" onSubmit={onSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full name
              </label>
              <input
                name="fullName"
                type="text"
                id="full_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Company
              </label>
              <input
                name="company"
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="CodeCraft"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number
              </label>
              <input
                name="phone"
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="info@codecraft.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message"
              rows={5}
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <Button styles={`mt-0`} name="Get in touch" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTA;
