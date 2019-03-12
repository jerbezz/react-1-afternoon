import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                  hobby: 'games'
                }
              ],
            userInput: '',
            filteredArray: []

        }

    }

    handleChange(e){
        this.setState({
            userInput: e
        })
    }

    handleClick(value){
        let newArray = []
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].hasOwnProperty(value)){
                newArray.push(this.state.unFilteredArray[i])
            }
            }
        this.setState({
            filteredArray: newArray
            
        })
    }



render(){
    return(
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText' > Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input onChange={(e) => this.handleChange(e.target.value)} className='inputLine'></input>
            <button onClick={() => this.handleClick(this.state.userInput)} className='confirmationButton'>Filter</button>
            <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
        </div>
        
    )
}

}
export default FilterObject