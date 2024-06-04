"use client";
import { Divider, Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { AuthModal } from "../auth";

function CTA() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="flex flex-col items-center justify-center rounded-3xl">
      <Divider className="mb-8" />
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-row gap-4 justify-between w-full items-start">
          <p className="text-2xl md:text-3xl font-medium">Join Watchify Now!</p>
          <Button
            color="primary"
            variant="ghost"
            size="md"
            className="w-[35%] md:flex hidden"
            onPress={onOpen}
          >
            Sign Up
          </Button>
          <Button
            color="primary"
            variant="ghost"
            size="sm"
            className="md:hidden flex"
            onPress={onOpen}
          >
            Sign Up
          </Button>
          <AuthModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            isSignUpModal={true}
          />
        </div>
        <p className="text-md md:text-xl text-center">
          Sign up for Watchify and start syncing your watch parties!
        </p>
      </div>
      <Divider id="about-anchor" className="mt-8" />
    </section>
  );
}

export default CTA;
