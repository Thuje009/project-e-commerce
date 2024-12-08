"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import InputBasic from "@/components/base/InputBasic";
import Button from "../base/Button";
import { useRouter } from "next/navigation";
import { getSession, signIn } from 'next-auth/react';
import ShoppingLoader from "../shared/Loading";

interface FormInputs {
  email: string;
  password: string;
  dataPermission: boolean;
}
const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
      dataPermission: true,
    },
  });

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session?.user) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        setErrorMessage(res.error || "Something went wrong, please try again.");
        return;
      }

      console.log("Login successful:", res);

      const session = await getSession();
      console.log("Session data:", session);

      if (session?.user) {
        console.log("User details:", session.user);
      }

      setErrorMessage("");
      // router.back();
      router.back();
      // window.location.reload();
    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrorMessage("Unable to sign in. Please try again.");
    }
  };

  return (
    <section className="flex flex-col gap-2 p-5">
      <div className="flex sm:container sm:px-4">
        {/* Left Image */}
        <div className="hidden md:flex md:w-2/4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzCE8ckerJIa8vpPWFQNbq9G66HU6rIOeLA&s"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/4 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <InputBasic
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    error={errors.email?.message}
                  />
                )}
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <InputBasic
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    error={errors.password?.message}
                  />
                )}
              />
            </div>

            {/* Data Permission Checkbox */}
            <div className="mb-4">
              <Controller
                name="dataPermission"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="dataPermission"
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                      className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="dataPermission"
                      className="text-sm text-gray-700"
                    >
                      I agree to the usage and storage of my personal data
                    </label>
                  </div>
                )}
              />
              {errors.dataPermission && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dataPermission.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button full type="submit">
              Sign In
            </Button>

            {/* Error Message */}
            {errorMessage && (
              <div className="mt-4 text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?
                <a
                  href="/sign-up"
                  className="text-blue-500 ml-1 hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
