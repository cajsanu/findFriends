import { useState } from 'react';
import axios from 'axios';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        console.log('Passwords do not match');
        return;
      }
    try {
      const response = await axios.post('http://localhost:5053/register', {
        email,
        password
      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

