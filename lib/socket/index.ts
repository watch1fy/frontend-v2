import { Socket, io } from "socket.io-client";

export const syncSocket: Socket = io("http://192.168.29.242:8080/sync", { autoConnect: false });
export const chatSocket: Socket = io("http://192.168.29.242:8080/sync");