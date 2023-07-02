import React from 'react';
import './articles.css';
//import { articles } from '..';

const Articles = ({ imgUrl, date, title }) => (
  <div className="gpt3__blog-container_articles">
    <div className="gpt3__blog-container_articles-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_articles-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Articles;