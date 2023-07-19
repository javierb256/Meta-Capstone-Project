import * as Yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import GoBack from "./GoBack";
import { useNavigate } from "react-router-dom";



function ContactInformation() {
  const [occasion, setOccasion] = useState(false);
  const toggleOccasion = () => {
    setOccasion(!occasion);
  };
  const navigate = useNavigate();


  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  useEffect(() => {
    //moves view to top of the page on new load
    window.scroll(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or greater")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().max(500, "Must be 500 characters or less"),
      phone: Yup.string()
        .required("Required")
        .matches(phoneRegExp, "Invalid phone number")
        .min(10, "Too short")
        .max(10, "Too long"),
    }),
    onSubmit: values => {
      navigate('/contact-information');
    },
  });

  return (
    <>
      <GoBack page={'/booking'}/>
      <div className="contact-container container">
        <h2>Contact Information</h2>
        <hr></hr>

        <form onSubmit={formik.handleSubmit}>
          <div className="contact-inputs">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" {...formik.getFieldProps("phone")} />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}

            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <label htmlFor="occasion">Select an occasion</label>
          <div className="select">
            <select
              id="occasion"
              name="occasion"
              onClick={toggleOccasion}
              className={occasion ? "active" : ""}
            >
              <option value="">Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="retirement">Retirement</option>
              <option value="graduation">Graduation</option>
            </select>
            <span className={occasion ? "arrow active" : "arrow"}></span>
          </div>

          <h4>Additional Comments</h4>
          <textarea
            id="comment"
            {...formik.getFieldProps("comment")}
          ></textarea>
          {formik.touched.comment && formik.errors.comment ? (
            <div>{formik.errors.comment}</div>
          ) : null}
          <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
            Payment Information
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactInformation;
