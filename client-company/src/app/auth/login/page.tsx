"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { Eye, EyeClosed, EyeOff, Facebook } from "lucide-react";
import { useState } from "react";

export default function UserLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Welcome to UniqueBusSewa
            </CardTitle>
            <CardDescription className="text-center text-sm">
              Login to access your account or sign up to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="" className="flex flex-col gap-4">
              {/* Email */}
              <div className="grid gap-2 ">
                <Label htmlFor="userEmail">Email</Label>
                <Input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="example@gmail.com"
                />
              </div>
              {/* Password */}
              <div className="grid gap-2 ">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="pr-10"
                  />
                  {/*eye button  */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-500"
              >
                Sign In
              </Button>
              {/* Social button */}
              <div className="flex flex-col sm:flex-row  gap-2 mt-2">
                <Button variant="outline" className="flex-1  bg-secondary">
                  Login With Facebook
                </Button>
                <Button className="flex-1 bg-secondary" variant="outline">
                  Login with Google
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center mt-2">
            <p className="text-sm text-gray-500 text-center">
              Don't have an account?
              <Link href="/auth/register" className="underline text-blue-800">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
