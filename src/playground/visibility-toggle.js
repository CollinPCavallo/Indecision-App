class Visibility extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
           <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide Details' : 'Show Details'}
             </button>
             {this.state.visibility && (
                 <div>
                 <p>Here are the details</p>
                 </div>
             )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))


// let visibility = false;




// const onShowDetails = () => {
//     visibility = !visibility
//     reRender();
// };


// const appRoot = document.getElementById('app')


// const reRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>
//             {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                 <p>Here are my secrets</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// reRender();