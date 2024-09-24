import React, { useState } from 'react';
import axios from 'axios';

const StyleForm = () => {
  const [styleName, setStyleName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/styles/', {
        name: styleName,
        description: description,
        price: parseFloat(price)
      });
      console.log('Style created:', response.data);
      alert('Style submitted successfully!');
      setStyleName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error('Error creating style:', error);
      alert('Error submitting style. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6">
        <h2 className="text-center mb-4">Style</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="styleName" className="form-label">Style Name:</label>
            <input
              type="text"
              id="styleName"
              className="form-control"
              value={styleName}
              onChange={(e) => setStyleName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="number"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              step="0.01"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit Style</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StyleForm;
