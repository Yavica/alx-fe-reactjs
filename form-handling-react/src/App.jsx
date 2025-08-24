// src/App.jsx
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Forms in React</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
