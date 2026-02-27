import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { registerSchema } from '../validation/RegisterSchema';
import './RegisterForm.css';

function RegisterForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    }
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted successfully!', data);
    setSubmitSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
    
    // Reset form
    reset();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create an Account</h2>
      <p className="form-subtitle">Join us today! Fill in your details below.</p>

      {submitSuccess && (
        <div className="success-message">
          ✅ Registration Successful!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className={errors.fullName ? 'error' : ''}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="error-message">{errors.fullName.message}</p>
          )}
        </div>

        
        <div className="form-group">
          <label htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={errors.email ? 'error' : ''}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={errors.password ? 'error' : ''}
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
          <small className="hint">
            Minimum 8 characters with at least 1 number
          </small>
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password <span className="required">*</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className={errors.confirmPassword ? 'error' : ''}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              {...register('terms')}
            />
            <span>
              I accept the <a href="#" className="terms-link">Terms and Conditions</a> <span className="required">*</span>
            </span>
          </label>
          {errors.terms && (
            <p className="error-message">{errors.terms.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Account...' : 'Register'}
        </button>
      </form>

      <p className="login-link">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </div>
  );
}

export default RegisterForm;