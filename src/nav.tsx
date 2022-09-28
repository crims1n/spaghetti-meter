import { useState } from "preact/hooks";

export default function Nav() {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-square">
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
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-neutral p-2 shadow"
                    >
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a>Login</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl normal-case">Spaghetti Meter</a>
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
        </div>
    );
}
