import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Email:', data.email);
    // You can add your submit logic here
  };

  return (
    <div className="relative p-10 rounded-md w-full max-w-md shadow-lg">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button onClick={() => navigate("/")}
        className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <X />
        </button>

        <h2 className="text-center text-[#0a1f44] font-semibold text-lg mb-3">
          Forgot Password
        </h2>
        <p className="text-center text-gray-700 text-sm mb-5">
          Enter your email below. Password reset instructions will be sent to your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="email"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            className="w-full border-b border-gray-400 focus:outline-none py-2 px-1"
          />

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 rounded-md text-white font-medium transition ${
              isValid
                ? 'bg-blue-500 hover:bg-[#0a1f44]'
                : 'bg-blue-300 cursor-not-allowed'
            }`}
          >
            Send
          </button>
        </form>
      </div>
      </div>
  );
};

export default ForgotPassword;
