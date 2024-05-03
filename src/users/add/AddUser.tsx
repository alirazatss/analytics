import { AddUserForm } from "./AddUserForm"
import { appInsights} from '../../ApplicationInsightsService';

export const AddUser = () => {
  return (
    <div>
      <h1 className="mb-8 mt-0 text-5xl font-medium leading-tight text-primary">Add User</h1>
      <AddUserForm onSubmit={(data) => console.log(data)} onTrackUpload={() => appInsights.trackEvent({ name: 'fileUploaded' }) }/>
    </div>
  )
}

export default AddUser