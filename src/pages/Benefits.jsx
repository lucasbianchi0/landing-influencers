import icon from '../assets/icon.png'

const Benefits = () => {
  return (
    
    <div name='benefits' className="bg-mainColor  lg:pt-[0px]  lg:bg-white  lg:mt-[80px] ">
      <div className='pt-[150px] lg:pt-0 lg:w-[85%] lg:max-w-[1300px] lg:mx-auto lg:grid lg:grid-cols-3'>
        <div className=' bg-white'>
          <div className="py-[130px] bg-mainColor  rounded-b-[70px]  lg:bg-white  ">
              <div className="flex flex-col justify-center items-center w-[60%] mx-auto gap-5 ">
                  <img src={icon} alt=""/>
                  <h3 className="font-semibold text-white sm:text-[20px] lg:text-black">Influencers</h3>
                  <p className="text-white text-center sm:text-[18px] lg:text-black">Conecta tu perfil a tus redes sociales y comparti los productos y marcas que utilizas con quienes te siguen </p>
              </div>
          </div>
        </div>


        <div className='bg-mainColor lg:bg-white'>
          <div className=" py-[130px] rounded-b-[70px] bg-white   ">
              <div className=" bg-white flex flex-col justify-center items-center w-[60%] mx-auto gap-5 ">
                  <img src={icon} alt=""/>
                  <h3 className="font-semibold sm:text-[20px]">Influencers</h3>
                  <p className="text-center sm:text-[18px]">Conecta tu perfil a tus redes sociales y comparti los productos y marcas que utilizas con quienes te siguen </p>
              </div>
          </div>
        </div>

        <div className=" py-[130px] rounded-b-[70px] bg-mainColor  lg:bg-white ">
          <div className="flex flex-col justify-center items-center w-[60%] mx-auto gap-5">
                <img src={icon} alt=""/>
                <h3 className="text-white font-semibold sm:text-[20px] lg:text-black">Influencers</h3>
                <p className="text-white text-center sm:text-[18px] lg:text-black">Conecta tu perfil a tus redes sociales y comparti los productos y marcas que utilizas con quienes te siguen </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits