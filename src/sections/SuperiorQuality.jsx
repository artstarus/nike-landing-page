import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperiorQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 max-container w-full">
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            We Deliver
            <br/>
            <span className="text-coral-red inline-block mt-3">Superior </span> <span className="text-coral-red inline-block mt-3">Quality</span> Footwear
          </h2>
          <p className="mt-4 info-text lg:max-w-lg">
            Experience the perfect blend of comfort and style with our carefully designed sneakers, engineered to enhance every step with superior quality, innovative features, and a refined sense of elegance.
          </p>
          <p className="mt-6 info-text lg:max-w-lg">
            Our dedication to detail and excellence ensures your satisfaction.
          </p>
          <div className="mt-11">
            <Button label='View details'/>
          </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="rainbow shoe" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperiorQuality