import { useState, useEffect } from "react";
import { columns } from "./Columns"
import { DataTable } from "./DataTable"
import { User } from "./types"


const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const resData = await res.json()
  return resData;
};

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, [])

  
  return (
    <div>
      <h1 className="mb-8 mt-0 text-5xl font-medium leading-tight text-primary">Users</h1>
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export default UsersList;
