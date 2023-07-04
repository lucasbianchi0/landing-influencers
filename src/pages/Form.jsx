import formimg from '../assets/formim.png'

const Form = () => {
  return (
    <div name='form' className="bg-mainColor pb-[100px]  lg:pt-[100px] ">
        <div className="w-[90%]  md:w-[70%] mx-auto bg-zinc-100 flex flex-col justify-center items-center py-[60px] px-5 rounded-[40px] shadow-2xl lg:flex-row lg:justify-between lg:items-start lg:px-[5%] lg:max-w-[1000px]">
            <div className="flex flex-col justify-start gap-5 lg:gap-8">
                <h4 className="font-bold text-mainColor text-3xl lg:text-4xl">Registrate y descubre las ultimas novedades</h4>
                <p className=" text-zinc-500 text-[18px] lg:text-[22px]">Unite a la comunidad y descubre productos que impulsen tu vida</p>
                <div className="flex w-full gap-2">
                    <input className="px-5 w-8/12  rounded-[30px] bg-zinc-300 text-zinc-800" placeholder="juanmartin@email"/>
                    <button className="bg-mainColor text-white py-3 px-4 lg:py5 lg:px-6 rounded-[30px]">Suscribete</button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img src={formimg} alt=''/>
            </div>
           

        </div>
    </div>
  )
}

export default Form