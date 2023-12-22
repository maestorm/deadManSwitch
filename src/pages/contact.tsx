import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import * as Yup from 'yup';
import {
  Formik, Form, ErrorMessage,
} from 'formik';
import { Submit, Menu, Main, StyledField } from '../components';
import Header from './header';

export const Contact = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name;

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${ response.status }`);
      }
      const responseData = await response.json();
      console.log('responseData: ', responseData.message);
    } catch (err) {
      console.error(err);
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  });

  return (
    <Main>
      <Menu>
        <Header />
        {userName && (
          <Link
            href="#"
            onClick={() => signOut({
              callbackUrl: '/',
            })}
          >
            Sign out
          </Link>
        )}
      </Menu>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="form-name">Name</label>
            <StyledField
              id="form-name"
              autoComplete="name"
              maxLength={50}
              size={100}
              name="name"
            />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="form-email">Email:</label>
            <StyledField
              id="form-email"
              required
              autoComplete="email"
              maxLength={80}
              name="email"
              type="email"
            />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="form-message">Message:</label>
            <StyledField
              id="form-message"
              required
              name="message"
              rows={5}
              as="textarea"
            />
            <ErrorMessage name="message" component="div" />
          </div>
          <Submit type="submit">Send</Submit>
        </Form>
      </Formik>
    </Main>
  );
}

export default Contact;
