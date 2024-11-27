import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1 : {
        title: "Project One",
        image: projectOne,
        description: (
            <>
                <p>
                    This is Project One.
                </p>
            </>
        ),
        github: "https://github.com/cl33648",
        demo: "https://netlify.com"
    },
    2 : {
        title: "Project Two",
        image: projectTwo,
        description: (
            <>
                <p>
                    This is Project Two.
                </p>
            </>
        ),
        github: "https://github.com/cl33648",
        demo: "https://netlify.com"
    },
    3 : {
        title: "Project Three",
        image: projectThree,
        description: (
            <>
                <p>
                    This is Project Three.
                </p>
            </>
        ),
        github: "https://github.com/cl33648",
        demo: "https://netlify.com"
    }
}

export default projects;
