import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Zod schema for validation
const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  remember: z.boolean().optional(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const remember = watch("remember");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative bg-white p-10 rounded-md w-full max-w-md shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl font-bold"
      >
        <X size={20} />
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center text-[#0a1f44]">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0a1f44]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#0a1f44]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div
          className="flex items-center space-x-2 cursor-pointer select-none"
          onClick={() => setValue("remember", !remember)}
        >
          <div
            className={`w-5 h-5 rounded-sm border border-[#0a1f44] flex items-center justify-center ${
              remember ? "border-none" : ""
            }`}
            onClick={() => setValue("remember", !remember)}
          >
            {remember && <Check size={18} className="text-[#0073e6]" />}
          </div>
          <label className="text-sm text-[#0a1f44]">Remember password</label>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#0a1f44] text-white border rounded-md hover:bg-blue-500"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 text-left">
        <p className="text-sm text-gray-600">
          Don't have a Polytrend account?{" "}
          <Link to="/signup" className="text-[#0073e6] hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <Link to="/forgot-password" className="text-[#0073e6] hover:underline">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
