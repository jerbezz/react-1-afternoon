import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }
    
    handleClick(){
        var forwards = this.state.userInput;
    var backwards = this.state.userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }



render(){
    return(
        <div className='puzzleBox palindromePB'>
            <h4>Palindrome</h4>
            <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine'></input>
            <button onClick={() => this.handleClick(this.state.userInput)} className='confirmationButton'>Check</button>
            <span className='resultsBox'> Palindrome: { this.state.palindrome } </span>
        </div>
    )
}

}

export default Palindrome