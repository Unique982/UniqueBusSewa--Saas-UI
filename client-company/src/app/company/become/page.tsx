"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { nepalData } from "@/lib/data/nepalData";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CreateCompany() {
  const [province, setProvince] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [isSelected, setIsSelected] = useState<string>("");

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-lg shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Create a Company
            </CardTitle>
            <CardDescription className="text-center">
              Fill out the form below to add your company to the SaaS platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="" className="flex flex-col gap-4">
              {/* Company Name */}
              <div className=" grid gap-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="UniqueBusSewa.pvt.ltd"
                />
              </div>
              {/* Company Email */}
              <div className="grid gap-2">
                <Label htmlFor="companyEmail">Company Email</Label>
                <Input
                  type="text"
                  name="companyEmail"
                  id="companyEmail"
                  placeholder="uniquebussewa@gmail.com"
                />
              </div>
              {/* Company PhoneNumber */}
              <div className="grid gap-2">
                <Label htmlFor="companyPhoneNumber">Company PhoneNumber</Label>
                <Input
                  type="text"
                  name="companyPhoneNumber"
                  id="companyPhoneNumber"
                  placeholder="977-999787878"
                />
              </div>
              {/* Company Address */}
              <div className="grid gap-2">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Dang-Nepal"
                />
              </div>
              {/* Province */}
              <div className="grid gap-2">
                <Label htmlFor="province">Province</Label>
                <Select
                  name="province"
                  onValueChange={setProvince}
                  value={province}
                >
                  <SelectTrigger
                    id="province"
                    className="w-full"
                    name="province"
                  >
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(nepalData).map((prov) => (
                      <SelectItem value={prov} key={prov}>
                        {prov}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* district */}
              <div className="grid gap-2">
                <Label htmlFor="district">District</Label>
                <Select
                  onValueChange={setDistrict}
                  value={district}
                  disabled={!province}
                >
                  <SelectTrigger id="district" className="w-full">
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    {province &&
                      Object.keys(
                        nepalData[province as keyof typeof nepalData]
                      ).map((dist) => (
                        <SelectItem key={dist} value={dist}>
                          {dist}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              {/* City */}
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Select
                  onValueChange={setCity}
                  value={city}
                  disabled={!district}
                >
                  <SelectTrigger id="city" className="w-full">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {province &&
                      district &&
                      (nepalData as any)[province][district].map(
                        (c: string) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        )
                      )}
                  </SelectContent>
                </Select>
              </div>
              {/* company regsiter number */}
              <div className="grid gap-2">
                <Label htmlFor="companyRegisterNumber">
                  Company RegisterNumber
                </Label>
                <Input
                  type="text"
                  name="companyRegisterNumber"
                  id="companyRegisterNumber"
                  placeholder="09998-090980-0998"
                />
              </div>
              {/* 
              {/* pan or vat number */}
              <div className="grid gap-2">
                <Label htmlFor="taxType">Tax Type</Label>
                <RadioGroup
                  onValueChange={(value) => setIsSelected(value)}
                  className="flex gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pan" id="pan" />
                    <Label htmlFor="taxType">Pan Number</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vat" id="vat" />
                    <Label htmlFor="vat" className="text-sm font-serif">
                      Vat Number
                    </Label>
                  </div>
                </RadioGroup>

                {/* PAN input */}
                {isSelected === "pan" && (
                  <div>
                    <Input id="panNumber" placeholder="Enter pan number" />
                  </div>
                )}

                {/* VAT input */}
                {isSelected === "vat" && (
                  <div>
                    <Input id="vatNumber" placeholder="Enter vat number" />
                  </div>
                )}
              </div>
              {/*  companyWebsite */}
              <div className="grid gap-2">
                <Label htmlFor="companyWebSite">Company Website</Label>
                <Input
                  type="url"
                  name="companyWebsite"
                  id="companyWebsite"
                  placeholder="uniquebussewa.com.np"
                />
              </div>
              {/* companyLogo   */}
              <div className="grid gap-2">
                <Label htmlFor="companyLogo">Company Logo</Label>
                <Input type="file" name="companyLogo" id="companyLogo" />
              </div>
              {/* Button create */}
              <Button className="bg-green-900 hover:bg-green-800">
                Create Company
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
