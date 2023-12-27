import React,{useRef} from "react";
import "./css/style.css";
import "./css/Media.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const inputRef=useRef()

  const handleSubmit = ()=>{
    alert(`Thankyou ${inputRef.current.value} for Connecting us :)`)
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "username must be less then 10 charectors")
        .required("this is required"),
      email: Yup.string().required("this is required"),
      message: Yup.string().min(10, "Message at least 10 Words required "),
    }),
  });
  return (
    <div>
      <section id="contact">
        <div className="container-fluid">
          <h1 className="text-white" id="contact">
            Contact- <span id="skill">US</span>
          </h1>
          <div className="row mt-5 ">
            <div className="col-lg-6">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0932299662472!2d77.08175317439468!3d22.350108341090003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d713cbe241817%3A0x543a55c35627bca9!2sLal%20Bahadur%20Shastri%20Vyavsayik%20Adhyayan%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1688978138814!5m2!1sen!2sin"
                  width="400"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-box">
                <form >
                  <div className="user-box">
                    <input
                      type="text"
                      name="name"
                      ref={inputRef}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <label className="fs-5">Name</label>
                    {formik.errors.name && (
                      <p style={{ color: "red" }}>{formik.errors.name}</p>
                    )}
                  </div>
                  <div className="user-box">
                    <input
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <label className="fs-5">Email</label>
                    {formik.errors.email && (
                      <p style={{ color: "red" }}>{formik.errors.email}</p>
                    )}
                  </div>
                  <div className="user-box">
                    <input
                      type="text"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />
                    <label className="fs-5">Message</label>
                    {formik.errors.message && (
                      <p style={{ color: "red" }}>{formik.errors.message}</p>
                    )}
                  </div>
                  <a href="#"  onClick={handleSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
