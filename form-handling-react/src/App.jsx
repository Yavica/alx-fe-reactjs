import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>User Registration</h1>

      <h2>Controlled Components Form</h2>
      <RegistrationForm />

      <hr style={{ margin: '2rem 0' }} />

      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  )
}

export default App
