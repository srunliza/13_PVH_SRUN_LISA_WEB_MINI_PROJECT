import { handleRegister } from "@/actions/authAction";
import React from "react";

const RegisterPage = () => {
  return (
    <main>
      <section className="w-full">
        <div className="flex px-56 gap-x-24 h-screen  justify-center items-center">
          <div className="w-[65%]">
            <div>
              <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <div class="flex-col justify-center pt-12 ">
              <form
                action={handleRegister}
                class="w-full grid grid-cols-2 gap-4"
              >
                <div class="flex items-start flex-col justify-start">
                  <label for="firstname" class="text-sm  mb-1 mr-2">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First name"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>

                <div class="flex items-start  flex-col justify-start">
                  <label
                    for="lastName"
                    class="text-sm mb-1 text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastname"
                    placeholder="Last name"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>

                <div class="flex items-start flex-col justify-start">
                  <label
                    for="email"
                    class="text-sm mb-1 text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>

                <div class="flex  items-start flex-col justify-start">
                  <label
                    for="gender"
                    className="text-sm mb-1 text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Gender:
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="flex items-start flex-col justify-start">
                  <label
                    for="password"
                    class="text-sm mb-1 text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="**********"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>

                <div class="flex items-start flex-col justify-start">
                  <label
                    for="confirmPassword"
                    class="text-sm mb-1 text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="*********"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  class="bg-blue-600 w-1/3 mt-5 hover:bg-blue-600 text-white text-sm  py-2 px-4 rounded-lg shadow-sm"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="w-[35%]">
            <img src="/assets/icons/sign-up.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
