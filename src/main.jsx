import Info from "./info";
import Me from "./me"
import Edu from "./education"
import Experience from "./exprience"
import Skills from "./skills"
import Contact from "./contact";
const Main = () => {
    return (
        <main>
            <section className="info" >
                <Info />
            </section>
            <section className="me">
                <Me />
            </section>
            <section className="educ" id="edu">
                <h1>Education</h1>
                <Edu />
            </section>
            <section className="Exp" id="exp">
                <h1>Experience</h1>
                <Experience />
            </section>
            <section className="skill" id="sk">
                <h1>Skills</h1>
                <Skills />
            </section>
            <section className="contact" id="cont">
                <h1>Contact me</h1>
                <Contact />
            </section>

        </main>
     );
}
 
export default Main;