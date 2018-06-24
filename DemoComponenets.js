// Write JavaScript here and press Ctrl+Enter to execute
class Button extends React.Component {
	// handleClick = () => {
	// this.setState((prevState) => ({
	// counter: prevState.counter + 1
	// }));
	// };
  
  render() {
  return(
      <button 
      onClick={()=>this.props.onClickFunction(this.props.incrVal)}>
      	+{this.props.incrVal}
      </button>
    );
   }
}

const Result = (props) => {
	return(
  	<div>{props.btnCounter}</div>
  );
};

class App extends React.Component {
  state = { counter: 0};

	incrementCounter = (increVal) => {
  	this.setState((prevState) => ({
  		counter: prevState.counter + increVal  
    }));
  };
  
	render() {
  	return (
    <div>
     <Button incrVal={1} onClickFunction={this.incrementCounter} />
     <Button incrVal={5} onClickFunction={this.incrementCounter} />
     <Button incrVal={10} onClickFunction={this.incrementCounter} />
     <Button incrVal={100} onClickFunction={this.incrementCounter} />
     <Result btnCounter={this.state.counter}/>
    </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
