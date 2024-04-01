import { Switch } from "@/components/ui/switch";

export default function Banner() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-10xl py-24 sm:px-6 sm:py-32 lg:px-8 grid justify-items-center">
        <div className=" ">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Scheduling should be easy.
            <br />
            <h2 className="text-blue-500">Start free</h2>
          </h2>
          <div className="mt-10 flex justify-center">
            <a href="#" className="text-sm font-semibold leading-6">
              Billed monthly
            </a>
            <div className="flex items-center space-x-2 mx-2">
              <Switch id="airplane-mode" />
            </div>
            <a href="#" className="text-sm font-semibold leading-6 ">
              Billed annually
            </a>
            <span href="#" className="text-sm font-semibold leading-6 mx-3 ">
              Save 20% with annual plan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
