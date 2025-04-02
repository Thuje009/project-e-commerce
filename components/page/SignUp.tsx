"use client";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import InputBasic from "@/components/base/InputBasic";
import Button from "../base/Button";
import { useRouter } from "next/navigation";

interface FormInputs {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dataPermission: boolean;
}

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      // dataPermission: true,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          userName: data.userName,
          firstName: data.firstName,
          lastName: data.lastName,
          // dataPermission: data.dataPermission,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Something went wrong, please try again.");
        return;
      }

      console.log("Sign up successful:", result.user);
      setErrorMessage("");

      router.push("/sign-in");

    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessage("Unable to sign up. Please try again.");
    }
  };

  return (
    <section className="flex flex-col gap-2 p-5">
      <div className="flex sm:container sm:px-4">
        {/* Left Image */}
        <div className="hidden md:flex md:w-2/4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzCE8ckerJIa8vpPWFQNbq9G66HU6rIOeLA&s"
            alt="Sign Up Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/4 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: "First name is required",
                }}
                render={({ field }) => (
                  <InputBasic
                    {...field}
                    id="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    error={errors.firstName?.message}
                  />
                )}
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: "Last name is required",
                }}
                render={({ field }) => (
                  <InputBasic
                    {...field}
                    id="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    error={errors.lastName?.message}
                  />
                )}
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <Controller
                name="userName"
                control={control}
                rules={{
                  required: "Username is required",
                }}
                render={({ field }) => (
                  <InputBasic
                    {...field}
                    id="userName"
                    type="text"
                    placeholder="Enter Username"
                    error={errors.userName?.message}
                  />
                )}
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <InputBasic
                    {...field}
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    error={errors.confirmPassword?.message}
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
              Sign Up
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
                Already have an account?
                <a
                  href="/sign-in"
                  className="text-blue-500 ml-1 hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
};

export default SignUpPage;
