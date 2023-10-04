/* eslint-disable react/no-unescaped-entities */
import { user_chat } from "../assets" 
function Conversations() {
  return (
    <section className="py-[40px] h-auto justify-center mx-auto lg:w-[1296px]">
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-1 flex justify-center items-center md:items-start flex-col md:ml-12 mt-[20px]">
        <h1 className="font-secondary font-semibold text-[32px] md:text-[48px] text-[#1B1C20] leading-[40px] md:leading-[56px] w-[90%] md:w-[518px]">Start selling directly inside conversations</h1>
        <p className="mt-[24px] font-primary text-[16px] text-[#383A47] leading-[26px] w-[90%] md:w-[492px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable.</p>
        <div className="w-[90%]">
          <button className="mt-[40px] flex-shrink-0 w-[189px] h-[56px] rounded-lg bg-[#fb8e0b] text-white font-primary font-medium">
            Start Chatting Now
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={user_chat} className="w-[100%] h-[100%] md:w-full md:h-full flex-shrink-0" alt="user_chat" />
      </div>
    </div>
  </section>
  
  )
}

export default Conversations
