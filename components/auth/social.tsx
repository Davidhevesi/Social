"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "../ui/button";
export const Social = () => {
  return (
    <div className="flex justify-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="h-7 w-7" />
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaFacebookF className="h-6 w-6 text-blue-700   " />
      </Button>
    </div>
  );
};
