import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "./bg-1.jpg"

function DataDisplay() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(' http://127.0.0.1:8000/styles/');
          setData(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className='container'> 
      <div className='row'> 
        {data.length === 0 ? (
          <div className="text-center"><h3>No data found</h3></div>
        ) : (
          data.map((item) => (
            <div className="col-md-3 p-3" key={item.id}>
              <div className='card p-3' style={{width: 300}}>
                <img className='card-img-top' src={logo} alt='Card image cap'/>
                <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <p className='card-text'>{item.description}</p>
                  <h6 className='card-footer'>{item.price}</h6>
                  <Link to="/book-appointment" className='btn btn-primary'>Book Now</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
    );
  }
  
  export default DataDisplay;