import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function useSocket(userId, token) {
  const socketRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!userId || !token) return;

    // Initialize socket
    socketRef.current = io("http://localhost:8002", {
      autoConnect: true,
      auth: { userId, token },
    });

    // When connected
    socketRef.current.on("connect", () => {
      setIsConnected(true);
    });

    // When disconnected
    socketRef.current.on("disconnect", () => {
      setIsConnected(false);
    });

    // Cleanup
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [userId, token]);

  return { socket: socketRef.current, isConnected };
}
