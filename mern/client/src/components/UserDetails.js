const UserDetails = ({user}) =>{
    return (
        <div className="user-details">
            <h4>Hi {user.first_name}</h4>
        </div>
    )
}

export default UserDetails