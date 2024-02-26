import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <button onClick={() => logout()} className="bg-[#fcc688] hover:bg-[#baa042] text-black font-bold py-2 px-4 rounded
          hover:shadow-lg hover:transform hover:translate-y-[-2px] transition duration-300 ease-in-out">
                Sign-Out
            </button>
        )
    )
}

export default LogoutButton