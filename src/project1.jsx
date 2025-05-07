import { Link } from 'react-router-dom';

export default function Project1(){
    return(
        <>
            <div className='format'>
                <div className='text'>
                    <h2>
                        To-Do List
                    </h2>

                    <a href="https://github.com/Cjstmda1s/to-do-list" className="nav-link">Github Page</a>

                    <div className="container">
                        <img src="/todoSS.png" alt="todoscreenshot" />
                            <div className="text">
                                <p>
                                    Simple and interactive web application designed to help users manage their tasks. 
                                    Built using React, it allows user to add, delete, and mark tesks as complete
                                    in real time without needing to reload the page. The app uses React components
                                    to break down the UI into reusable elements, such as the task input form, task list,
                                    and individual task items.
                                </p>
                                <p>
                                    The project originally started with basic HTML, CSS, and JavaScript, and was later
                                    refactored into a React application to improve modularity and state management.
                                </p>
                                <p>
                                    I had hard time optimizing the number of components since the To-Do list was first project done in
                                    Javascript and React; things got messy and unnecessary components were added so I was a bit of a nuisance
                                    trying to organize components.
                                </p>
                            </div>
                        </div>  
                    <Link to="/projects" className="nav-link">Back to Projects</Link> 
                </div>
            </div>
        </>
    )
}   