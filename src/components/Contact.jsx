import React from 'react';
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { toastError, toastSuccess } from '../service/ToatifyService';
const Contact =()=>{
const form = useRef(); 
  const sendEmail = (e) => { 
    e.preventDefault(); 
    emailjs.sendForm( 
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_PUBLIC_KEY,
    ).then( (result) => {
            if(result.status === 200){
                toastSuccess("Message sent successfully.")
            }
           console.log(result); 
          }, (error) => { 
            toastError("Error sending the message, please try later.")
            console.log(error); 
          } );
       };
   return (
    <div className="bg-gray-950 dark:bg-gray-950 text-white py-10" id="contact">
                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                    <div className="flex flex-col md:flex-row items-center md:space-x-12">
                        <div className="flex-1">
                           <h3 className='text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r 
                                from-blue-600 to-violet-600' >Let's get in touch</h3>
                           <p className='mb-2'>I'm open to discussions so send me an email in the form below.</p>
                           <div className="mb-4">
                                {/*icono de carta */}
                                <FaEnvelope className='inline-block text-violet-500 mr-2'></FaEnvelope>
                                <a href="mailto:gomezgonzalo2012&#64;gmail&#46;com" className='hover:underline'>
                                     gomezgonzalo1220&#64;gmail&#46;com
                                </a>
                           </div>
                           <div className="mb-4">
                                {/*icono de carta */}
                                <FaMapMarkedAlt className='inline-block text-violet-500 mr-2'></FaMapMarkedAlt>
                                <span>Goya, Corrientes, Argentina</span>
                           </div>
                                                      
                        </div>
                        <div className="flex-1 w-full">
                            <form className="space-y-4 "  ref={form} onSubmit={sendEmail}>
                           <div>
                               <label htmlFor="name" className='block mb-2'>Your Name</label>
                               <input type="text" name='name'
                                   className='w-full p-2 rounded bg-gray-900 border border-gray-600
                                focus:outline-none focus:border-green-400'
                                   placeholder='Enter Your Name' />
                           </div>
                           <div>
                               <label htmlFor="email"  className='block mb-2'>Your Email</label>
                               <input type="email" name="email"
                                   className='w-full p-2 rounded bg-gray-900 border border-gray-600
                                    focus:outline-none focus:border-green-400'
                                   placeholder='Enter Your email' />
                           </div>
                           <div>
                               <label htmlFor="message"  className='block mb-2'>Your Message</label>
                               <textarea type="text" name="message"
                                   className='w-full p-2 rounded bg-gray-900 border border-gray-600
                                    focus:outline-none focus:border-green-400'
                                    rows="5"
                                   placeholder='Enter Your Name' />
                           </div>
                            <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white  md:inline 
                        transform transition-transform duration-300 hover:scale-105 px-8 mt-2 py-2 rounded-full" type='submit'>Send</button>
                                
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
   ) 
}
export default Contact;