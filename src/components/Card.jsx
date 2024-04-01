import {} from "react";
import { Button } from "./ui/button";

export default function Card() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-flow-col auto-cols-max md:auto-cols-min ">
        <div className=" relative w-40 h-80  m-2 rounded-lg bg-sky-50	">
          <div className="ml-2 mt-3">
            <h3>BASIC</h3>
            <div className="mt-5">
              <h1 className="font-bold">Always Free</h1>
              <p className="font-thin	">When you just want the basic</p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 ml-6">
            <Button className="bg-transparent text-blue-500 border-solid border-2 border-sky-500">
              Get Started
            </Button>
          </div>
        </div>
        <div className=" relative w-40 h-80  m-2 rounded-lg bg-sky-50	">
          <div className="ml-2 mt-3">
            <h3>ESSENTIALS</h3>
            <div className="mt-5">
              <h1 className="font-bold text-3xl">
                $8<span className="text-sm font-extralight">/seat/mo</span>
              </h1>

              <p className="font-thin	">
                When you want powerfull scheduling automation
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 ml-6">
            <Button className="bg-transparent text-blue-500 border-solid border-2 border-sky-500">
              Get Started
            </Button>
          </div>
        </div>
        <div className=" relative w-40 h-80  m-2 rounded-lg bg-sky-50	">
          <div className="ml-2 mt-3">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10 mb-4">
              Most Popular
            </span>
            <h3>PROFESSIONAL</h3>
            <div className="mt-5">
              <h1 className="font-bold text-3xl">
                $12<span className="text-sm font-extralight">/seat/mo</span>
              </h1>
              <p className="font-thin	">
                When you need coustomization, intigration and basic team feature
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 ml-6">
            <Button className="bg-blue-500 text-white border-solid border-2 border-sky-500">
              Get Started
            </Button>
          </div>
        </div>
        <div className=" relative w-40 h-80  m-2 rounded-lg bg-sky-50	">
          <div className="ml-2 mt-3">
            <h3>TEAMS</h3>
            <div className="mt-5">
              <h1 className="font-bold text-3xl">
                $16<span className="text-sm font-extralight">/seat/mo</span>
              </h1>

              <p className="font-thin	">
                When your team needs to align on a scheduling process and
                collabrate efficiently
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 ml-6">
            <Button className="bg-transparent text-blue-500 border-solid border-2 border-sky-500">
              Get Started
            </Button>
          </div>
        </div>
        <div className=" relative w-40 h-80  m-2 rounded-lg bg-gray-800 text-white	">
          <div className="ml-2 mt-3">
            <h3>ENTERPRISE</h3>
            <div className="mt-5">
              <h1 className="font-bold">Contact Us</h1>
              <p className="font-thin	">
                When your 30 member team need advance security, control and
                support
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 ml-6">
            <Button className="bg-transparent text-white border-solid border-2 border-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
