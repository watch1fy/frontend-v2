import { Spinner } from "@nextui-org/react";
import React from "react";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { Toaster } from "sonner";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          title: "text-primary font-bold text-lg",
          toast:
            "w-full dark:bg-[#262629] bg-[#f5f5f5] px-4 pt-2 pb-3 shadow-xl rounded-lg dark:text-default flex flex-row justify-center items-center gap-4 border-1 dark:border-[#1e1e21] border-gray",
          description: "text-sm text-primary",
        },
      }}
      icons={{
        success: <FaCircleCheck size={24} />,
        error: <FaCircleExclamation size={24} />,
        loading: (
          <Spinner className="dark:text-black" color="default" size="sm" />
        ),
      }}
    />
  );
};

export default Toast;
