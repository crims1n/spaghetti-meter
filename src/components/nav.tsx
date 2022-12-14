import { useContext, useState } from "preact/hooks";
import AppContext from "../utilities/appcontext";
import Login from "./login";
import Error from "./error";

export default function Nav() {
    const context = useContext(AppContext);
    const [badLogins, incrementBadLogins] = useState(0);
    return (
        <div className="self navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block h-5 w-5 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <div
                        tabIndex={0}
                        className="dropdown-content menu rounded-box menu-compact mt-3 bg-neutral p-2 shadow"
                    >
                        <Login
                            isLoggedIn={context.isLoggedIn}
                            password={context.password}
                            badLogins={badLogins}
                            setPassword={context.setPassword}
                            setLogin={context.setLogin}
                            incrementBadLogins={incrementBadLogins}
                        />
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <h1 className="text-4xl font-bold">🍝 Spaghetti Meter 🍝</h1>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-5 w-5 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                    </svg>
                </button>
            </div>
            <Error errors={badLogins} />
        </div>
    );
}
