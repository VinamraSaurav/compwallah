"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mayrbppq");
    
    
  const initialValues = {
    email: "",
    name: "",
    message: "",
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    email: yup.string().email("Invalid Email Address").required("Required"),
    message: yup
      .string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
  });

  

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}


  return (
    <div id='contactUs'>
    <div  className="max-w-5xl mx-auto">
        <div className="text-xl text-primary flex justify-center font-bold">
        Contact Us
      </div>
      <div className="text-2xl md:text-4xl flex justify-center font-bold font-serif my-5 text-center">
        Get In Touch!
      </div>
      <div className="text-center m-2">
      Reach out to CompWallah - your partner in innovation and technology. Let's collaborate to turn your ideas into reality and drive your business to new heights.
      </div>
      <div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group flex flex-wrap md:flex-nowrap max-w-5xl gap-x-4 gap-y-3 my-3 m-2">
           <div className="md:w-6/12 w-full">
              {/* <label htmlFor="name">Your Name:</label> */}
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Name"
                className="border  mt-2 p-2 rounded-md border-black/70 w-full flex justify-center"
                required
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-left text-red-600 text-sm mx-2">
                  *{formik.errors.name}!
                </div>
              ) : null}
              </div>
              <div className="md:w-6/12 w-full">
              {/* <label htmlFor="email">Your Email:</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border  mt-2 p-2 rounded-md border-black/70 w-full flex justify-center"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-left text-red-600 text-sm mx-2">
                  *{formik.errors.email}!
                </div>
              ) : null}
              </div>
            </div>
            <div className="form-group flex flex-col m-2">
              {/* <label htmlFor="message" className="mx-2 font-bold">Your Message:</label> */}
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="border flex justify-center mt-2 p-2 rounded-md border-black/70 w-12/12"
                required
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-left text-red-600 text-sm mx-2">
                  *{formik.errors.message}!
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-btn w-[150px] p-2 my-2 mx-auto rounded-md text-bold px-4 bg-primary/85 hover:bg-primary text-white flex  justify-items-center mb-10 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
