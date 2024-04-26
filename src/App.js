import React from 'react';
import NewsForm from './Components/NewsForm';
import NewsList from './Components/NewsList';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <NewsForm />
      <hr className='border-slate-800 border-2' />
      <NewsList />
    </div>
  );
};

export default App;