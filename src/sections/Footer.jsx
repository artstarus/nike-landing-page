import { copyrightSign } from '../assets/icons';
import {footerLogo} from '../assets/images';
import {footerLinks} from '../constants';
import { socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col gap-20">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} className=""/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get ready for the new season with fresh footwear from your nearest Nike store. Find your perfect size in person. Earn Rewards and Save.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 flex-wrap justify-between gap-20 lg:gap-10'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white text-2xl font-montserrat font-medium leading-normal mb-6'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className='mt-3 text-white-400 font-montserrat leading-normal text-base cursor-pointer hover:text-slate-gray'>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer'>
          <img src={copyrightSign} alt='copyright icon' width={20} height={20} className='rounded-full m-0'/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='cursor-pointer font-montserrat'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer