import {React} from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from "../Hooks/useFetch";
import {USERS_URL} from "../Components/utils/constants";
import doctorImage from "../assets/doctor.jpg";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const {id} = useParams()
    const {data: user, loading, error} = useFetch(`${USERS_URL}/${id}`);

    return (
        <>
            <h1>Detail Dentist id </h1>
            {!loading && (
                <div className="card" style={cardStyle}>
                    <img src={doctorImage} alt="User" style={imageStyle}/>
                    <div style={infoContainerStyle}>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Name:</span> {user.name}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Username:</span> {user.username}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Email:</span> {user.email}
                        </div>
                        <div style={infoStyle}>
                        <span
                            style={labelStyle}>Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Phone:</span> {user.phone}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Website:</span> {user.website}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Company:</span> {user.company.name}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Catch Phrase:</span> {user.company.catchPhrase}
                        </div>
                        <div style={infoStyle}>
                            <span style={labelStyle}>Business:</span> {user.company.bs}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Detail

const cardStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
};

const imageStyle = {
    width: '40%',
    marginRight: '20px',
};

const infoContainerStyle = {
    width: '60%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
};

const subtitleStyle = {
    fontSize: '16px',
    color: '#777',
    marginBottom: '10px',
};

const labelStyle = {
    fontWeight: 'bold',
};

const infoStyle = {
    marginBottom: '10px',
};