import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            repudiandae ratione quod ipsa molestiae accusamus eaque, quidem
            harum vel tempora consectetur ex doloremque et corporis? Dolorem
            exercitationem nostrum commodi. Sed?
          </p>
        </div>
        <div>
          <p className="text-[15px] font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-[15px] font-medium mb-5">GET IN CONTACT</p>
          <ul>
            <li>+1-800-678-5670</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          This is not a official website nor company and uses resources from
          GreatStack. This is meant to show skill of Thomas Yancey in coding a
          ecommerce website.
        </p>
      </div>
    </div>
  );
};

export default Footer;
