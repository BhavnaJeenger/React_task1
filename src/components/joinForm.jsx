import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Schema
const schema = z
  .object({
    firstname: z.string().min(1, "First name is not Blank"),
    lastname: z.string().min(1, "Last name is not Blank"),
    company_name: z.string().min(1, "Company name is not Blank"),
    email: z
      .string()
      .email("Invalid email address")
      .regex(/\.(in|com)$/, "Email must be from '.in' or '.com' domain"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="hidden md:block bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start rounded-lg p-8">
          <div className="text-left">
            <h3 className="text-2xl text-[#0a1f44] font-bold uppercase leading-tight mb-4">
              Join <br /> the marketplace
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid md:grid-cols-3 items-center gap-4">
              <label className="text-xl font-medium text-[#0a1f44] col-span-1">Your name</label>
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div>
                  <input type="text" {...register("firstname")} placeholder="First name"
                    className="w-full border border-gray-300 rounded px-3 py-2" />
                  {errors.firstname && <p className="text-red-600 text-sm mt-1">{errors.firstname.message}</p>}
                </div>
                <div>
                  <input type="text" {...register("lastname")} placeholder="Last name"
                    className="w-full border border-gray-300 rounded px-3 py-2" />
                  {errors.lastname && <p className="text-red-600 text-sm mt-1">{errors.lastname.message}</p>}
                </div>
              </div>
            </div>

            {/* Company Name */}
            <div className="grid md:grid-cols-3 items-center gap-4">
              <label className="text-xl font-medium text-[#0a1f44] col-span-1">Company</label>
              <div className="col-span-2">
                <input type="text" {...register("company_name")} placeholder="Company name"
                  className="w-full border border-gray-300 rounded px-3 py-2" />
                {errors.company_name && <p className="text-red-600 text-sm mt-1">{errors.company_name.message}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="grid md:grid-cols-3 items-center gap-4">
              <label className="text-xl font-medium text-[#0a1f44] col-span-1">E-mail</label>
              <div className="col-span-2">
                <input type="email" {...register("email")} placeholder="Business email address"
                  className="w-full border border-gray-300 rounded px-3 py-2" />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid md:grid-cols-3 items-center gap-4">
              <label className="text-xl font-medium text-[#0a1f44] col-span-1">Password</label>
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div>
                  <input type="password" {...register("password")} placeholder="Enter password"
                    className="w-full border border-gray-300 rounded px-3 py-2" />
                  {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <div>
                  <input type="password" {...register("confirm")} placeholder="Confirm password"
                    className="w-full border border-gray-300 rounded px-3 py-2" />
                  {errors.confirm && <p className="text-red-600 text-sm mt-1">{errors.confirm.message}</p>}
                </div>
              </div>
            </div>

            <div className="flex mt-6 justify-end">
              <button type="submit" className="bg-gray-200 text-[#0b163d] px-6 py-3 font-semibold rounded-md transition hover:bg-blue-200">
                Join Polytrend
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
