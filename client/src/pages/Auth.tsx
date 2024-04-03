import React from 'react'
import Register from '../Components/RegisterForm'
import Login from '../Components/LoginForm'

const Auth = () => {
    const [register, setRegister] = React.useState(true)

    const handleToggleRegister = () => {
        setRegister(!register)
    }

    return (
        <div>
            {register ?
            <Register handleToggleRegister={handleToggleRegister} />
          :
            <Login handleToggleRegister={handleToggleRegister} />
            }


        </div>
    )
}

export default Auth