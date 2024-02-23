import {
  Modal,
  ModalContent,
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
  Divider
} from "@nextui-org/react";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { BsApple, BsGoogle, BsFacebook } from "react-icons/bs"

interface IAuthModal {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  isSignUpModal?: boolean
}

export default function AuthModal({ isOpen, onOpenChange, isSignUpModal = false } : IAuthModal) {

  const [isSignUp, setIsSignUp] = useState(isSignUpModal);

  return (
    <>
      <Modal
        isKeyboardDismissDisabled={true}
        isDismissable={false}
        isOpen={isOpen}
        size="sm"
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {
                  isSignUp
                    ? "Sign Up"
                    : "Sign In"
                }
                <span className="text-sm font-light">
                  {
                    isSignUp
                      ? "Already have an account?" 
                      : "Don't have an account?"
                  }
                  <span
                    className="text-primary-500 cursor-pointer"
                    onClick={() => setIsSignUp(!isSignUp)}>
                      &nbsp;&nbsp;
                    {
                      isSignUp
                        ? "Sign In"
                        : "Sign Up"
                    }
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
                    startContent={<BsGoogle />}>
                    Continue with Google
                  </Button>
                  <Button
                    color="default"
                    variant="bordered"
                    size="lg"
                    className="w-full"
                    startContent={<BsFacebook />}>
                    Continue with Facebook
                  </Button>
                  <Button
                    color="default"
                    variant="bordered"
                    size="lg"
                    className="w-full"
                    startContent={<BsApple />}>
                    Continue with Apple
                  </Button>
                </div>
                <Divider className="mb-4 mt-2"/>
                <Input
                  autoFocus
                  endContent={
                    <MdEmail />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <MdLock />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                {
                  !isSignUp ?
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox> 
                        <Link color="primary" href="#" size="sm">
                          Forgot password?
                        </Link>
                    </div> :
                    null
                }
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
