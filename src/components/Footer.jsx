import { useRef, useState } from "react";
import emailjs, { init } from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
export default function Footer() {
    init("jLbqXnx_ZLWZwifi8");
    const form = useRef();
    const captchaRef = useRef("");
    const [isVerified, setIsVerified] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleOnChange = () => {
        setIsVerified(true)

    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u8sk26d', 'template_um334c5', form.current)
            .then(
                () => {
                    console.log('SUCCESS!');
                    console.log(form.current);
                    setName("");
                    setEmail("");
                    setMessage("");
                    form.current.reset();
                    captchaRef.current.reset();
                    setIsVerified(false);

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (

        <footer className=" shadow dark:bg-brand-dark  bg-brand-200 px-4 ">
            <div className="container m-auto flex flex-col lg:flex-row items-center py-10">
                <div className="w-full lg:w-1/2 text-center  mx-12">
                    <h1 className="text-6xl my-4 font-dmSans font-light text-primary dark:text-accent ">Let&apos;s get in touch!</h1>
                    <h2 className="text-2xl my-2 font-semibold text-secondary dark:text-accent-400">Questions? Feedback? Proposal?</h2>
                    <p className="text-secondary dark:text-accent-400 font-dmSans font-extralight text-2xl">Whatever it is, feel free to contact me and I&apos;ll come back to you as soon as possible.</p>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <form className="w-full" method="POST" ref={form} onSubmit={sendEmail}>

                        <div className="mb-5">
                            <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Name</label>
                            <input type="text" required id="name-input" value={name} onChange={(e) => setName(e.target.value)} name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-accent-400 dark:focus:border-blue-500" placeholder="Your name .." />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="user_email" required value={email} onChange={(e) => setEmail(e.target.value)} id="email_input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-accent-400 dark:focus:border-blue-500" placeholder="example@example.com" />
                        </div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a message</label>
                        <textarea id="message" required name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-accent-400 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        <ReCAPTCHA className="my-4" sitekey={" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                            ref={captchaRef} onChange={handleOnChange}></ReCAPTCHA>
                        <button type="submit" disabled={!isVerified} className=" disabled:opacity-50 disabled:bg-brand-dark disabled:dark:bg-accent-600 w-full py-3.5 px-5 me-2 my-10 text-sm font-medium text-brand-200 focus:outline-none bg-primary rounded-lg  hover:bg-brand-dark focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-accent-600 dark:bg-accent dark:text-primary dark:border-gray-600 dark:hover:text-brand dark:hover:bg-accent-600">Contact</button>

                    </form>
                </div>
            </div>

            <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="/" className="hover:underline">Lexis Bonilla</a>. </span>

        </footer>


    )
}

