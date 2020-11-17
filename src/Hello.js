import './Hello.css';

const Hello = (props) => {
    return (
        <div className="Hello">
        <h1>Hello</h1>
            <p>{ props.greeting}</p>
        </div>
    );
};

export default Hello;
