"use client";
import { getCookie } from "@/lib/actions/auth";
import axios, { AxiosError } from "axios";
import LoadingPage from "../loading-page";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import VerificarionError from "./verification-err";
import PartyCreateCard from "./create-party";

const DemoPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [verified, setVerified] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>("Cheking for session");

  const handleSession = async () => {
    const auth_cookie = await getCookie("auth_session");

    if (!auth_cookie) {
      setLoadingText("No session found, creating a new guest session");
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/guestsignin`,
          {},
          { withCredentials: true },
        );
        const { user } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        setVerified(true);
      } catch (err: unknown) {
        if (err instanceof AxiosError || err instanceof Error)
          toast.error("Could not create session" || "", {
            duration: 5000,
            description: `There was an error while creating session. ${err.message}`,
          });
      }
      setIsLoading(false);
      return;
    }

    setLoadingText("Verifying the found session");
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/verifysession`, {
        withCredentials: true,
      });
      setVerified(true);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response?.status === 401) {
        toast.error("Existing session expired" || "", {
          duration: 1000 * 60 * 60,
          description:
            "Refresh the page to create new session. Note that a guest session and all it's data are valid only upto 1 day",
        });
        setIsLoading(false);
        return;
      }
      if (err instanceof AxiosError || err instanceof Error)
        toast.error("Session verification failed" || "", {
          duration: 5000,
          description: "There was an error while verifying the session",
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <LoadingPage label={loadingText} />;

  if (!verified) return <VerificarionError />;

  return <PartyCreateCard />;
};

export default DemoPage;
