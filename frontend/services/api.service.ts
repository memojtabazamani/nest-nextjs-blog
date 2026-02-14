import axios from "axios";
const API_URL = "http://localhost:3002/posts"; // Your NestJS Endpoint
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
