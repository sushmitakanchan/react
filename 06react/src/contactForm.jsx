import React from 'react'
import { useContactForm } from './hooks/useContactForm'


export function ContactForm(props) {
    const {loading, submitContact, successMessage, errorMessage} = useContactForm()
    const [form, setForm] = useState({name:"", email: "", message:""})
    const handleSubmit = (e)=>{
        e.preventDefault();

    }
    const handleChange = (e)=>{
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div> ContactForm <form onSubmit={handleSubmit}>
        <input type="text"
        name='name'
        value={form.name} 
        onChange={handleChange}
        placeholder='Your name'/>

        <input type="email"
        name='email'
        value={form.email} 
        onChange={handleChange}
        placeholder='Your Email'/>

        <textarea name="message"
        value={form.message}
        onChange={handleChange}
        placeholder='Your Message'></textarea>

        <button type='submit' disabled={loading}>
            {loading? "Sending..." : "Send"}</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}
