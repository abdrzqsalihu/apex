import { video_call } from "../assets"

function VideoChat() {
  return (
    <section className="mt-[105px] py-[100px] h-auto bg-[#F8F8FA]">
    <div className="justify-center mx-auto lg:w-[1296px] px-3">
    <div className="flex flex-col md:flex-row gap-[46px] mx-auto">
        <div className="flex-1 flex justify-center items-center md:mr-[70px] mr-0">
          <img src={video_call} className="w-[100%] h-[100%] md:w-[541px] md:h-[376px] flex-shrink-0" alt="video_call" />
        </div>
        <div className="flex-1 flex justify-center md:items-start flex-col md:mx-0 px-2">
          <h1 className="font-secondary font-semibold text-[#1B1C20] text-[28px] md:text-[45px] leading-[40px] md:leading-[56px]  md:w-[511px]">Meet your customers, with live video chat</h1>
          <p className="mt-[20px] font-primary text-[16px] md:text-[18px] text-[#383A47] leading-[30px] md:w-[440px]">Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
          <p className="mt-[18px] md:mt-[26px] font-primary text-[15px] md:text-[16px] text-[#383A47] leading-[26px] md:w-[431px] font-normal">Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits</p>
        </div>
    </div>
    </div>
</section>
  )
}

export default VideoChat
