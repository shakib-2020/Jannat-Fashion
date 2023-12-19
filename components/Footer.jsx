import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-[#7e1f86ff] opacity-70 text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          {/* <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div> */}
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            {/* <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div> */}
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                Quick Links
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Home
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                About
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61552690433016",
                "_blank"
              )
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() => window.open("https://wa.me/+351920538551", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaWhatsapp size={20} />
          </div>
          <div
            onClick={() => window.open("tel:+351920538551", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaPhone size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023jannat-fashion.vercel.app. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
