import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { setToken } from '../store/slices/authSlice';
import { AppDispatch } from '../store';
import { loginSchema } from '../validation/authSchema';
import Header from "../components/Header.tsx";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const mutation = useMutation(({ email, password }: { email: string, password: string }) => login(email, password), {
    onSuccess: (data) => {
      dispatch(setToken(data.access_token));
      navigate('/invoices');
    },
    onError: (error) => {
      console.error('Login failed:', error);
    }
  });
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      loginSchema.parse({ email, password });
      mutation.mutate({ email, password });
    } catch (error) {
      console.error('Validation failed:', error.errors);
    }
  };
  
  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {mutation.isError && <p>Login failed. Please try again.</p>}
    </div>
  );
};

export default LoginPage;
