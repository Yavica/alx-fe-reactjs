// src/components/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
  };

  return (
    <div className="p-4 border rounded-md mt-4">
      <h2 className="text-lg font-bold mb-2">Formik Form with Yup</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="mb-2">
              <label className="block mb-1">Username:</label>
              <Field type="text" name="username" className="border px-2 py-1 w-full" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-2">
              <label className="block mb-1">Email:</label>
              <Field type="email" name="email" className="border px-2 py-1 w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-2">
              <label className="block mb-1">Password:</label>
              <Field type="password" name="password" className="border px-2 py-1 w-full" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
 