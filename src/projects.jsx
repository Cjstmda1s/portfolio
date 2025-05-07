import { Link } from 'react-router-dom';

export default function Projects() {
    return(
    <>
        <div className='format'>
            <div className='text'>
                <h2>My Projects</h2>
                <li>
                    <Link to={"/project1"} className="nav-link">To-Do List</Link>
                </li>
                <li>
                    <Link to={"/project2"} className="nav-link">Random Dog Picture Generator</Link>
                </li>
            </div>
        </div>
    </>
    )
}
