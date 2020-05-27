import React from 'react'
import useFormValidationfrom from './Validation/useFormValidation'
import validateAuth from './Validation/validateAuth'

const  INITIAL_STATE = {
  email:"",
  password:""
}

const App = () => {

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmitting } = useFormValidationfrom(INITIAL_STATE , validateAuth)
 
 
  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          className = {errors.email && 'error-input'}
          value={values.email}
          autoComplete="off"
          placeholder="Your email address"
        />
         {errors.email && <p className ="error-text" >{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="password"
          className = {errors.password && 'error-input'}
          value={values.password}
          placeholder="Choose a safe password"
        />
         {errors.password && <p className ="error-text" >{errors.password}</p>}
        <div>
          <button disabled={isSubmitting} type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
