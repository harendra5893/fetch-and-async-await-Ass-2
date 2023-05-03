import './UserCard.css';
import { useState } from 'react';
function UserCard() {

    const [profile, setProfile] = useState('0')
    const [count, setCount] = useState(0)

    async function fetchData() {
        try {
            const response = await fetch('https://reqres.in/api/users/')
            const data = await response.json();
            if (count === 6) {
                setCount(0);
            }
            else {
                setCount(count + 1);
                setProfile(data.data[count]);
            }
        }

        catch (error) {
            console.log('this is the' + error);
        }

    }


    return (
        <>
            <div className="profile-card">
                <div className="card-info">

                    <img src={profile.avatar} alt="" />
                    <h5>{profile.id}</h5>
                    <h3>{profile.first_name}</h3>
                    <h3>{profile.last_name}</h3>
                    <p>{profile.email}</p>
                    <button onClick={fetchData}>Get Users</button>
                    
                </div>
            </div>
        </>
    )
}
export default UserCard;