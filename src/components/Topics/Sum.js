import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChangeNumber1(value) {
        this.setState({
            number1: parseInt(value, 10),
        })
    }

    handleChangeNumber2(value){
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    handleClick(num1, num2){
        this.setState({
            sum: num1 + num2
        })
    }




render(){
    return(
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input onChange={(e) => this.handleChangeNumber1(e.target.value)} className='inputLine' type='number' ></input>
            <input onChange={(e) => this.handleChangeNumber2(e.target.value)} className='inputLine' type='number'></input>
            <button onClick={() => this.handleClick(this.state.number1, this.state.number2)} className='confirmationButton'>Add</button>
            <span className='resultsBox'> Sum: {this.state.sum} </span>
        </div>
    )
}


}

export default Sum