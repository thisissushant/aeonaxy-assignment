import {} from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Footer = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Easy
            <br />
            <h2 className="text-blue-500">ahead</h2>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We take the work out of connection with other so you can accomplish
            more.
          </p>
        </div>
        <div>
          <h1 className="font-medium my-3">About</h1>
          <p className="font-light text-xs my-2">About Colendly</p>
          <p className="font-light text-xs my-2">Contact Us</p>
          <p className="font-light text-xs my-2">Newsroom</p>
          <p className="font-light text-xs my-2">Careers</p>
          <p className="font-light text-xs my-2">Security</p>
        </div>
        <div>
          <h1 className="font-medium my-3">Solutions</h1>
          <p className="font-light text-xs my-2">Coustmer success</p>
          <p className="font-light text-xs my-2">Recruting</p>
          <p className="font-light text-xs my-2">Sales</p>
          <p className="font-light text-xs my-2">Information technology</p>
          <p className="font-light text-xs my-2">Marketing</p>
        </div>
        <div>
          <h1 className="font-medium my-3">Popular Features</h1>
          <p className="font-light text-xs my-2">Embed Calendly</p>
          <p className="font-light text-xs my-2">Avalabilty</p>
          <p className="font-light text-xs my-2">Sending Notification</p>
          <p className="font-light text-xs my-2">Using Calendly Mobile</p>
          <p className="font-light text-xs my-2">Marketing</p>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Hindi</SelectItem>
              <SelectItem value="dark">Spanish</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-8 flex flex-row gap-4">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div>
          <h1 className="font-medium my-3">Support</h1>
          <p className="font-light text-xs my-2">Help Center</p>
          <p className="font-light text-xs my-2">Video Tutorial</p>
        </div>
        <div>
          <h1 className="font-medium my-3">Add-Ons</h1>
          <p className="font-light text-xs my-2">Download for Chrome</p>
          <p className="font-light text-xs my-2">Download for Firefox</p>
        </div>
        <div>
          <h1 className="font-medium my-3">Developers</h1>
          <p className="font-light text-xs my-2">Developer Tool</p>
        </div>
      </div>
    </div>
  );
};
