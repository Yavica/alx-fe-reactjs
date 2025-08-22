import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Task 0: Form Handling
      </h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
