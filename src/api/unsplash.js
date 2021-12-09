import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9Cs7l4S1UqAe6F9EySM9BvWgJnM7HQKmkamW9OEvcvM",
  },
});
