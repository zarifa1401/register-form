import * as yup from 'yup';

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password must contain at least 1 number')
    .matches(/[a-zA-Z]/, 'Password must contain at least 1 letter'),
  
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});