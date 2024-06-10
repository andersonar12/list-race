"use client";
import useFetchData from "../../hooks/useFetchData";
import { Blogs } from "../../interfaces/blogs";
import { Spinner } from "../Spinner";

export const Blog = () => {
  const { data: blogs, loading, error } = useFetchData<Blogs>("/data/blogs.json");

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* <!--blog start --> */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>news and articles</h2>
            <p>Always upto date with our latest News and Articles </p>
          </div>
          {/* <!--/.section-header--> */}
          <div className="blog-content">
            <div className="row">
              {loading ? (
                <Spinner pixel={100} />
              ) : (
                blogs.map((blog, index) => (
                  <div key={index} className="col-md-4 col-sm-6">
                    <div className="single-blog-item">
                      <div className="single-blog-item-img">
                        <img src={blog.imgSrc} alt="blog image" />
                      </div>
                      <div className="single-blog-item-txt">
                        <h2>
                          <a href="#">{blog.title}</a>
                        </h2>
                        <h4>
                          posted <span>by</span> <a href="#">{blog.author}</a> {blog.date}
                        </h4>
                        <p>{blog.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {/* <div className="col-md-4 col-sm-6">
                <div className="single-blog-item">
                  <div className="single-blog-item-img">
                    <img src="assets/images/blog/b1.jpg" alt="blog image" />
                  </div>
                  <div className="single-blog-item-txt">
                    <h2>
                      <a href="#">How to find your Desired Place more quickly</a>
                    </h2>
                    <h4>
                      posted <span>by</span> <a href="#">admin</a> march 2018
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod
                      tempore incididunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/.blog--> */}
      {/* <!--blog end --> */}
    </>
  );
};
