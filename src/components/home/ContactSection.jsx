import { Spinner } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/base';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const ContactSection = () => {

    const [message, setMessage] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const restart = () => {
        setFormData({
            fullName: '',
            email: '',
            message: '',
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(`${BASE_URL}/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setMessage("Message sent successfully")
            setLoading(false)
            restart();
        } catch (error) {
            console.error('Error sending data:', error);
            if (error.response) {
                setLoading(false)
                setErrorMsg(error.response.message)
            } else {
                setErrorMsg(error.message)
                setLoading(false)
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    // console.log(formData)
    return (
        <div id='contact' className='my-12'>
            <div className="container">
                <h3 className="text-center playfair mb-12 text-secondary text-4xl">CONTACT US</h3>
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <div className="md:w-4/5">
                            <h4 className="text-3xl text-secondary mb-5 playfair font-bold">Let's talk</h4>
                            <p className='mb-4'><b>Location: </b> Constitution Ave, Central Business Dist, Abuja 900211, Federal Capital Territory, Nigeria</p>
                            <p className='mb-4'><b>Telephone:</b> +234 704 631 5661</p>
                            <p className='mb-4'><b>Email: </b> <Link to={"mailto:contact@myzysk.com"}>contact@myzysk.com</Link> </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <form className='md:w-[80%]' onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <div className="mb-3"><label htmlFor="fullName">Your Name</label></div>
                                <input required onChange={handleChange} name='fullName' id='fullName' className='focus-visible:outline-0 transition-all w-full py-3 focus:border border-alt  bg-black/20 rounded-lg px-3' type="text" />
                            </div>
                            <div className="my-4">
                                <div className="mb-3"><label htmlFor="email">Your Email</label></div>
                                <input required onChange={handleChange} name='email' id='email' className='focus-visible:outline-0 transition-all w-full py-3 focus:border border-alt  bg-black/20 rounded-lg px-3' type="text" />
                            </div>
                            <div className="my-4">
                                <div className="mb-3"><label htmlFor="message">Your Message</label></div>
                                <div className="relative w-full min-w-[200px]">
                                    <textarea
                                        onChange={handleChange}
                                        required
                                        name='message'
                                        id='message'
                                        className="w-full min-h[250px] bg-black/20 rounded-lg focus:border border-alt focus-visible:outline-0 p-3"
                                        placeholder=" "></textarea>
                                    {/* <label
                                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Message
                                    </label> */}
                                </div>
                            </div>
                            {message &&
                                <div className="text-green-300 mb-3 flex justify-center items-center">
                                    <p className=" text-sm font-lighter mr-2">{message}</p>
                                    <IoIosCheckmarkCircleOutline />
                                </div>}
                            {errorMsg && <p className="text-center text-red-500 italic text-sm font-light mb-3">{errorMsg}</p>}
                            <button
                                type='submit'
                                disabled={loading}
                                className='py-4 mx-auto rounded-lg hover:bg-alt transition-all bg-alt/50 text-white w-1/2 flex justify-center items-center'
                            >Submit
                                {loading && <Spinner className='ml-1 size-4' />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection