console.log('app.js is running!');

//JSX -Javascript XML
const app = {
    title: 'Indecision App!',
    subtitle: 'This is its subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const optionVal = e.target.elements.option.value;
    if (optionVal) {
        app.options.push(optionVal);
        e.target.elements.option.value = ''
        reRender();
    }
}
const removeOptions = () => {

    app.options = [];
    reRender();
}
const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
}

const reRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here Are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );


    ReactDOM.render(template, appRoot);
}
reRender();





