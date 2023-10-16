
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Users = () => {

  const loadedUser = useLoaderData()
  const [users, setuser] = useState(loadedUser)
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/users/${id}`, {

          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = users.filter(user => user._id !== id);
              setuser(remaining)

            }
          })

      }
    })
  }


  return (
    <div>
      <h2 className="">Users: {loadedUser.length}</h2>


      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-xl font-bold'>
              <th>Name </th>
              <th>Email </th>
              <th>Created At</th>
              <th>lastLoggedAt</th>
              <th>Update</th>
              <th>Delet</th>

            </tr>
          </thead>
          <tbody>
            {
              loadedUser.map(user =>
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td> {user.email}</td>
                  <td> {user.createAt}</td>
                  <td> {user.lastLoggedAt}</td>
                  <th><button className=' px-3 bg-pink-400 py-1 rounded'>Update</button></th>
                  <th><button onClick={() => handleDelete(user._id)} className=' px-3 py-1 bg-red-500 rounded'>X</button></th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users