import {} from "react";
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section className="py-6 bg-blue-950 mx-10 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
          Easy access for easy booking
        </h1>
        <p className="text-xl font-thin text-center">
          Share your calendly link right from your browser so you can schedule
          meeting without the back and fourth
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
          <Button className="bg-blue-500">Start for free</Button>
          <Button className="bg-transparent border-2 border-white">
            Talk with sales
          </Button>
        </div>
      </div>
    </section>
  );
};
