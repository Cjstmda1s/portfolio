export default function Home() {
    return (
        <>
        <div className='format'>
            <div className='text'>

            {/* About Me Section */}

                <h2>
                    About Me
                </h2>

                <div className="container">

                    <img src="profile.jpg" width="300" alt="profile"></img>

                    <div className="text">
                        <p>
                            Aspiring web developer with passion for building responsive, user-friendly websites.
                        </p>

                        <table>
                            <tr>
                                <td>Level of Education</td>
                                <td>Institute Name</td>
                                <td>Major</td>
                            </tr>
                            <tr>
                                <td>Undergrad</td>
                                <td>California State University, Fullerton</td>
                                <td>Computer Science, B.S.</td>
                            </tr>
                        </table>

                        <p>
                            Outside of coding, I enjoy playing piano, videogames, and learning a new language. 
                            I can fluently speak Korean and English, and currently learning Japanese.
                        </p>

                        <a href="test.pdf" download className="nav-link">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
