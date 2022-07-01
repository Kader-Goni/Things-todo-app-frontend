import React from "react";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="border-0 border-t-2 bg-sky-500 text-white mt-12">
      <div className="py-20 px-8 max-w-xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex justify-center items-center">
            <h1 className="text-lg font-bold">
              All Right Reserved by Things ToDo &copy; {year}{" "}
            </h1>
          </div>
          <div className="flex justify-center items-center ">
            <div className="text-center lg:text-left mt-5 lg:mt-0">
              <h1 className="text-lg font-bold">Contact Us</h1>
              <ul className="text-black-400 text-lg">
                <li className="flex text-xl gap-2">
                  <a href="mailto:kadergoni35@gmail.com" target="_blank" rel="noreferrer">
                    <AiFillMail />
                  </a>

                  <a href="https://www.facebook.com/kader.goni35" target="_blank" rel="noreferrer">
                    <AiOutlineFacebook />
                  </a>

                  <a href="https://www.twitter.com/kader_goni" target="_blank" rel="noreferrer">
                    <AiFillTwitterSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
