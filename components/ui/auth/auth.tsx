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
import { toast } from "sonner";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

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

const signInWithGoogle = async () => {
  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
  if (error) {
    toast.error(error.message || "", {
      duration: 5000,
      description: `Could not complete sign up with google`,
    });
    return;
  }
};

const signInWithDiscord = async () => {
  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
  if (error) {
    toast.error(error.message || "", {
      duration: 5000,
      description: `Could not complete sign up with google`,
    });
    return;
  }
};
