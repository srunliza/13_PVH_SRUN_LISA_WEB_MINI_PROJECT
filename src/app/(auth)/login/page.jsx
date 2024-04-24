"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  // define handle login
  async function handleLogin(userInfo) {
    // define structure object
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    console.log("new user info in component login :", newUserInfo);
    // calling next auth service and passing " newUseInfo "
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    console.log("res in login: ", res);
    // checking is login success nor not
    if (res.ok) {
      router.push("/todo-list");
    } else {
      router.push("/register");
    }
  }
  return (
    <main>
      {/* <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div>
            <a
              href="#"
              className="flex t items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Login
            </a>
          </div>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex gap-2">
                  <p className="text-sm font-light text-gray-500">
                    Don’t have an account yet?{" "}
                  </p>
                  <Link
                    href="/register"
                    className="font-medium text-sm text-blue-500 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
                      Continue with
                    </span>
                  </div>
                </div>
                <div className="mt-10">
                  <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50">
                    <span className="sr-only">Sign in with Google</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <clipPath id="p.0">
                        <path
                          d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z"
                          clip-rule="nonzero"
                        ></path>
                      </clipPath>
                      <g clipPath="url(#p.0)">
                        <path
                          fill="currentColor"
                          fillOpacity="0.0"
                          d="m0 0l20.0 0l0 20.0l-20.0 0z"
                          fillRule="evenodd"
                        ></path>
                        <path
                          fill="currentColor"
                          d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
                          fillRule="evenodd"
                        ></path>
                        <path
                          fill="currentColor"
                          d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
                          fillRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full">
        <div className="flex px-52 gap-x-20  h-screen  justify-center items-center">
          <div className="w-[65%]">
            <div>
              <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <div className=" flex-col justify-center pt-12 sm:px-6 lg:px-8">
              <div className="w-[80%] pl-36 ">
                <h1 className="text-2xl font-medium text-gray-900">Login</h1>
                <form className="space-y-4" action={handleLogin}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required=""
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      data-testid="password"
                      required=""
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <button
                      data-testid="login"
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex text-gr gap-x-3">
                    <span className="font-normal">Don't have an account?</span>
                    <Link
                      className="font-medium text-indigo-600 dark:text-indigo-100"
                      href="/register"
                    >
                      Register
                    </Link>
                  </div>
                </form>

                <div className="mt-12">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white  px-2 text-stone-500 ">
                        Continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50">
                      <span className="sr-only">Sign in with Google</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <clipPath id="p.0">
                          <path
                            d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z"
                            clipRule="nonzero"
                          ></path>
                        </clipPath>
                        <g clipPath="url(#p.0)">
                          <path
                            fill="currentColor"
                            fillOpacity="0.0"
                            d="m0 0l20.0 0l0 20.0l-20.0 0z"
                            fillRule="evenodd"
                          ></path>
                          <path
                            fill="currentColor"
                            d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
                            fillRule="evenodd"
                          ></path>
                          <path
                            fill="currentColor"
                            d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray mt-16 font-sm text-sm">
              &#169; 2024 My office . All Rights Reserved
            </div>
          </div>

          <div className="w-[35%]">
            <img src="/assets/icons/login.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
