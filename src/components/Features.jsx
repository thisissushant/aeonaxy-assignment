import {} from "react";
import { Button } from "./ui/button";

export const Features = () => {
  return (
    <div className="grid grid-cols-7 gap-4 mx-10 m-4">
      <div className="col-start-1 col-end-3">
        <h3 className="">BASIC</h3>
        <h1 className="font-bold">Features by Plan</h1>
        <p className="font-thin ">
          Find the subscription that makes the most sense for you or your team
        </p>
      </div>
      <div className="border-solid border-2 rounded-lg p-3">
        <h3 className="my-4">BASIC</h3>
        <h1 className="font-bold text-xl my-4">Free</h1>
        <Button className="bg-transparent text-black border-solid border-2 border-black my-4">
          Sign Up
        </Button>
      </div>
      <div className="border-solid border-2 rounded-lg p-3">
        <h3 className="my-4">ESSENTIAL</h3>
        <h1 className="font-bold text-xl my-4">$8</h1>
        <Button className="bg-transparent text-black border-solid border-2 border-black my-4">
          Sign Up
        </Button>
      </div>
      <div className="border-solid border-2 rounded-lg p-3">
        <h3 className="my-4">PROFESSIONAL</h3>
        <h1 className="font-bold text-xl my-4">$12</h1>
        <Button className="bg-blue-500 text-white border-solid border-2 border-blue-800 my-4">
          Sign Up
        </Button>
      </div>
      <div className="border-solid border-2 rounded-lg p-3">
        <h3 className="my-4">TEAM</h3>
        <h1 className="font-bold text-xl my-4">$16</h1>
        <Button className="bg-transparent text-black border-solid border-2 border-black my-4">
          Sign Up
        </Button>
      </div>
      <div className="border-solid border-2 rounded-lg p-3">
        <h3 className="my-4">ENTERPRISE</h3>
        <h1 className="font-bold text-xl my-4">-</h1>
        <Button className="bg-transparent text-black border-solid border-2 border-black my-4">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
