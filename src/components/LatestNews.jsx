
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-300 py-2'>
            <p className='bg-[#D72050] text-white px-3 py-1' >
                Latest
            </p>

            <Marquee pauseOnHover={true} className='space-x-10 '>
                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius ipsam in autem!
                </Link>
                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius ipsam in autem!
                </Link>
                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius ipsam in autem!
                </Link>
            </Marquee>

        </div>
    )
}

export default LatestNews