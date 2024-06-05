"use client";

import { Button } from "@watchify/design-system";
import { useEffect } from "react";
import { FaCircleExclamation } from "@watchify/design-system";

export default function Errorr({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-6">
      <div className="flex flex-row gap-4 justify-center items-center">
        <FaCircleExclamation size={24} />
        <p className="text-2xl">Something went wrong</p>
      </div>
      <Button
        variant="flat"
        color="primary"
        size="lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
