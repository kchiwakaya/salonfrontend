import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Import axios

const UserProfileForm = () => {
  const [showCredentials, setShowCredentials] = useState(false);

  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
    salon_name: '',
    mirror_number: '',
    user_type: '',
    city: '',
    profile_pic_url: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    user_type: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Handle form submission
      const response = await axios.post('http://localhost:8000/users/', values);
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, isValid }) => {
                  console.log('Form Values:', values); // Log form values
                  console.log('Is Valid:', isValid); // Log validity
                  return (
                    <Form>
                      {!showCredentials && (
                        <>
                        <div className="mb-3">
                            <Field name="name" type="text" className="form-control" placeholder="Name" />
                          </div>
                          <div className="mb-3">
                            <Field name="address" type="text" className="form-control" placeholder="Address" />
                          </div>
                          <div className="mb-3">
                            <Field name="phone_number" type="text" className="form-control" placeholder="Phone Number" />
                          </div>
                          <div className="mb-3">
                            <Field name="salon_name" type="text" className="form-control" placeholder="Salon Name" />
                          </div>
                          <div className="mb-3">
                            <Field name="mirror_number" type="text" className="form-control" placeholder="Mirror Number" />
                          </div>
                          <div className="mb-3">
                            <Field as="select" name="user_type" className="form-select">
                              <option value="">Select User Type</option>
                              <option value="clt">Customer</option>
                              <option value="hd">Hairdresser</option>
                              <option value="bb">Barber</option>
                              <option value="stl">Nail Stylist</option>
                            </Field>
                            <ErrorMessage name="user_type" component="div" className="text-danger" />
                          </div>
                          <div className="mb-3">
                            <Field name="city" type="text" className="form-control" placeholder="City" />
                            <ErrorMessage name="city" component="div" className="text-danger" />
                          </div>
                          <div className="mb-3">
                            <Field name="profile_pic_url" type="url" className="form-control" placeholder="Profile Picture URL" />
                          </div>
                          <button type="button" className="btn btn-primary w-100" onClick={() => {
                            if (isValid) {
                              setShowCredentials(true);
                            }
                          }} disabled={!isValid}>
                            Next
                          </button>
                        </>
                      )}

                      {showCredentials && (
                        <>
                          <div className="mb-3">
                            <Field name="username" type="text" className="form-control" placeholder="Username" />
                            <ErrorMessage name="username" component="div" className="text-danger" />
                          </div>
                          <div className="mb-3">
                            <Field name="email" type="email" className="form-control" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                          </div>
                          <div className="mb-3">
                            <Field name="password" type="password" className="form-control" placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                          </div>
                          <button type="submit" className="btn btn-primary w-100">Register</button>
                        </>
                      )}
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
