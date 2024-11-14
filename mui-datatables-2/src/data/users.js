import axios from "axios";

export const getUsers = async () => {
  const url = "https://gorest.co.in/public/v2/users";

  const response = await axios(url);
  return response.data;
};
