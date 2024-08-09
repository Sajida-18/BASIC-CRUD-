


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/create', { name, email })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.error('There was an error creating the student:', err);
      });
  };

  return (
    <div 
      className='d-flex vh-100 justify-content-center align-items-center'
      style={{
        backgroundImage: 'url("https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDEzLTA4MS1rcHhrOWs1Zi5qcGc.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input
              type='text'
              placeholder='Enter name'
              className='form-control'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input
              type='text'
              placeholder='Enter email'
              className='form-control'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className='btn btn-success mt-2'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;


