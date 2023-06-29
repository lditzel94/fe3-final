import {React} from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from "../Hooks/useFetch";
import {USERS_URL} from "../Components/utils/constants";
import doctorImage from "../assets/doctor.jpg";
import {styled} from "styled-components";
import {useGlobalContext} from "../Components/utils/global.context";

const Detail = () => {
    const {id} = useParams()
    const {globalState: {theme}} = useGlobalContext()
    const {data: user, loading} = useFetch(`${USERS_URL}/${id}`);

    return (
        <>
            <Heading theme={theme} value="Dentist Detail"/>
            {!loading && (
                <DetailCard className="card">
                    <Img src={doctorImage} alt="User"/>
                    <InfoContainer>
                        <Info>
                            <InfoLabel>Name:</InfoLabel> {user.name}
                        </Info>
                        <Info>
                            <InfoLabel>Username:</InfoLabel> {user.username}
                        </Info>
                        <Info>
                            <InfoLabel>Email:</InfoLabel> {user.email}
                        </Info>
                        <Info>
                            <InfoLabel>Address:</InfoLabel> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </Info>
                        <Info>
                            <InfoLabel>Phone:</InfoLabel> {user.phone}
                        </Info>
                        <Info>
                            <InfoLabel>Website:</InfoLabel> {user.website}
                        </Info>
                        <Info>
                            <InfoLabel>Company:</InfoLabel> {user.company.name}
                        </Info>
                        <Info>
                            <InfoLabel>Catch Phrase:</InfoLabel> {user.company.catchPhrase}
                        </Info>
                        <Info>
                            <InfoLabel>Business:</InfoLabel> {user.company.bs}
                        </Info>
                    </InfoContainer>
                </DetailCard>
            )}
        </>
    )
}

export default Detail

const Heading = ({theme, value}) => (<h1 className={theme === "dark" ? "dark" : "light"}>{value}</h1>)

const DetailCard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
`

const Img = styled.img`
  width: 40%;
  margin-right: 20px;
`

const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Info = styled.div`
  margin-bottom: 10px;
`
const InfoLabel = styled.span`
  font-weight: bold;
`