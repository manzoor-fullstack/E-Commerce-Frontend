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

export default function LogInPage() {
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
          <Image
            src="/signUp.jpg"
            alt="Description"
            width={500}
            height={500}
            className="w-full h-[600px] object-cover"
          />
        </div>

        <div className="right-form w-1/2 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="text-3xl font-semibold mb-2">Log in to Exclusive</h1>
            <p className="text-sm text-gray-600 mb-6">
              Enter your details below
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Email / Phone Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email or Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email or Phone Number"
                          {...field}
                          className="rounded-none"
                        />
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
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Create Account Button */}
                <div className="flex justify-between items-center ">
                  <div className="w-1/2">
                    <Button
                      type="submit"
                      className="bg-red-500 rounded hover:bg-red-600 text-white py-6 text-lg"
                    >
                      Log In
                    </Button>
                  </div>
                  <div className="w-1/2 text-red-500 text-end cursor-pointer font-medium">
                    <p>Forgot password?</p>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
