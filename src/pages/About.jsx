import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import '../css/about.css'

const About = ({ isActive, setActive }) => {
    useEffect(() => {
        setActive('About')
    }, [setActive])

    return (
        <div className='page_'>
            <div className='sidebar_'>
                <Sidebar isActive={isActive} setActive={setActive} />
            </div>
            <div className='component_'>
                <div className='home_section'>
                    <div className='section_heading'>
                        <h1>About Cryptocurrency Club</h1>
                    </div>
                    <p className='section_para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam maiores repellendus est impedit aspernatur veritatis eius accusamus dolore, sint atque doloremque, minus suscipit blanditiis autem? Neque in exercitationem mollitia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque, facilis unde quam molestias dolore quaerat blanditiis aut dicta vel eligendi quod debitis quia necessitatibus natus facere dolores fugit! Quam!
                    </p>
                    <ul className='about_courses'>
                        <li>
                            <p>
                                <label>Crypto Course : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>Social Events : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>Speakere Events : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>Newsletter : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>Bounties : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>Job Opportunities : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>Web3 ATL : </label>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, reiciendis dolor aliquid ipsam dolore repellendus consequuntur assumenda, autem sit, ut nihil animi tempore ea fugit quis quidem similique ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dolorum nulla assumenda ab, dolorem laudantium, eaque necessitatibus eum repellendus, dicta libero beatae hic veritatis in nesciunt dignissimos consectetur culpa fugiat!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia doloremque quo, eum repudiandae eius neque tempore consectetur beatae, saepe voluptatibus aliquid, libero dolorem odio harum eligendi? Ex, possimus nostrum!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About