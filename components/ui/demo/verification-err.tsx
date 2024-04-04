import { Button } from "@nextui-org/button";
import Image from "next/image";

const VerificarionError = () => {
  return (
    <div className="max-w-7xl flex-grow w-full h-full flex p-8 flex-col justify-center items-center gap-4">
      <Image
        priority
        src="/illustrations/unverified.svg"
        alt="Verification Error"
        height={450}
        width={450}
      />
      <span className="text-xl">
        Could not verify session. Please refresh to try again
      </span>
      <Button color="primary" variant="ghost" onClick={() => location.reload()}>
        Refresh
      </Button>
    </div>
  );
};

export default VerificarionError;
