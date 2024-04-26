import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridLoader from 'react-spinners/GridLoader'

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    axios.get('http://localhost:3333/news')
     .then(response => {
        setNews(response.data);
        setLoading(false); // Set loading to false when data is received
      })
     .catch(error => {
        console.error(error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div>
      <p className='text-3xl font-[800] text-center p-2 mt-3'>Our Blog</p>
      {loading ? ( // Show loading indicator if loading is true
       <div className='mx-auto w-full md:w-[1000px] text-center p-3'>
          <GridLoader />
       </div>
      ) : (
       <div className='my-5 w-full md:w-[1000px] mx-auto flex justify-center md:justify-between'>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {news.map((newsItem) => (
            <div className='w-[300px] border-[1px] border-slate-400 rounded-lg' key={newsItem.id}>
              <div className='rounded-t-lg'>
                  <img src={newsItem.imageUrl} alt={newsItem.title} className='rounded-t-lg' />
              </div>
              <div className='w-full'>
                <h3 className='text-2xl p-1 text-slate-700 font-[800]'>{newsItem.title}</h3>
                <p className='text-[18px] p-1 text-slate-700 font-[600]'>{newsItem.shortDescription}</p>
                <p className='text-[18px] font-[600] text-red-800 p-1'>Category : <span className='text-[16px] font-[300] text-slate-800'>{newsItem.category}</span></p>
                <p className='text-slate-700 text-sm line-clamp-4 p-1'>{newsItem.content}</p>
              </div>
            </div>
          ))}
        </div>
       </div>
      )}
    </div>
  );
};

export default NewsList;
