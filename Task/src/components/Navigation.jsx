import { useAuth0 } from "@auth0/auth0-react";
const Navigation = () => {
    const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/Logo4.png" alt="logo" />
                </div>
                <ul>
                    <li className="item"><a href="#home">Home</a></li>
                    <li className="item"><a href="#Features">Features</a></li>
                    <li className="item"><a href="#pricing">Pricing</a></li>
                    <li className="item"><a href="#contact-us">Contact Us</a></li>
                    <li>
                        {
                            isAuthenticated && <p id="auth">
                                {user.name}
                            </p>
                        }
                    </li>
                    {
                        isAuthenticated ? (
                            <li>
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button>
                            </li>
                        ) : (
                            <li><button onClick={() => loginWithRedirect()}>Log In</button></li>

                        )
                    }


                </ul>

            </nav>


        </div>
    );
};
export default Navigation;