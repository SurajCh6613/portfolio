import {FaHeart} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex bg-gray-300 justify-center items-center py-2'>
        &copy; Suraj Chaudhary | Made with <FaHeart className='text-red-500 ml-2' />
    </footer>
  )
}

export default Footer