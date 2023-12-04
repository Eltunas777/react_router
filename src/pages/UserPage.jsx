import {useParams} from 'react-router-dom'

function UserPage() {

    const  {id} = useParams()

    return (
    <div>
        <h1>User</h1>
        <h1>{id}</h1>        
    </div>
  )
}

export default UserPage