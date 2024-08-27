import {offer} from '../assets/images'
import Button from '../components/Button';
import {arrowRight} from '../assets/icons';

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            <span className="text-coral-red inline-block mt-3">Special </span> Offers
          </h2>
          <p className="mt-4 info-text lg:max-w-lg">
            Transform your shopping journey with unbeatable offers on athletic footwear. From top-notch selections to exceptional savings, we deliver value that truly stands out.
          </p>
          <p className="mt-6 info-text lg:max-w-lg">
          Explore a world of possibilities tailored to meet your every need, exceeding even the highest expectations. Your experience with us will be truly extraordinary.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop now' iconURL={arrowRight}/>
            <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
          </div>
      </div>

    </section>
  )
}

export default SpecialOffers