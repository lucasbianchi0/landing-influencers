import header from '../assets/header.png'

const Header = () => {
  return (
    <div name='home' className='bg-mainColor pb-[100px] m-0 border-none outline-none '>
        <div className=" flex flex-col   rounded-t-[70px] md:flex-row md:justify-between md:items-center md:w-[85%] md:max-w-[1100px] md:mx-auto md:py-[50px] ">
            <div className=' pt-16 pb-[100px] rounded-[72px]   bg-white'>
                <div className="flex flex-col justify-center items-center w-[85%]  mx-auto gap-7 max-w-[430px] md:items-start   ">
                    <h2 className="text-mainColor text-4xl font-bold text-center sm:text-5xl md:text-left">El hogar de tus influencers favoritos</h2>
                    <p className="text-center text-[18px] sm:text-[22px] md:text-[18px] md:text-left ">Visita perfiles de creadores de contenido y descubre los productos que utilizan </p>
                    <button className="px-6 py-3 bg-mainColor rounded-[20px] text-white sm:text-[22px]">Suscribirme 🔥</button>
                </div>
            </div>
            
            <div className='bg-mainColorm flex justify-center items-center'>
                <img className='  w-[500px] lg:h-auto' src={header} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Header