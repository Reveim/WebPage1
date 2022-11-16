import React from 'react';

const About = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div
                className='d-flex flex-column mt-5'
                
            >
                <h1 >Welcome!<br />That's an about page</h1>
                <h2 >This site is for educational purposes<br />
                    On the subject "Web-technologies"
                </h2>
                <h3>Performed by a student of the group BIZ-B19 Piven Nikita<br /></h3>

            </div>
        <div style={{margin:'100px'}}>
        <h1 style={{color:'lime', background:'#343A40'}}> In order to VIEW your STATISTICS you need to LOG IN</h1>
        </div>
        </div >
    );
};


export default About;