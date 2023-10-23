const UserDetails = ({user}) =>{
    return (
        <div className="user-details">
            <h4>Hi {user.first_name}</h4>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
        </div>
    )
}

export default UserDetails