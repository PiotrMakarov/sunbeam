export default function Footer() {
  return (
    <div className="relative mt-[30rem] h-[288px] lg:h-[470px] md:h-[470px] bg-gray-04 w-[100%] ">
      <div className="absolute left-[90px] top-[3rem] lg:left-[70px] md:left-[30px]">
        <div className="flex-col items-start">
          <img src="/logo_grey.svg" alt="logo" className=""></img>
          <div className="my-5"><button className="font-light text-gray-02 text-xl">ru</button><img src="/ru-en_grey.svg" alt="ru-en" className="inline mx-1" ></img></div>
        </div>
        <div className="grid grid-cols-2 gap-20 lg:grid-cols-1 lg:gap-2 md:grid-cols-1 md:gap-2">
          <div className="flex-col items-start">
            <div className='text-gray-02 text-lg font-semibold'>Контакты:</div>
            <div className='text-gray-02 text-lg'>ВК 2гис</div>
            <div className='text-gray-02 text-lg'>+7 (913) 640-03-59</div>
          </div>
          <div className="flex-col items-start">
            <div className='text-gray-02 text-lg'>© Луч солнца, 2023</div>
            <div className='text-gray-02 text-lg'>ИП Рыбин Д. А.</div>
            <div className='text-gray-02 text-lg'>ОГРНИП: 320723200066545</div>
          </div>
        </div>
      
      </div>
      <img src="/info_footer.svg" alt="payment" className="absolute bottom-[50px] right-[90px] lg:left-[70px] md:left-[30px]"></img>
    </div>
  )
}
