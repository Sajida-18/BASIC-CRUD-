


import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {id} =useParams();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+id, { name, email })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.error('There was an error creating the student:', err);
      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2>Update Student</h2>
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
          <button className='btn btn-success mt-2'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;


