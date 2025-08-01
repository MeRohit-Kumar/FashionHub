import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validateForm = () => {
    const newErrors = {};

    if (!/^[admin]+@gmail\.com$/.test(form.email)) {
      newErrors.email = 'Only admin@gmail.com are allowed';
    }

    if (form.password.length <8) {
      newErrors.password = 'Password must be exactly 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    if (form.email === 'admin@gmail.com' && form.password === '12345678') {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success('Login successful!');
      setForm({ email: '', password: '' });
      setErrors({});

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toast.error('Invalid email or password');
    }
  }
};

  return (
    <div
      style={{backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-technological-hexagonal-background-digital-technology-network-background-illustration-futuristic-point-wave_1715-4816.jpg?w=1060')",backgroundSize: 'cover',backgroundPosition: 'center',height: '100vh',display: 'flex',justifyContent: 'center',alignItems: 'center',}} >
      <Form
        onSubmit={handleSubmit}
        style={{background: 'rgba(7, 151, 154, 0.1)',backdropFilter: 'blur(10px)',WebkitBackdropFilter: 'blur(20px)',padding: '30px',borderRadius: '25px',width: '100%',maxWidth: '380px',color: '#fff',}} >
        <h3 className="text-center mb-4" style={{ color: '#fff' }}>Login</h3>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label style={{ color: '#fff' }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter @gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword" style={{ position: 'relative' }}>
          <Form.Label style={{ color: '#fff' }}>Password</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            isInvalid={!!errors.password}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{position: 'absolute',right: '10px',top: '38px',cursor: 'pointer',color: 'grey',zIndex: 10 }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-2">
          Login
        </Button>
        <div className="text-center mt-3" style={{ color: '#fff' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#0d6efd', textDecoration: 'underline' }}>
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
