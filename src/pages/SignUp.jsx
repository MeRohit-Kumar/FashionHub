import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email))
      newErrors.email = 'Only @gmail.com emails are allowed';
    if (form.password.length < 8)
      newErrors.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success('Signup successful!');
      setForm({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({});

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } else {
      toast.error('Please fix the errors above.');
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/abstract-technological-hexagonal-background-digital-technology-network-background-illustration-futuristic-point-wave_1715-4816.jpg?w=1060')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(10, 151, 179, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '25px',
          width: '100%',
          maxWidth: '380px',
          color: '#fff',
        }}
      >
        <h3 className="text-center mb-4">Sign Up</h3>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Create password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            isInvalid={!!errors.password}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '38px',
              cursor: 'pointer',
              color: 'grey',
              zIndex: 10,
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Re-enter password"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 mt-2">
          Sign Up
        </Button>

        <div className="mt-3 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-info" style={{ textDecoration: 'underline' }}>
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
