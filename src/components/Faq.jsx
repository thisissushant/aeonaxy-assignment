import {} from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Faq = () => {
  return (
    <div className="bg-gray-100 mx-10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Frequently Asked Question
          </h2>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[400px] m-2">
              <SelectValue placeholder="What happend at the end of my trial?" />
            </SelectTrigger>
            <SelectTrigger className="w-[400px] m-2">
              <SelectValue placeholder="Can we try Calendly with multiple user?" />
            </SelectTrigger>
            <SelectTrigger className="w-[400px] m-2">
              <SelectValue placeholder="What does the renwal process look like?" />
            </SelectTrigger>
            <SelectTrigger className="w-[400px] m-2">
              <SelectValue placeholder="How do i upgrade and downgrade?" />
            </SelectTrigger>
            <SelectTrigger className="w-[400px] m-2">
              <SelectValue placeholder="What are non profit organisation?" />
            </SelectTrigger>
            <SelectTrigger className="w-[400px] m-2">
              <SelectValue placeholder="What payment method you accept?" />
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
};
