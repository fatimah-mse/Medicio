import { Form } from "react-bootstrap";

export const FormApponitmenData = [
    {
        lg: 4,
        md: 6,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="text" placeholder="Your Name" />
    },
    {
        lg: 4,
        md: 6,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="email" placeholder="Your Email" />
    },
    {
        lg: 4,
        md: 6,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="number" placeholder="Your Phone" />
    },
    {
        lg: 4,
        md: 6,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' type="datetime-local" />
    },
    {
        lg: 4,
        md: 6,
        sm: 12,
        input: (
                <Form.Select aria-label="Select Department" className='FM-input my-3 px-3 py-2'>
                    <option>Select Department</option>
                    <option value="1">Department 1</option>
                    <option value="2">Department 2</option>
                    <option value="3">Department 3</option>
                </Form.Select>
        )
    },
    {
        lg: 4,
        md: 6,
        sm: 12,
        input: (
                <Form.Select aria-label="Select Doctor" className='FM-input my-3 px-3 py-2'>
                    <option>Select Doctor</option>
                    <option value="1">Doctor 1</option>
                    <option value="2">Doctor 2</option>
                    <option value="3">Doctor 3</option>
                </Form.Select>
        )
    },
    {
        lg: 12,
        md: 12,
        sm: 12,
        input: <Form.Control className='FM-input my-3 px-3 py-2' as="textarea" rows={5} placeholder="Message (Optional)"/>
    }
]
