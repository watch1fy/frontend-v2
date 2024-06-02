import { Socket, io } from "socket.io-client";

const ecsBackendDomain = process.env.NEXT_PUBLIC_ECS_DOMAIN as string;

export const syncSocket: Socket = io(`${ecsBackendDomain}/sync`, {
  autoConnect: false,
  withCredentials: true,
  transports: ["websocket"],
});

export const chatSocket: Socket = io(`${ecsBackendDomain}/chat`, {
  autoConnect: false,
  withCredentials: true,
  transports: ["websocket"],
});
