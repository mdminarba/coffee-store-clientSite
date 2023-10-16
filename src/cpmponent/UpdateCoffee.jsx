

import { useLoaderData } from 'react-router-dom'
import swal from 'sweetalert'

const UpdateCoffee = () => {
  const allcoffee = useLoaderData()
  const {_id, coffee, quality, supplier, taste, category, details, photo } = allcoffee
  const handleUpdateCoffee = e => {
    e.preventDefault()

    const form = e.target;
    const coffee = form.coffee.value
    const quality = form.quality.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const updateCoffee = { coffee, quality, supplier, taste, category, details, photo }
    console.log(updateCoffee)


    // send data to the server

    fetch(`https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          swal({
            title: "Success!",
            text: "Coffe Updated Successfully!",
            icon: "success",
            button: "OK!"

          });
        }
        form.reset()
      })
  }

  
  return (
    <div className="bg-[#F4F3F0]  lg:px-20 px-5 py-3">
      <h2 className="text-3xl shadow font-bold text-center"> Add new Coffee:  {allcoffee.coffee}</h2>

      <form onSubmit={handleUpdateCoffee}>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Coffee name</span>
            </label>
            <label className="input-group">
              <input type="text" name="coffee" defaultValue={coffee} placeholder="Coffee name" required className="border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Available Quality</span>
            </label>
            <label className="">
              <input type="text" name="quality" defaultValue={quality} placeholder="Available Quality" required className=" border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Supplier</span>
            </label>
            <label className="">
              <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier " required className=" border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Taste</span>
            </label>
            <label className="">
              <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee tast" required className=" border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <label className="">
              <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" required className="border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold ">Details</span>
            </label>
            <label className="">
              <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo</span>
          </label>
          <label className="text-left">
            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo url" className="border-2 rounded-lg px-2    w-full py-3" />
          </label>
        </div>
        <button className="border-2 rounded-lg px-2  btn bg-zinc-300  border-zinc-600 w-full my-5 py-3">Update Coffee</button>
      </form>
    </div>
  )
}

export default UpdateCoffee