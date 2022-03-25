import axios from "axios";

const client = axios.create({
  baseURL: "https://breakingbadapi.com/api/",
});

export const getAllCharacters = async () => {
  const { data } = await client.get("characters");
  return data;
};
