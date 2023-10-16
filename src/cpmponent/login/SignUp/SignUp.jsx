
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import swal from 'sweetalert';


const SignUp = () => {
  const { createUser } = useContext(AuthContext)

  const [success, setsuccess] = useState('')
  const [registerError, setregisterError] = useState('');
  const [showpassword, setshowpassword] = useState(false);
  const emailRef = useRef(null)
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email, password);
    setregisterError('');
    setsuccess("");
    if (password.legnth < 6) {
      setregisterError('password shuld vbe at least 6 characters or longer')
      return
    }
    else if (!/[A-Z]/.test(password)) {
      setregisterError('Your password shold have at least one upper case characters')
      return
    }
    createUser(email, password, name)
      .then(result => {
        console.log(result.user)
        setsuccess('User Createt Successfully.')
        const createAt =result.user?.metadata?.creationTime;

        const user = {email,name,createAt:createAt};
        fetch('https://coffee-store-sever-bhan2mssx-md-minar-babus-projects.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
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
      })
      .catch(error => {
        console.error(error)
        setregisterError(error.message)
      })


  }
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">SignUp now!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text"
                    name="name"
                    ref={emailRef}
                    placeholder="Name"
                    required className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="email"
                    required className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" required className="input input-bordered" />

                  <span className='relative -top-8  left-72 w-6' onClick={() => setshowpassword(!showpassword)}>{
                    showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }</span>
                </div>
                {
                  registerError && <h2 className=" text-red-600">{registerError}</h2>
                }
                {
                  success && <h2 className="text-emerald-800 font-bold">{success}</h2>
                }
                <label className="label">
                  <p className="font-medium"> Already have an account<Link className="btn btn-sm btn-primary  text-white " to="/login">SingIn</Link></p>

                </label>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">SingUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp