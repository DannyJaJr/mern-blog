import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        // w-full to create the with of the navbar
        <nav className="border-b-4 border-blue-700 text-center fixed top-0  w-full bg-green-600 font-bold text-lg text-white">
            <ul>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/" className="pl-6 pr-8">Home</Link>
                </li>

                <li className="inline-block pt-4 pb-4">
                    <Link to="/about" className="pl-6 pr-8">About</Link>
                </li>

                <li className="inline-block pt-4 pb-4">
                    <Link to="/articles-list" className="pl-6 pr-8">Article List</Link>
                </li>

                {/* <li className="inline-block pt-4 pb-4">
                    <Link to="/article" className="pl-6 pr-8">Article</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default NavBar
