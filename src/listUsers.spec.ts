import { expect, it, vi } from "vitest";
import { listUsers } from "./listUsers";
import axios from "axios";

vi.mock('axios');

const getMock = vi.mocked(axios.get).mockResolvedValue({
  data: [
    {
      id: 1,
      name: 'Matheus',
      email: 'matheus@mail.com'
    }
  ]
});

it('should call get correctly', async () => {
  await listUsers();
  expect(getMock).toHaveBeenCalledOnce();
  expect(getMock).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
});

it('should return users on success', async () => {
  const users = await listUsers();
  expect(users).toEqual([{
    id: 1,
    name: 'Matheus',
    email: 'matheus@mail.com'
  }]);
});
