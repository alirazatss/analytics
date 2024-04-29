import { AddUserForm } from "./AddUserForm"

export const AddUser = () => {
  return (
    <div>
      <AddUserForm onSubmit={(data) => console.log(data)} />
    </div>
  )
}

export default AddUser