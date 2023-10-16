
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffe, coffees, setCoffees }) => {
    const { _id, coffee, quality, supplier, taste, photo } = coffe;

    const handleDelete = _id => {
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


                fetch(`https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/coffee/${_id}`, {

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
                                const remaining = coffees.filter(user => user._id !== _id);
                                setCoffees(remaining)
                               
                            }
                    })

            }
        })


    }
    return (
        <div>
            <div className="card lg:card-side p-5 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Album" /></figure>
                <div className="flex w-full justify-between mx-10">

                    <div className="">
                        <h2 className="card-title">{coffee}!</h2>
                        <p>{quality}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>

                    </div>
                    <div className="">
                        <div className="flex flex-col mt-5">
                            <button className=" p-1 rounded-sm bg-green-500 ">View</button>
                            <Link to={`updateCoffee/${_id}`}><button className=" py-1 px-3 bg-yellow-400  rounded-sm my-3">Edit</button></Link>

                            <button onClick={() => handleDelete(_id)} className=" p-1 rounded-sm bg-red-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CoffeeCard
