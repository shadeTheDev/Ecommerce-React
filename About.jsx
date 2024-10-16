import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-[50px] text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            cupiditate minus aliquam? Dignissimos, in? Laborum, porro eius minus
            ad quisquam quis eaque? In, laudantium tenetur quos sequi adipisci
            facere velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic
            voluptatem numquam quam at mollitia natus asperiores accusamus quas
            soluta ullam debitis fugiat, non, atque doloribus quod cum fugit
            repudiandae!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-[40px] py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam
            assumenda maxime voluptas veritatis veniam explicabo aliquam, beatae
            ipsa, praesentium ullam magnam atque mollitia consequatur!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facere blanditiis non a reiciendis qui aspernatur voluptate ipsam
            provident, obcaecati, aliquam facilis perferendis architecto ex.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expectional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            nobis alias, debitis nemo, blanditiis aspernatur excepturi nihil est
            corporis voluptatem sint quis neque laborum ipsa!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
