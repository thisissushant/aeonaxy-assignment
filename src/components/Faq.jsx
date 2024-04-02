import {} from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Faq = () => {
  return (
    <div className="bg-gray-100 mx-2 sm:mx-10 py-10 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 sm:gap-y-20 px-2 sm:px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-full sm:w-[400px] m-2">
              <SelectValue placeholder="What happened at the end of my trial?" />
            </SelectTrigger>
            <SelectTrigger className="w-full sm:w-[400px] m-2">
              <SelectValue placeholder="Can we try Calendly with multiple users?" />
            </SelectTrigger>
            <SelectTrigger className="w-full sm:w-[400px] m-2">
              <SelectValue placeholder="What does the renewal process look like?" />
            </SelectTrigger>
            <SelectTrigger className="w-full sm:w-[400px] m-2">
              <SelectValue placeholder="How do I upgrade and downgrade?" />
            </SelectTrigger>
            <SelectTrigger className="w-full sm:w-[400px] m-2">
              <SelectValue placeholder="What are non-profit organizations?" />
            </SelectTrigger>
            <SelectTrigger className="w-full sm:w-[400px] m-2">
              <SelectValue placeholder="What payment methods do you accept?" />
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
};
