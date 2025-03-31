import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


const FindUs = () => {
    return (
        <div className="*:w-full">
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join  flex  join-vertical  *:bg-base">
                <button className="btn  join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn  join-item justify-start"><FaInstagram></FaInstagram> Facebook</button>
                <button className="btn  join-item justify-start"><FaTwitter></FaTwitter> Facebook</button>

            </div>
        </div>
    )
}

export default FindUs