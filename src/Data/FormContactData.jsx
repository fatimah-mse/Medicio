import { Form } from "react-bootstrap";

export const FormContactData = [
    {
        lg: 6,
        md: 12,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="text" placeholder="Your Name" />
    },
    {
        lg: 6,
        md: 12,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="email" placeholder="Your Email" />
    },
    {
        lg: 12,
        md: 12,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="text" placeholder="Subject" />
    },
    {
        lg: 12,
        md: 12,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' as="textarea" rows={5} placeholder="Message"/>
    }
]