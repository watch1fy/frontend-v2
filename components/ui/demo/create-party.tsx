"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Avatar,
  Spacer,
  Tooltip,
  Switch,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import FileUpload from "../file-upload";

const PartyCreateCard = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);

  return (
    <div className="max-w-7xl flex-grow w-full h-full flex p-8 flex-col justify-center items-center gap-4">
      <Card className="w-full max-w-[450px]">
        <CardHeader className="text-3xl sm:text-4xl w-full flex flex-row justify-between items-center">
          Party Settings
          <Tooltip content="You" delay={0} size="lg">
            <div className="flex flex-row gap-4 items-center cursor-default">
              <span className="text-lg text-zinc-400 hidden sm:block">
                {user?.name}
              </span>
              <Avatar size="sm" src={user?.avatarUrl} />
            </div>
          </Tooltip>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-end gap-4">
            <div className="flex flex-col h-full w-full justify-between">
              <span className="text-2xl text-primary">Media</span>
              <Spacer y={10} />
              <div className="flex flex-row gap-4 items-center">
                <Input
                  placeholder="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/high.mp4"
                  disabled
                  size="sm"
                />
              </div>
            </div>
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/e/e5/Sprite_Fright-movie_poster.jpg"
              }
              alt="Sprite fright image"
              className="rounded-lg"
              height={120}
              width={0.66 * 120}
            />
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <div className="flex flex-row gap-2 justify-center items-center w-full">
              <Divider className="w-1/6" />
              Or
              <Divider className="w-1/6" />
            </div>
            <FileUpload />
          </div>
          <Divider />
          <div className="w-full">
            <span className="text-2xl text-primary">Settings</span>
            <Spacer y={2} />
            <div className="flex flex-col gap-4 items-start">
              <Tooltip content="Partner will always be able to play/pause">
                <div>
                  <Switch isDisabled defaultSelected>
                    Allow partner to play/pause
                  </Switch>
                </div>
              </Tooltip>
              <Switch>Allow partner to seek</Switch>
              <Switch>Allow partner to rewind/fast-forward</Switch>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row justify-end w-full">
            <Button color="primary" variant="solid" className="w-full">
              Create Party
            </Button>
          </div>
        </CardBody>
        <CardFooter className="text-sm text-zinc-500 flex items-start justify-center">
          <span className="text-primary">*</span>
          This is a guest session. Parties and all it&apos;s data (including
          user uploaded video) in guest session only lasts for one day.
        </CardFooter>
      </Card>
    </div>
  );
};

export default PartyCreateCard;
