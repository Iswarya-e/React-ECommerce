import { useFormik } from "formik";
import "../style.css";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { APIProductModel } from "../redux/productSlice";
interface SignUpForm {
  productName: '',
  productPrice: '',
  productDetails: '',
  productImage: ''
}

// const validate = (values: SignUpForm) => {
//     let errors: SignUpForm = {
//       productName: '',
//       productPrice: '',
//       productDetails: '',
//       productImage: ''
//     };
//     if(!values.firstName) {
//         errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if(!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.firstName.length > 15) {
//         errors.lastName = 'Must be 15 characters or less';
//     }

//     if(!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid Email address';
//     }

//     return errors;
// }

export const SignupForm = () => {
   const dispatch = useAppDispatch();
   const state = useAppSelector(store=> store.product);
   const formik = useFormik({
    initialValues: {
        productName: '',
        productPrice: 0,
        productDetails: '',
        productImage: ''
    },
    onSubmit: async values => {
      try {
        var newProduct: APIProductModel = {
          productId: state.products.length> 0 ? state.products[state.products.length -1]?.id+ 1: 1,
          productName: values.productName,
          productDetails: values.productDetails,
          productImage: values.productImage,
          productPrice: values.productPrice
        }
        console.log('Sending POST request...');
        await axios.post('http://localhost:5058/api/Products', newProduct, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Product added successfully');
      } catch (error) {
          console.error('Error adding product', error);
      }
    }
  });

   
 
  return (<>
   <form onSubmit={formik.handleSubmit}>
        
        <label htmlFor="productName">Product Name</label>
          <input
            id="productName"
            name="productName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productName}
          />
          <br/>
          <label htmlFor="productDetails">Product Details</label>
          <input
            id="productDetails"
            name="productDetails"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productDetails}
          />
    
          <br/>
          <label htmlFor="productPrice">Product Price</label>
          <input
            id="productPrice"
            name="productPrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.productPrice}
          />
          <br/>
          <label htmlFor="productImage">Product Image</label>
          <input
            id="productImage"
            name="productImage"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productImage}
          />
          <button type="submit">Submit</button>
        </form>
  </>
   
  );
};