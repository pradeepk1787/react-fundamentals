function Profile({name, profession, age, details}){
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Profession: {profession}</p>
            <p>Age: {age}</p>
            <p>Experience: {details.exp}</p>
            <p>Contact: {details.contact}</p>

        </div>
    )
}

export default Profile;