import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const signupSchema = z
  .object({
    firstName: z.string().min(5, "First name can't be blank"),
    lastName: z.string().min(5, "Last name can't be blank"),
    companyName: z.string().min(5, "Company name can't be blank"),
    businessEmail: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password can't be blank"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white rounded-lg shadow-lg w-full max-w-[550px] text-center p-6"
      >
        <button
          type="button"
          onClick={() => {
            reset();
            navigate("/");
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-[#0a1f44] mb-8 mt-4">Sign Up</h2>

        {/* First Name & Last Name */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full">
            <input
              {...register("firstName")}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm">
              First Name
            </label>
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="relative w-full">
            <input
              {...register("lastName")}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm">
              Last Name
            </label>
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Company Name & Business Email */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full">
            <input
              {...register("companyName")}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm">
              Company Name
            </label>
            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName.message}</p>
            )}
          </div>

          <div className="relative w-full">
            <input
              {...register("businessEmail")}
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm">
              Business Email
            </label>
            {errors.businessEmail && (
              <p className="text-red-500 text-sm">
                {errors.businessEmail.message}
              </p>
            )}
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full">
            <input
              {...register("password")}
              type="password"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="relative w-full">
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm">
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-[#0a1f44] text-white py-2 rounded-lg hover:bg-blue-500"
          >
            Enter
          </button>
        </div>

        {/* Terms and Login */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            By joining Polytrend you agree to Polytrend's{" "}
            <Link to="#" className="text-[#0073e6] underline">
              Terms and Conditions of Use
            </Link>
          </p>
          <p className="mt-2">
            Already have a Polytrend account?{" "}
            <Link to="/login" className="text-[#0073e6]">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
