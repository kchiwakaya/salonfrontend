import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Handle login submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <Field name="username" type="text" placeholder="Username" className="form-control" />
                      <ErrorMessage name="username" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                      <Field name="password" type="password" placeholder="Password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <p className="mt-3 text-center">
                Not registered? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
