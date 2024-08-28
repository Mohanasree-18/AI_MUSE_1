import axios from "axios";

export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    "https://ai-muse-1.vercel.app/generate-content",
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
