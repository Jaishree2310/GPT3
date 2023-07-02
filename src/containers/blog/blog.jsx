import React from 'react';
import Articles from '../../components/articles/Articles';
import { blog01, blog02, blog03, blog04, blog05 } from '../../assets/';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Articles imgUrl={blog01} date="July 02, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Articles imgUrl={blog02} date="July 02, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Articles imgUrl={blog03} date="July 02, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Articles imgUrl={blog04} date="July 02, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Articles imgUrl={blog05} date="July 02, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;