import { logo } from "../assets"
import { footerLinks } from "../constant/ContentConstants";

function Footer() {
  return (
    <section className="py-[40px] mt-10 h-auto justify-center mx-auto lg:w-[1296px]">
        <h1 className="font-secondary font-semibold text-center text-[#1B1C20] text-[32px] md:text-[44px] md:w-[700px]  leading-[40px] md:leading-[50px] mx-auto flex-shrink-0">Ready to grow your business? Start with Apex, become faster every second</h1>
        <div className="mt-[40px] flex justify-center items-center">
          <button className="w-[189px] h-[56px] rounded-lg bg-[#fb8e0b] text-white font-primary font-medium">
            Start Chatting Now
          </button>
        </div>

        <div className="flex flex-col md:flex-row mt-24 justify-between items-center gap-6 px-6">
          {/* Logo  */}
            <div className="flex">
              <img src={logo} alt="logo" className="w-full h-full flex-shrink-0" />
            </div>
            {/* Site Navigations  */}
            <div className="flex">
              <ul className="flex flex-wrap gap-5 md:gap-16">
                  {footerLinks.map((Link) => (
                    <li
                      key={Link.id}
                      className={`font-primary font-medium leading-6 text-[#1b1c20] hover:text-primary hover:font-semibold`}
                    >
                      <a href="#!">{Link.title}</a>
                    </li>
                  ))}
              </ul>

            </div>
            {/* SocialIcons  */}
            <div className="flex">
              <ul className="flex flex-wrap gap-6">
                  <li>
                    <a href="#!"><i className="fa-brands fa-twitter text-[#FD6003]"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-brands fa-facebook-f text-[#FD6003]"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-brands fa-instagram text-[#FD6003]"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-brands fa-github text-[#FD6003]"></i></a>
                  </li>
              </ul>
            </div>
           
        </div>
          
          <hr className="mt-10" />

          <div className="flex flex-col md:flex-row mt-5 justify-between items-center gap-6 px-10">
            <div className="flex">
              <p className="font-primary text-[15px] text-[#797B89] leading-[26px]">© Copyright 2022, All Rights Reserved</p>
            </div>
            <div className="flex">
                  <ul className="flex flex-wrap gap-3 md:gap-8">
                    <li><a href="#!" className="font-primary text-[14px] md:text-[15px] text-[#797B89] leading-[26px]">Privacy Policy</a></li>
                    <li><a href="#!" className="font-primary text-[14px] md:text-[15px] text-[#797B89] leading-[26px]">Terms & Conditions</a></li>
                  </ul>
            </div>
          </div>
    </section>
  )
}

export default Footer
