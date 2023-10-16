
import swal from 'sweetalert';
const AddCoffee = () => {

  const handleAddCoffee = e => {
    e.preventDefault()

    const form = e.target;
    const coffee = form.coffee.value
    const quality = form.quality.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const newCoffee = { coffee, quality, supplier, taste, category, details, photo }
    console.log(newCoffee)


    // send data to the server

    fetch('https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          swal({
            title: "Success!",
            text: "Coffee Added Successfully!",
            icon: "success",
            button: "OK!"
      
          });  
        }
        form.reset()
      })
  }



  return (
    <div className="bg-[#F4F3F0]  lg:px-20 px-5 py-3">
      <h2 className="text-3xl shadow font-bold text-center"> Add new Coffee</h2>

      <p className=" my-2 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consectetur a sapiente aliquam quo officia voluptates blanditiis sint, veniam magnam eius! Enim
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consectetur a sapiente aliquam quo officia voluptates blanditiis sint, veniam magnam eius! Enim Dol explicabo obcaecati inventore beatae reprehenderit delectus unde quam  </p>
      <form onSubmit={handleAddCoffee}>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Coffee name</span>
            </label>
            <label className="">
              <input type="text" name="coffee" placeholder="Coffee name" required className="border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Available Quality</span>
            </label>
            <label className="">
              <input type="text" name="quality" placeholder="Available Quality" required className=" border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Supplier</span>
            </label>
            <label className="">
              <input type="text" name="supplier" placeholder="Enter coffee supplier " required  className=" border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Taste</span>
            </label>
            <label className="">
              <input type="text" name="taste" placeholder="Enter coffee tast" required className=" border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <label className="">
              <input type="text" name="category" placeholder="Enter coffee category" required className="border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold ">Details</span>
            </label>
            <label className="">
              <input type="text" name="details" placeholder="Enter coffee details" className="border-2 rounded-lg px-2    w-full py-3" />
            </label>
          </div>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo</span>
          </label>
          <label className="text-left">
            <input type="text" name="photo" placeholder="Enter photo url" className="border-2 rounded-lg px-2    w-full py-3" />
          </label>
        </div>


        <button className="border-2 rounded-lg px-2  btn bg-zinc-300  border-zinc-600 w-full my-5 py-3">Add Coffee</button>
      </form>
    </div>
  )
}

export default AddCoffee