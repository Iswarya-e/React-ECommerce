import { useFormik } from "formik";
import "../style.css";

interface SignUpForm {
    firstName: string;
    lastName: string;
    email: string
}

const validate = (values: SignUpForm) => {
    let errors: SignUpForm = {
        firstName: '',
        lastName: '',
        email: ''
    };
    if(!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if(!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email address';
    }

    return errors;
}

export const SignupForm = () => {
   
   const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: ''
    },
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    }
   });

   
 
  return (
    <form onSubmit={formik.handleSubmit}>
        
    <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div> {formik.errors.firstName}</div>: null}
      <br/>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div> {formik.errors.lastName}</div>: null}

      <br/>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
     {formik.errors.email ? <div> {formik.errors.email}</div>: null}

      <button type="submit">Submit</button>
    </form>
  );
};