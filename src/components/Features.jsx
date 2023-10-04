import { clock_icon, video_icon, wifi_icon } from "../assets"


function Features() {
  return (
    <section className="justify-center mx-auto lg:w-[1296px] pt-[80px] h-auto">
        <h1 className="font-secondary text-[32px] md:text-[36px] leading-[40px] md:leading-[56px] text-center text-[#1B1C20] font-semibold">Features for a better experience</h1>
        <div className="flex flex-col items-start sm:flex-row gap-[46px] justify-center item-center mt-[50px]">
              {/* <!-- Column 1 --> */}
              <div className="md:flex items-center justify-center gap-[30px] w-full md:w-[416px] lg:flex-shrink-0">
                <div  className="flex items-center justify-center md:justify-start md:items-start">
                    <img src={video_icon} alt="Icon 1" className="w-[60px] h-auto" />
                </div>              
                <div className="flex flex-col justify-center items-center md:items-start  gap-[10px] md:gap-[4px] mx-auto md:mx-0 w-[277px]">
                    <h2 className="mt-3 text-center md:text-left text-[21px] leading-[33px] text-[#1B1C20] font-secondary font-semibold">Video messaging</h2>
                    <p className="text-center md:text-left font-primary text-[16px] leading-[24px] text-[#383A47]">This software is very easy for you to manage. You can use it as you wish.</p>
                </div>
              </div>
              {/* <!-- Column 2 --> */}
              <div className="md:flex items-center justify-center gap-[30px] w-full md:w-[416px] lg:flex-shrink-0">
                <div  className="flex items-center justify-center md:justify-start md:items-start">
                    <img src={clock_icon} alt="Icon 1" className="w-[60px] h-auto" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start  gap-[10px] md:gap-[4px] mx-auto md:mx-0 w-[277px]">
                    <h2 className="mt-3 text-center md:text-left text-[21px] leading-[33px] text-[#1B1C20] font-secondary font-semibold">Save your time</h2>
                    <p className="text-center md:text-left font-primary text-[16px] leading-[24px] text-[#383A47]">This software is very easy for you to manage. You can use it as you wish.</p>
                </div>
              </div>
              {/* <!-- Column 3 --> */}
              <div className="md:flex items-center justify-center gap-[30px] w-full md:w-[416px] lg:flex-shrink-0">
                <div  className="flex items-center justify-center md:justify-start md:items-start">
                    <img src={wifi_icon} alt="Icon 1" className="w-[60px] h-auto" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start  gap-[10px] md:gap-[4px] mx-auto md:mx-0 w-[277px]">
                    <h2 className="mt-3 text-center md:text-left text-[21px] leading-[33px] text-[#1B1C20] font-secondary font-semibold">Keep safe & private</h2>
                    <p className="text-center md:text-left font-primary text-[16px] leading-[24px] text-[#383A47]">This software is very easy for you to manage. You can use it as you wish.</p>
                </div>
              </div>

        </div>
    
    </section>
  )
}

export default Features
