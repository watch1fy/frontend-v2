"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
import { BsGoogle, BsDiscord } from "react-icons/bs";
import SignInForm from "./signinForm";
import SignUpForm from "./signupForm";
import { signInWithGoogle, signInWithDiscord } from "@/lib/functions/auth";

interface IAuthModal {
  isOpen: boolean;
  // eslint-disable-next-line unused-imports/no-unused-vars
  onOpenChange: (isOpen: boolean) => void;
  isSignUpModal?: boolean;
}

export default function AuthModal({
  isOpen,
  onOpenChange,
  isSignUpModal = false,
}: IAuthModal) {
  const [isSignUp, setIsSignUp] = useState<boolean>(isSignUpModal);

  return (
    <>
      <Modal
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="sm"
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {isSignUp ? "Sign Up" : "Sign In"}
            <span className="text-sm font-light">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span
                className="text-primary-500 cursor-pointer"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                &nbsp;&nbsp;
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </span>
          </ModalHeader>
          <ModalBody>
            <div className="py-2 px-0 flex flex-col align-middle justify-center gap-2">
              <Button
                color="default"
                variant="bordered"
                size="lg"
                className="w-full"
                startContent={<BsGoogle size={16} />}
                onClick={signInWithGoogle}
              >
                Continue with Google
              </Button>
              <Button
                color="default"
                variant="bordered"
                size="lg"
                className="w-full"
                startContent={<BsDiscord size={18} />}
                onClick={signInWithDiscord}
              >
                Continue with Discord
              </Button>
            </div>
            <Divider className="mb-4 mt-2" />
            {isSignUp ? <SignUpForm /> : <SignInForm />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
