'use client'
import { useState } from 'react';
import { signIn } from "next-auth/react";

import Head from 'next/head';
import Image from 'next/image';

// third party
import { useFormik } from 'formik';
import * as Yup from 'yup';

// api routes


// Validation schema using Yup
const SignInSchema = Yup.object().shape({
  username: Yup.string().required('feld is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean()
});

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

   const formik = useFormik({
    initialValues : {
        username: '',
        password: '',
        rememberMe: false
    }, 
    validationSchema: SignInSchema,
    onSubmit:  async (values, { setSubmitting, setErrors }) => {
      try {
        alert(values)
          const result = await signIn("credentials", {
          redirect: false,
          username: values.username,
          password: values.password
          });

            if (result?.ok) {
            console.log("Login successful");
            // maybe redirect to dashboard
            } else {
            console.log("Login failed", result?.error);
            }
        // console.log('Submitting:', values);
        // // Replace with actual authentication logic
        // // await authService.login(values.email, values.password);
        
        // // Simulate API call delay
        // await new Promise(resolve => setTimeout(resolve, 1500));
        
        // On success, you would typically redirect
        // router.push('/dashboard');
      } catch (error) {
        setErrors({ 
          username: 'Invalid credentials',
          password: 'Invalid credentials'
        });
      } finally {
        setSubmitting(false);
      }
    }
   }) 

  return (
    <div className="min-h-screen bg-[#222222] text-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account" />
      </Head>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          {/* Replace with your logo */}
          <div className="w-20 h-20 relative">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Company Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Or{' '}
          <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
            start your 14-day free trial
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#333333] py-8 px-4 shadow sm:rounded-lg sm:px-10">
           <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                username address
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="true"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#444444] text-white sm:text-sm ${
                    formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p className="mt-1 text-sm text-red-400">{formik.errors.username}</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#444444] text-white sm:text-sm ${
                    formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="mt-1 text-sm text-red-400">{formik.errors.password}</p>
                ) : null}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.rememberMe}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-[#444444]"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formik.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign in'}
              </button>
            </div>
          </form>


          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#333333] text-gray-300">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div>
                <button
                  onClick={() => console.log('hellow')}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-[#444444] text-sm font-medium text-white hover:bg-[#555555] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.664-4.153-2.675-6.735-2.675-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.671-0.069-1.325-0.189-1.961h-9.811z" />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-300">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                Sign up as a User
              </a>{' '}
              or{' '}
              <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                Sign up as an Influencer
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

