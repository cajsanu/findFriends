import { Users } from "../components/Users"

export const UsersPage = () => {
    return (
        <>
        <div>
            <h1>All users</h1>
            <p>You can filter users based on the city they live in</p>
        </div>
        <div>
            <Users />
        </div>
        </>
    )
}