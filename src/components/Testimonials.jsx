import { wave, client01, client02 } from "../assets" 



  const WaveSectionStyle = () =>  (
    <div className="absolute top-0 w-[50%] md:w-[100%] h-[100%] bg-cover bg-no-repeat flex-shrink-0">
      <img src={wave} alt="" />
    </div>
  );

function Testimonials() {
  return (
    <section className="py-[80px] h-auto bg-primary relative">
        <WaveSectionStyle />
        <div className="justify-center mx-auto lg:w-[1296px] h-auto px-4">
            <h1 className="font-primary text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] text-center text-white font-bold max-w-[446px] mx-auto">Our blessed client said about us 😍</h1>

            <div className="flex flex-col md:flex-row gap-10 mt-20">
                <div className="flex-1 flex flex-col w-[100%] md:w-[600px] mx-auto">
                      <div className="relative bg-white rounded-lg">
                        {/* Content */}
                        <div className="py-8 md:py-12 text-center">
                          <div className="max-w-full md:max-w-[501px] px-5 mx-auto">
                            <h1 className="font-primary font-bold text-[#FD6003] text-[16px] md:text-[20px] leading-[26px] md:leading-[28px]">“Incredible Experience”</h1>
                            <p className="mt-2 font-primary text-[14px] md:text-[18px] text-[#383A47] opacity-70 leading-[24px] md:leading-[28px]">We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <div className="w-0 h-0 border-solid border-4 border-transparent border-t-black"></div>
                          <div className="w-5 h-5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        </div>                        
                      </div>
                      {/* User Profile  */}
                      <div className="flex flex-row mt-6 flex-wrap">
                          <div className="inline-flex justify-center items-center gap-3 h-14 mx-auto">
                              <div className="w-full h-full">
                                <img src={client01} className="w-[100%] h-[100%]" alt="" />
                              </div>
                              <div className="font-primary flex-shrink-0 text-white">
                                <p className="text-[15px] font-medium leading-[30px]">Wade Warren</p>
                                <p className="text-[12px] leading-[24px]"> CEO, ABC Corporation</p>
                              </div>
                          </div>
                      </div>
                </div>
                <div className="flex-1 flex flex-col w-[100%] md:w-[600px] mx-auto">
                      <div className="relative bg-white rounded-lg">
                        {/* Content */} 
                        <div className="py-8 md:py-12 text-center">
                          <div className="max-w-full md:max-w-[501px] px-5 mx-auto">
                            <h1 className="font-primary font-bold text-[#FD6003] text-[16px] md:text-[20px] leading-[26px] md:leading-[28px]">“Dependable, Responsive, Professional”</h1>
                            <p className="mt-2 font-primary text-[13px] md:text-[18px] text-[#383A47] opacity-70 leading-[24px] md:leading-[28px]">Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <div className="w-0 h-0 border-solid border-4 border-transparent border-t-black"></div>
                          <div className="w-5 h-5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        </div>
                      </div>
                        {/* User Profile  */}
                        <div className="flex flex-row mt-6 flex-wrap">
                          <div className="inline-flex justify-center items-center gap-3 h-14 mx-auto">
                              <div className="w-full h-full">
                                <img src={client02} className="w-[100%] h-[100%]" alt="" />
                              </div>
                              <div className="font-primary flex-shrink-0 text-white">
                                <p className="text-[15px] font-medium leading-[30px]">Esther Howard</p>
                                <p className="text-[12px] leading-[24px]"> CEO, ABC Corporation</p>
                              </div>
                          </div>
                      </div>
                </div>

            
            </div>

            
            
        </div>
    </section>
  )
}

export default Testimonials
