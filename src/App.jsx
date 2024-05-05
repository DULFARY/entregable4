import { useEffect, useState } from 'react'
import'./App.css'
import useCrud from "./hooks/useCrud"
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

    const [userEdit, setUserEdit] = useState ()
    const[formIsClose, setFormIsClose] = useState(true)
    const BASEURL = 'https://form-crud-2.onrender.com'

    const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

    useEffect(() => {
        getUsers('/users/')
    }, [])

    const handleOpenForm = () => (
        setFormIsClose (false)
    )


    return(
       <div className='app'>
        <header className='app_ _header'>
        <h1 className='app_ _title'>User crud</h1>
        </header>
        <button onClick={handleOpenForm} className='form_ _btn'>create new user</button>
        <FormUser
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}

        />
        <div className='user-container'>
            {
                users?.map(user => (
                    <UserCard
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    setUserEdit={setUserEdit}
                    handleOpenForm={handleOpenForm}
                    />
                ))
            }
        </div>
     </div>
    )
}

export default App