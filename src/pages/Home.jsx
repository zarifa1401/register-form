import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px 20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>
        Welcome to Form Validation Demo
      </h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        This project demonstrates form validation using React Hook Form and Yup.
        Check out the registration form to see it in action!
      </p>
      <Link 
        to="/register"
        style={{
          display: 'inline-block',
          padding: '12px 30px',
          backgroundColor: '#2196f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Go to Registration Form →
      </Link>
    </div>
  );
}

export default Home;