import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import { Link } from "react-router-dom";

const defaultFormField = {
  email: "",
  password: "",
};
export default function SignUpForm({ onSignUpSuccess }) {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { email, password } = formFields;
  // const email = formFields.email
  // const password = formFields.password

  const onInputFormHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // const onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
  //     setFormFields({...formFields, email: event.target.value})
  // }
  // const onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
  //     setFormFields({...formFields, password: event.target.value})
  // }

  const onSignUp = async (event) => {
    event.preventDefault();
    try {
      const authUser = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const user = authUser?.user;
      if (!user) return;

      setFormFields(defaultFormField);

      onSignUpSuccess(user);
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    onChange={onInputFormHandle}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={onInputFormHandle}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <button
                  onClick={onSignUp}
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {" "}
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
