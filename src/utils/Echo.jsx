import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "reverb",
  key: import.meta.env.VITE_APP_REVERB_APP_KEY,
  authorizer: (channel) => {
    return {
      authorize: (socketId, callback) => {
        fetch("http://127.0.0.1:8000/api/broadcasting/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_APP_BROADCASTING_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            socket_id: socketId,
            channel_name: channel.name,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            callback(false, data);
          })
          .catch((error) => {
            callback(true, error);
          });
        // axios
        //   .post("/api/broadcasting/auth", {
        //     socket_id: socketId,
        //     channel_name: channel.name,
        //   })
        //   .then((response) => {
        //     callback(false, response.data);
        //   })
        //   .catch((error) => {
        //     callback(true, error);
        //   });
      },
    };
  },
  wsHost: import.meta.env.VITE_APP_REVERB_HOST,
  wsPort: import.meta.env.VITE_APP_REVERB_PORT ?? 80,
  wssPort: import.meta.env.VITE_APP_REVERB_PORT ?? 443,
  forceTLS: (import.meta.env.VITE_APP_REVERB_SCHEME ?? "https") === "https",
  enabledTransports: ["ws", "wss"],
});

export default echo;
