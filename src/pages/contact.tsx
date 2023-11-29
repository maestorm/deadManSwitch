import './globals.css';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from 'react';
import { Button, Menu, Main } from '../components';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Contact() {
    const { data: session } = useSession();
    const userName = session?.user?.name;

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    useEffect(() => {
        // createRecord
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        console.log('formData: ', formData);
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            console.log("response: ", response);
            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log('responseData: ', responseData['message']);
        } catch (err) {
            console.error(err);
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    return (
        <Main>
            <Menu>
                <Link href="/">Home</Link>
                {userName && <Link href="#" onClick={() => signOut({
                    callbackUrl: '/'
                })}>
                    Sign out
                </Link>}
            </Menu>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form onSubmit={handleSubmit} className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col w-500">
                    <label htmlFor="form-name">Name</label>
                    <Field
                        id="form-name"
                        autoComplete="name"
                        maxLength={50}
                        size={100}
                        name="name"
                        className="text-black"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-600" />

                    <label htmlFor="form-email">Email:</label>
                    <Field
                        id="form-email"
                        required
                        autoComplete="email"
                        maxLength={80}
                        name="email"
                        type="email"
                        className="text-black"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-600" />

                    <label htmlFor="form-message">Message:</label>
                    <Field
                        id="form-message"
                        required
                        name="message"
                        rows={5}
                        as="textarea"
                        className="text-black"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-600" />
                    </div>
                    <Button type="submit">Send</Button>
                </Form>
            </Formik>
        </Main>
    )
}
