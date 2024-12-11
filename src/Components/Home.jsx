import { useState } from 'react';
import './Home.css'; // Link to the CSS file
import { FcList } from "react-icons/fc"; // Use icons from react-icons

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('toggleMenu function called'); // Log when the function is called
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            {/* Hamburger Menu Button */}
            <button onClick={toggleMenu} className="menu-button">
                <FcList />
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header" onClick={toggleMenu}>
                    <span>Menu</span>
                </div>
                <ul className="sidebar-menu">
                    <li className={isOpen ? "active" : ""}>Dashboard</li> {/* Example of active menu item */}
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Help</li>
                </ul>
            </div>
            {/* Log the current state */}
            {console.log('isOpen state:', isOpen)}
        </div>
    );
};

// Export the component
export default Home;
