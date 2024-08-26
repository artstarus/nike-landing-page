import { star } from "../assets/icons"
const TrendingProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]'/>
        <div className='flex justify-start gap-2.5 mt-8'>
            <img src={star} alt='rating' width={24} height={24}/>
            <p className="leading-normal text-slate-gray text-xl font-montserrat">(4.8)</p>
        </div>
        <h3 className="text-2xl leading-normal mt-2 font-semibold font-palanquin">{name}</h3>
        <p className=" font-montserrat font-semibold mt-2 text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default TrendingProductCard