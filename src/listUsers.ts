import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
}

export async function listUsers() {
  const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return data;
}
