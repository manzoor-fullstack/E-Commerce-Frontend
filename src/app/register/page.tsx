"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function RegisterPage() {
  // initialize form
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="flex w-full gap-10">
        <div className="left-img w-1/2 bg-amber-200">
        <Image src="/signUp.jpg" alt="Description" width={500} height={500}
        className="w-full h-[600px] object-cover"
        />
        </div>

       <div className="right-form w-1/2 flex items-center justify-center px-8">
  <div className="w-full max-w-md">

    {/* Heading */}
    <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
    <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} className="rounded-none"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email / Phone Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email or Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Email or Phone Number" {...field} className="rounded-none"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} className="rounded-none"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Create Account Button */}
        <Button
          type="submit"
          className="w-full bg-red-500 rounded hover:bg-red-600 text-white py-6 text-lg"
        >
          Create Account
        </Button>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border-2 py-4 flex items-center justify-center gap-3 rounded"
        >
          <Image
            src="/Logo-google-icon-PNG.png"
            alt="google"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          {/* <FaGoogle size={20} /> */}
          <span className="text-sm">Sign up with Google</span>
        </button>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have account?{" "}
          <Link href="/login" className="font-semibold text-black ml-2 pb-0.5 border-b-2 border-black">
            Log in
          </Link>
        </p>
      </form>
    </Form>
  </div>
</div>

      </div>
    </div>
  );
}
