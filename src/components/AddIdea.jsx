// src/AddIdea.js
import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const AddIdea = () => {
  const [ideaText, setIdeaText] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ideaText.trim() === '') {
      setMessage('Please enter an idea.');
      return;
    }

    setLoading(true);
    setMessage('');

    // Insert the idea into the database
    const { data, error } = await supabase
      .from('ideas')
      .insert([{ idea_text: ideaText }]);

    setLoading(false);

    if (error) {
      console.error('Error adding idea:', error.message);
      setMessage('Error submitting your idea. Please try again.');
    } else {
      setMessage('Idea submitted successfully!');
      setIdeaText(''); // Clear the input field after submission
    }
  };

  return (
    <div>
      <h2>Submit Your Eco-Friendly Idea</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your idea here..."
          value={ideaText}
          onChange={(e) => setIdeaText(e.target.value)}
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Idea'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddIdea;
