import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ['Jeremy', 'Kevin', 'Brandon', 'Dallas', 'Oz', 'Jasmine', 'Kathy', 'David', 'Otto', 'Zelda'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    handleClick(value){
        let newArray = []
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].startsWith(value)){
                newArray.push(this.state.unFilteredArray[i])
            }
        }
        this.setState({
            filteredArray: newArray
        })
    }





render(){
    return(
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine'></input>
            <button onClick={() => this.handleClick(this.state.userInput)} className='confirmationButton'> Filter </button>
            <span className='resultsBox filterStringRB'> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
        </div>
    )
}

}
export default FilterString