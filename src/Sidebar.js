import styles from './Sidebar.css';

function Sidebar () {
    return (
        <aside>
            <img src="profile.webp" alt="profile"/>
            <h2>
            Hello, I am Abdur Rehman Tariq!
            A Frontend Developer Specializing in React.Js
            </h2>
            <section class="overview">
                <h3>About Me</h3>

                    <ul>
                        <li>I have experience in many different forms of content-writing.</li>
                        <li>I am a unique creative minded individual with a calm judgemental attitude.</li>
                        <li>I can use Microsoft office with great proficiency (while applying intuitive formatting) and excel in computer science at a young age.</li>
                        <li>I have lived up to people's expectations and remain calm when working under pressure. I am tech savvy and understand basic SEO concepts.</li>
                    </ul>

            </section>
        </aside>
    )
};
export default Sidebar;