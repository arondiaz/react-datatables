const url = "https://gorest.co.in/public/v2/users";

export const getUsers = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return "Error";
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;
