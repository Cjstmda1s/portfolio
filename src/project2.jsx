import { Link } from 'react-router-dom';

export default function Project2(){
    return(
        <>
            <div className='format'>
                <div className='text'>
                    <h2>
                        Random Dog Picture Generator
                    </h2>

                    <a href="https://github.com/Cjstmda1s/get-random-dog" className="nav-link">Github Page</a>

                    <div className="container">
                        <img src="/dog.png" alt="todoscreenshot" />
                            <div className="text">
                                <p>
                                    web application designed to display random dog pictures on demand.
                                    Built using React, it fetches images from the Dog CEO API and updates the display
                                    instantly when the user clicks a button—no page reload required. The app uses React
                                    components to structure the UI, including the image container, fetch button, and loading indicator.
                                </p>
                                <p>
                                    The project originally started with basic HTML, CSS, and JavaScript, and was later
                                    refactored into a React application to improve modularity and state management.
                                </p>
                                <p>
                                    I faced challenges understanding how asynchronous API calls worked within React,
                                    especially with useEffect and useState. There were also issues managing the loading state,
                                    but after experimenting and reorganizing some code, I eventually got the app to work.
                                </p>
                            </div>
                        </div>
                    <Link to="/projects" className="nav-link">Back to Projects</Link>  
                </div>
            </div>
        </>
    )
}   