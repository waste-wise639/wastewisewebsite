import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./StepAWasteVendorCTA.module.css";
import dump from "../../../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";
import success_image from "../../../../assets/images/success.png";

const stepOneSchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  companyEmail: Yup.string()
    .email("Invalid email")
    .required("Company email is required"),
  stateOfOperation: Yup.string().required("State of operation is required"),
  officeAddress: Yup.string().required("Office address is required"),
  companyRegNumber: Yup.string().required(
    "Company registration number is required"
  ),
  numberOfTrucks: Yup.number()
    .typeError("Must be a number")
    .positive()
    .required("Number of trucks is required"),
  companyPhoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Digits only")
    .min(10)
    .required("Phone number is required"),
  numberOfDrivers: Yup.number()
    .typeError("Must be a number")
    .positive()
    .required("Number of drivers is required"),
});

const stepTwoSchema = Yup.object({
  registrantName: Yup.string().required("Registrant name is required"),
  registrantEmail: Yup.string()
    .email("Invalid email")
    .required("Registrant email is required"),
  registrantPhone: Yup.string()
    .matches(/^[0-9]+$/, "Digits only")
    .min(10)
    .required("Phone number is required"),
  registrantPosition: Yup.string().required("Registrant position is required"),
});

const StepAWasteVendorCTA: React.FC = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const stepOneInitialValues = {
    companyName: "",
    companyEmail: "",
    stateOfOperation: "",
    officeAddress: "",
    companyRegNumber: "",
    numberOfTrucks: "",
    companyPhoneNumber: "",
    numberOfDrivers: "",
  };

  const stepTwoInitialValues = {
    registrantName: "",
    registrantEmail: "",
    registrantPhone: "",
    registrantPosition: "",
  };

  const handleStepOneSubmit = () => {
    setStep(2);
  };

  const handleStepTwoSubmit = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.wasteVendorContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.leftPanelContent}>
          <h2 className={styles.leftPanelTitle}>
            Vendors: Be the First to Join WasteWise
          </h2>
          <p className={styles.leftPanelDescription}>
            We're opening our platform soon. Sign up now to get priority access,
            training, and early-bird benefits.
          </p>
          <div className={styles.illustrationContainer}>
            <img
              src={dump}
              alt="Man holding a trash bag"
              className={styles.illustrationImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        {step === 1 && (
          <>
            <div className={styles.formHeader}>
              <h1>
                For Waste <span className={styles.accentText}>Vendors</span> -
                Step 1
              </h1>
              <p className={styles.formSubtitle}>Submit Company's Details</p>
            </div>
            <Formik
              initialValues={stepOneInitialValues}
              validationSchema={stepOneSchema}
              onSubmit={handleStepOneSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.vendorForm}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="companyName">Company's Name</label>
                    <Field
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Enter Company name"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="companyEmail">
                      Company's Email address
                    </label>
                    <Field
                      type="email"
                      id="companyEmail"
                      name="companyEmail"
                      placeholder="Enter email address"
                    />
                    <ErrorMessage
                      name="companyEmail"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="stateOfOperation">Operational Zone</label>
                    <Field
                      as="select"
                      id="stateOfOperation"
                      name="stateOfOperation"
                    >
                      <option value="">Select State of Operation</option>
                      <option value="rivers">Rivers State</option>
                      <option value="taraba">Taraba State</option>
                      <option value="sokoto">Sokoto State</option>
                      <option value="abuja">FCT - Abuja</option>
                    </Field>
                    <ErrorMessage
                      name="stateOfOperation"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="officeAddress">Office Address</label>
                    <Field
                      type="text"
                      id="officeAddress"
                      name="officeAddress"
                      placeholder="Enter Office Address"
                    />
                    <ErrorMessage
                      name="officeAddress"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="companyRegNumber">
                      Company Registration Number
                    </label>
                    <Field
                      type="text"
                      id="companyRegNumber"
                      name="companyRegNumber"
                      placeholder="Enter Company Reg. Number"
                    />
                    <ErrorMessage
                      name="companyRegNumber"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="numberOfTrucks">Number of trucks</label>
                    <Field
                      type="number"
                      id="numberOfTrucks"
                      name="numberOfTrucks"
                      placeholder="Enter number of trucks"
                    />
                    <ErrorMessage
                      name="numberOfTrucks"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="companyPhoneNumber">
                      Company's Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="companyPhoneNumber"
                      name="companyPhoneNumber"
                      placeholder="Enter Phone Number"
                    />
                    <ErrorMessage
                      name="companyPhoneNumber"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="numberOfDrivers">Number of Drivers</label>
                    <Field
                      type="number"
                      id="numberOfDrivers"
                      name="numberOfDrivers"
                      placeholder="Enter Drivers Count"
                    />
                    <ErrorMessage
                      name="numberOfDrivers"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.nextButton}
                    disabled={isSubmitting}
                  >
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </>
        )}

        {step === 2 && (
          <>
            <div className={styles.formHeader}>
              <h1>
                For Waste <span className={styles.accentText}>Vendors</span> -
                Step 2
              </h1>
              <p className={styles.formSubtitle}>
                Submit Company’s Registrant details
              </p>
            </div>
            <Formik
              initialValues={stepTwoInitialValues}
              validationSchema={stepTwoSchema}
              onSubmit={handleStepTwoSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.vendorForm}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="registrantName">Registrant Name</label>
                    <Field
                      type="text"
                      id="registrantName"
                      name="registrantName"
                      placeholder="Enter Registrant name"
                    />
                    <ErrorMessage
                      name="registrantName"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="registrantEmail">
                      Registrant Email address
                    </label>
                    <Field
                      type="email"
                      id="registrantEmail"
                      name="registrantEmail"
                      placeholder="Enter Registrant Email address"
                    />
                    <ErrorMessage
                      name="registrantEmail"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="registrantPhone">
                      Registrant Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="registrantPhone"
                      name="registrantPhone"
                      placeholder="Enter Phone Number"
                    />
                    <ErrorMessage
                      name="registrantPhone"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="registrantPosition">
                      Registrant Position in the Company
                    </label>
                    <Field
                      type="text"
                      id="registrantPosition"
                      name="registrantPosition"
                      placeholder="Enter Registrant Position in the Company"
                    />
                    <ErrorMessage
                      name="registrantPosition"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.nextButton}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <img
              src={success_image}
              alt="success_image"
              className={styles.success_image}
            />
            <h2>You’re officially on the waitlist! ♻️</h2>
            <p>
              You’re in! 🚀 Thanks for signing up as a Waste Wise vendor. We’ll
              connect you with new opportunities soon.
            </p>
            <button
              onClick={() => navigate("/")}
              className={styles.modalButton}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepAWasteVendorCTA;
