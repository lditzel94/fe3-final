import {React} from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from "../Hooks/useFetch";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const {id} = useParams()
    const {data: user, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    console.log(`User id: ${id}`)
    console.log("User: ", user)

    return (
        <>
            <h1>Detail Dentist id </h1>
            <div className='container'>
                {!loading && (
                    <>
                        <h2>{user.name}</h2>
                        <p>
                            <strong>Username:</strong> {user.username}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </p>
                        <p>
                            <strong>Phone:</strong> {user.phone}
                        </p>
                        <p>
                            <strong>Website:</strong> {user.website}
                        </p>
                        <p>
                            <strong>Company:</strong> {user.company.name}
                        </p>
                    </>
                )}
            </div>
        </>
    )
}

export default Detail