import { chat_group } from "../assets"


function Customers() {
  return (
    <section className="py-[100px] h-auto bg-[#F8F8FA]">
        <div className="justify-center mx-auto lg:w-[1296px]">
        <div className="flex flex-col md:flex-row gap-[50px] mx-auto">
            <div className="flex-1 flex justify-center items-center md:mr-[100px]">
              <img src={chat_group} className="w-[95%] h-[100%] md:w-[90%] md:h-full flex-shrink-0" alt="video_call" />
            </div>
            <div className="flex-1 flex justify-center items-center md:items-start flex-col">
              <h1 className="font-secondary font-semibold text-[#1B1C20] text-[28px] md:text-[48px] leading-[40px] md:leading-[56px] w-[90%] md:max-w-[460px]">Get direct orders from your customers</h1>
              <p className="mt-[22px] font-primary text-[18px] text-[#383A47] leading-[30px] w-[90%] md:w-[440px]">Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available. </p>

              <div className="flex flex-row mt-[65px] gap-5 w-[90%] flex-wrap">
                <div className="inline-flex justify-center items-start w-25 gap-3 h-14">
                    <div className="font-primary text-[#1b1c20] text-[32px] md:text-[42px] font-medium leading-[40px] md:leading-[56px]">4.3K+</div>
                    <div className="mt-1 font-primary flex-shrink-0 w-[77px] text-[#383a47] text-sm leading-[22px]">Website’s Powering</div>
                </div>
                <div className="inline-flex justify-center items-start w-25 gap-3 h-14">
                    <div className="font-primary text-[#1b1c20] text-[32px] md:text-[42px] font-medium leading-[40px] md:leading-[56px]">7M+</div>
                    <div className="mt-1 font-primary flex-shrink-0 w-[77px] text-[#383a47] text-sm leading-[22px]">Chats in Last 2022</div>
                </div>
              </div>

            </div>
        </div>
        </div>
    </section>
  )
}

export default Customers
