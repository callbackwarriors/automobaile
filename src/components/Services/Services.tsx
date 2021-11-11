/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className=" section-padding">
      <div className="container mx-auto mb-6 text-center">
        {/* <Title
          subtitle="What We Do"
          title="Services We Provide"
          description=""
        /> */}
        <p>What We Do</p>
        <h2 className="text-4xl font-bold">Services We Provide</h2>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link to="/">
              <a>
                <div className="p-6 bg-gray-100 rounded-lg">
                  <div>
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src="https://i.ibb.co/8833h2W/64620.jpg"
                      alt=""
                    />
                  </div>

                  <h4 className="mb-2 text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    distinctio suscipit perspiciatis tempore ipsa amet quos
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link to="/">
              <a>
                <div className="p-6 bg-gray-100 rounded-lg">
                  <div>
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src="https://i.ibb.co/Pc7B32c/43025.jpg"
                      alt=""
                    />
                  </div>

                  <h4 className="mb-2 text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    distinctio suscipit perspiciatis tempore ipsa amet quos
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link to="/">
              <a>
                <div className="p-6 bg-gray-100 rounded-lg">
                  <div>
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src="https://i.ibb.co/8833h2W/64620.jpg"
                      alt=""
                    />
                  </div>

                  <h4 className="mb-2 text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    distinctio suscipit perspiciatis tempore ipsa amet quos
                  </p>
                </div>
              </a>
            </Link>
          </div>
          {/* {data?.slice(0, 3).map((course) => (
            <LatestCourse key={course.title} course={course}></LatestCourse>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Services;
