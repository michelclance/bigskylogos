import React, {useState} from 'react'
import axios from 'axios'
import Example from '../components/contactt'
import BillCath from '../components/contactt';

type FormState = {
    email: string;
    name: string;
    message: string;
}

function Contact() {
    const formId = 'wamCE4jQ'
    const formSparkUrl = `https://submit-form.com/${formId}`

        const initialFormState = {
            email: '',
            name: '',
            message: '',
        }

    const [formState, setFormState] = useState<FormState>(initialFormState);

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        await postSubmission();
    };

    const postSubmission = async () => {
        const payload = {
            ...formState
        }

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result)
        } catch(error) {
            console.log(error)
        }
    };

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        const formKey = id as keyof FormState;
    
        const updatedFormState = { ...formState };
        updatedFormState[formKey] = value;
    
        setFormState(updatedFormState);
    };
    


    return (
        
        
        <div  className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div className='w-2/3 m-auto mt-auto p-8 shadow-lg'>
                 <h1 className='text-4xl font-bold flex justify-center text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span>Contact Us</span>
                    </h1>
                    <form onSubmit={submitForm}>
                <div className='my-2 flex flex-col text-white'>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={updateFormControl} type='text' className='border-2 p-2 text-black' id='name' value={formState.name} />
                </div>


                <div className='my-2 flex flex-col text-white'>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={updateFormControl} type='text' className='border-2 p-2 text-black' id='email' value={formState.email} />
                </div>
                <div className='my-2 flex flex-col text-white'>
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' className='border-2 p-2 text-black' onChange={updateFormControl} value={formState.message}></textarea>
                </div>

                     <button className='my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200'>Submit</button>

                    </form>

            </div>
        </div> 
)
}
export default Contact

