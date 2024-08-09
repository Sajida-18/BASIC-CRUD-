import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Student() { 
  const [student,setStudent] =useState([])
  const navigate = useNavigate();


   useEffect(()=>{
      axios.get('http://localhost:8081/')
      .then (res => setStudent(res.data))
      .catch(err => console.log(err));
 }, [])
  const handleAdd =()=>{
    navigate('/CreateStudent')
  }
  
  const hnadleDelete= async (id) => {
    try{
      await axios.delete('http://localhost:8081/DeleteStudent/'+id)
      window.location.reload()
    }catch(err){
      console.log(err);
    }
    
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
        <button className='btn btn-success' onClick={handleAdd}>Add+</button>
        <table className='table'>
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
             {
              student.map((data,i)=> (
                <tr key={i}>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                  {/* <button 
                      className='btn btn-primary'
                      onClick={handleUpdate}>Update</button> */}
                    <Link to={`Update/${data.ID}`}className='btn btn-primary '>Update</Link>  
                    <button className='btn btn-danger ms-2' onClick={e => hnadleDelete(data.ID)}>Delete</button>
                  </td>
                </tr>
              ))
             }   
          </tbody>
             
        </table>

      </div>
      
    </div>
  )
}
