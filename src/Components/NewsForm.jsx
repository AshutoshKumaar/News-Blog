import React, { useState } from "react";
import JoditEditor from 'jodit-react';
import axios from "axios";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState('');
  
  const handleSubmit = async (event) => {
  event.preventDefault();
  // Remove HTML tags from content
  const cleanedContent = content.replace(/<\/?[^>]+(>|$)/g, "");

  const newsData = { title, shortDescription, category, content: cleanedContent };
  try {
    const response = await axios.post("http://localhost:3333/news", newsData);
    const newsId = response.data.id;
    // Generate image using AI (we'll use a placeholder for now)
    const imageUrl = `https://placehold.it/300x200?text=${title}`;
    // Update news data with image URL
    await axios.patch(`http://localhost:3333/news/${newsId}`, { imageUrl });
    alert("News posted successfully!");

    // Clear input fields after successful submission
    setTitle("");
    setShortDescription("");
    setCategory("");
    setContent("");
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="w-full md:w-[1000px] mx-auto">
      <h3 className="text-center p-5 text-3xl font-[700]">News Blog Website</h3>
      <form className="p-2" onSubmit={handleSubmit}>
        <label className="text-xl my-3">
          Title:
          <input
            type="text"
            className="bg-transparent border-[1px] border-slate-700 outline-none my-3 p-2 ml-0 md:ml-2 rounded-lg text-sm w-full"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label  className="text-xl my-3">
          Short Description:
          <textarea
            type="text"
            className="bg-transparent border-[1px] border-slate-700 outline-none my-3 p-2 ml-0 md:ml-2 rounded-lg text-sm w-full"
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
          />
        </label>
        <br />
        <label className="text-xl my-3">
          Category:
          <input
            type="text"
            className="bg-transparent border-[1px] border-slate-700 outline-none my-3 p-2 ml-0 md:ml-2 rounded-lg text-sm w-full"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <br />
        <JoditEditor
          value={content}
          onChange={newContent => setContent(newContent)}
        />
        <br />
        <button type="submit" className="p-3 bg-yellow-400 text-sm mb-2 rounded-lg hover:text-slate-50 hover:bg-slate-700 duration-150 cursor-pointer">Post News</button>
      </form>
    </div>
  );
};

export default NewsForm;
