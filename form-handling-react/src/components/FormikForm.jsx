import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Registration Form (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Submitted with Formik:", values);
          setSubmitting(false);
          resetForm();
          alert("Form submitted successfully with Formik!");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block">Username:</label>
              <Field
                type="text"
                name="username"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="block">Email:</label>
              <Field
                type="email"
                name="email"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="block">Password:</label>
              <Field
                type="password"
                name="password"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
