import React from 'react'

const Course = ({ name }) => {
    return (
        <div className='course'>
            <div className='section_heading'>
                <h3>{name}</h3>
            </div>
            <p className='section_para_2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
            </p>
            <h4>Schedule</h4>
            <ul className='about_courses courses_section'>
                <li>
                    <p>
                        <label>Week 1 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 2 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 3 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 4 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 5 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 6 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 7 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
                <li>
                    <p>
                        <label>Week 8 : </label>
                        what is crypto?  Principles of crypto! Decenteralization
                    </p>
                </li>
            </ul>
            <h4>Previous classes</h4>
            <p>Spring 2022</p>
        </div>
    )
}

export default Course