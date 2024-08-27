import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 max-container" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up For <span className="text-coral-red"> Product Updates</span> And Subscribe To Our <span className="text-coral-red"> Weekly Newsletter</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe