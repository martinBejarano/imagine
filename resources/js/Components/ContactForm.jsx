import { useForm, usePage } from "@inertiajs/react"
import Button from "./Button"
import { useState } from "react"

const ContactForm = () => {
    const { app } = usePage().props

    const [succeed, setSucceed] = useState(false)

    const { setData, post, processing, errors, reset, clearErrors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        'g-recaptcha-response': ''
    })

    window.handleToken = (token) => {
        clearErrors('g-recaptcha-response')
        setData('g-recaptcha-response', token)
    }

    const handleChange = (e, name) => {
        setData(name, e.target.value);
        clearErrors(name);
    }

    const submit = (e) => {
        e.preventDefault();
        clearErrors()
        setSucceed(false)
        post('/form', {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                clearErrors()
                e.target.reset()
                grecaptcha.reset()
                setSucceed(true)
            },
            onFinish: () => {
                grecaptcha.reset()
            }
        });
    }

    return (
        <form onSubmit={submit} className='bg-red flex flex-col gap-4'>
            <span>
                <label htmlFor="first_name">First Name</label>
                <input className={`mt-3 ${errors.first_name && 'border-red-600'}`} name='first_name' type='text' placeholder="Your first name..." onChange={e => handleChange(e, 'first_name')} />
                {errors.first_name && <h6 className="text-red-600 text-sm">{errors.first_name}</h6>}
            </span>

            <span>
                <label htmlFor="last_name">Last Name</label>
                <input className={`mt-3 ${errors.last_name && 'border-red-600'}`} name='last_name' type='text' placeholder="Your last name..." onChange={e => handleChange(e, 'last_name')} />
                {errors.last_name && <h6 className="text-red-600 text-sm">{errors.last_name}</h6>}
            </span>

            <span>
                <label htmlFor="email">Email</label>
                <input className={`mt-3 ${errors.email && 'border-red-600'}`} name='email' type='text' placeholder="Your email..." onChange={e => handleChange(e, 'email')} />
                {errors.email && <h6 className="text-red-600 text-sm">{errors.email}</h6>}
            </span>


            <span>
                <label htmlFor="message">Message</label>
                <textarea className={`max-h-[300px] min-h-[100px] mt-3 ${errors.email && 'border-red-600'}`} name="message" placeholder='Leave your message here...' onChange={e => handleChange(e, 'message')} />
                {errors.message && <h6 className="text-red-600 text-sm">{errors.message}</h6>}
            </span>

            <span>
                <div className="g-recaptcha" data-sitekey={app.public_key} data-callback="handleToken"></div>
                {errors['g-recaptcha-response'] && <h6 className="text-red-600 text-sm">The captcha must be verified</h6>}
            </span>
            <Button type='submit' className='w-max mt-8' disabled={processing}>Send Message</Button>
            {succeed && <h2 className="text-green-600">The message has been delivered, thank you.</h2>}
        </form>
    )
}

export default ContactForm