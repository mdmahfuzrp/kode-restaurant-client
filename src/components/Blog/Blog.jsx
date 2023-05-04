import React from "react";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import { useNavigation } from "react-router-dom";

const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: "landscape",
        unit: "px",
        format: [window.innerWidth * 0.55, window.innerHeight],
    };

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <h1>Loading</h1>;
    }
    return (
        <div className="my-5 container mx-auto">
            <div className="m-3 lg:w-2/4 mx-auto">
                <div className="md:text-center">
                    <Pdf
                        targetRef={ref}
                        filename="blog.pdf"
                        options={options}
                        x={0}
                        y={0}
                        scale={1}
                    >
                        {({ toPdf }) => (
                            <div>
                                <div className=" col-md-12 text-center mt-4">
                                    <button
                                        className="btn-primary flex items-center justify-center  mx-auto"
                                        onClick={toPdf}
                                    >
                                        <FaDownload className="me-3" />
                                        Download This Blog page
                                    </button>
                                </div>
                            </div>
                        )}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <div className="flex flex-col justify-start items-start my-5 py-3">
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#910000] p-2 text-white rounded font-semibold">
                                Question
                            </span>
                            <h1 className="ms-2 my-2">
                                Tell us the differences between uncontrolled and controlled
                                components ?
                            </h1>
                        </div>
                        <div className="md:flex items-center  my-1">
                            <span className="bg-[#e19999] p-2 text-white rounded font-semibold">
                                Answer
                            </span>
                            <h1 className="ms-2 my-2">
                                <span className="font-bold underline">Uncontrolled </span>
                                The component state is managed internally by the DOM.
                                <span className="font-bold underline">Controlled </span>
                                The component state is managed by the React component itself,
                                rather than the DOM.
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start my-5 py-3">
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#910000] p-2 text-white rounded font-semibold">
                                Question
                            </span>
                            <h1 className="ms-2 my-2">
                                How to validate React props using PropTypes ?
                            </h1>
                        </div>
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#e19999] p-2 text-white rounded font-semibold">
                                Answer
                            </span>
                            <h1 className="ms-2 my-2">
                                Add a propTypes object to your component class, with keys for
                                each prop and their corresponding PropTypes. When a prop fails
                                validation, React will log a warning in the console. You can
                                also customize the error message by adding a propType message to
                                your PropTypes .
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start my-5 py-3">
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#910000] p-2 text-white rounded font-semibold">
                                Question
                            </span>
                            <h1 className="ms-2 my-2">
                                Tell us the difference between nodejs and express js.
                            </h1>
                        </div>
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#e19999] p-2 text-white rounded font-semibold">
                                Answer
                            </span>
                            <h1 className="ms-2 my-2">
                                <span className="font-bold underline">Node js</span>
                                Is a runtime environment for executing JavaScript code outside
                                of a browser .
                                <span className="font-bold underline">Express js </span>
                                Is a web framework built on top of Node.js for building web
                                applications.
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start my-5 py-3">
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#910000] p-2 text-white rounded font-semibold">
                                Question
                            </span>
                            <h1 className="ms-2 my-2">
                                What is a custom hook, and why will you create a custom hook?
                            </h1>
                        </div>
                        <div className="md:flex items-center my-1">
                            <span className="bg-[#e19999] p-2 text-white rounded font-semibold">
                                Answer
                            </span>
                            <h1 className="ms-2 my-2">
                                A custom hook is a JavaScript function that uses built-in React
                                hooks to create reusable logic that can be shared across
                                multiple components. Developers create custom hooks to abstract
                                away complex logic from components and to promote code
                                reusability.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

