const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 gap-2 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
        {label}
        <img src={iconURL} alt="arrow right icon" className='rounded-full ml-2 w-5 h-5'/>
    </button>
  )
}

export default Button