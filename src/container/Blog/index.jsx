import React from "react";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-article-container">
        <div className="gpt3__blog-article-groupA">
          <Article
            img={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>

        <div className="gpt3__blog-article-groupB">
          <Article
            img={blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
