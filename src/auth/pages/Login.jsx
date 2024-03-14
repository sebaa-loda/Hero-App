import { useNavigate } from "react-router-dom"



export const Login = () => {

  const navigate = useNavigate()

  const Onlogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={Onlogin}>
        Login
      </button>
    </div>
  )
}
