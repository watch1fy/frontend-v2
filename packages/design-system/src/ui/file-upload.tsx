"use client";
import { Button } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";
import { FaTrashCan, FaVideo } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import { toast } from "sonner";

const FileUpload = () => {
  const [files, setFiles] = useState<any[]>([]);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const reqfiles: FileList | null = event.target.files;
    if (reqfiles?.length) {
      if (!reqfiles[0].type.startsWith("video/")) {
        toast.error("Please choose a valid video file", {
          duration: 5000,
          description: `The uploaded file had a type of "${reqfiles[0].type}", which is not a valid video file type.`,
        });
        return;
      }
      setFiles([...files, reqfiles[0]]);
    }
  };

  const handleFileDelete = (idx: number) => {
    setFiles((files) => {
      const updatedFiles = [...files];
      updatedFiles.splice(idx, 1);
      return updatedFiles;
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative gap-4 w-full min-w-72 p-4 border-2 border-dashed border-zinc-600 rounded-xl flex flex-col justify-center items-center">
        <input
          onChange={handleFileUpload}
          className="w-full h-full cursor-pointer absolute top-0 left-0 opacity-0 z-10"
          type="file"
        />
        <span className="text-zinc-300">Drop a video file</span>
        <Button
          variant="flat"
          color="primary"
          startContent={<HiOutlineUpload size={20} />}
        >
          Upload
        </Button>
      </div>
      <div className="w-full flex flex-col gap-2">
        {files?.map((file: File, idx: number) => (
          <div
            key={idx}
            className="flex flex-row justify-between items-center gap-2 rounded-xl bg-zinc-700 px-4 py-2 w-full"
          >
            <div className="flex flex-row items-center gap-2 w-1/2 sm:w-3/4">
              <FaVideo size={22} />
              <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {file.name}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Button
                isIconOnly
                variant="faded"
                color="danger"
                onClick={() => handleFileDelete(idx)}
              >
                <FaTrashCan size={20} />
              </Button>
              <Button isIconOnly variant="faded">
                <HiOutlineUpload size={20} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
