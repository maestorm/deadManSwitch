"use client"
import '../globals.css';
import Link from "next/link";

import styled from 'styled-components';

const Button = styled('button')({
    color: '#6f6f6f',
    background: '#f8f8f8',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',

    '&:focus, &:hover': {
        background: '#999999',
        color: '#fff'
    }
});

const Menu = styled('div')({
    display: 'flex',
    width: '100%',
    padding: '8px 24px',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
});

export default function Contact() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center" >
            <Menu>
                <Link href="/">Home</Link>
            </Menu>

            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col w-500">

                    <label htmlFor="form-name">Name </label>
                    <input id="form-name" autoComplete="name" maxLength={50} size="lg" name="name" className="text-black"/>

                    <label htmlFor="form-email"> Email:</label>
                    <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="text-black"/>

                    <label htmlFor="form-message"> Message: </label>
                    <textarea id="form-message" required name="message" rows={5} className="text-black" />

                </div>
                <Button type="submit">Send</Button>
            </form>
        </main>
    )
}
