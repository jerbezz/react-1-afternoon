import React, {Component} from 'react'

class EvenAndOdd extends Component{
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(e) {
        this.setState({
            userInput: e
        })
    }

    handleClick() {
        let newArr = this.state.userInput.split(',')
      newArr.forEach((item, i, arr) => {
           arr[i] = parseInt(item)
      })
      for(let i = 0; i < newArr.length; i++){
          if(newArr[i] %2 === 0){
              this.state.evenArray.push(newArr[i])
          } else{
              this.state.oddArray.push(newArr[i])
          }
      }
     
    this.setState({})
      }
      
    
    



render(){
    return(
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine'/>
        <button onClick={() => this.handleClick(this.state.userInput)} className='confirmationButton'>Split</button>  
        <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className='resultsBox'>Odds: { JSON.stringify(this.state.oddArray) }</span>
      </div>  
    )
}



}
export default EvenAndOdd