import axios from "axios";

export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    `${window.location.origin}/api/v1/openai/generate-content`,
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
