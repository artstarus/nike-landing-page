const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center px-7 gap-2 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'} ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :  'bg-coral-red text-white border-coral-red'} '`}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" className='rounded-full ml-2 w-5 h-5'/>}
    </button>
  )
}

export default Button