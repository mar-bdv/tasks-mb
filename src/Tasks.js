import { Component } from "react";
import doneImage from './done.svg'
import delImage from './del.svg'

export class Tasks extends Component{
    state={
        userInput: "",
        tasks: [],
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }

    addItem(input){
        if(input === ''){
            alert('Please enter an item.')
        }
        else{
            let listArray = this.state.tasks;
            listArray.push(input);
            this.setState({tasks: listArray, userInput: ''})
        }
    }


    deleteItem(){
        let listArray = this.state.tasks;
        listArray.splice(0, 1)
        this.setState({tasks: listArray})
    }

    onFormSubmit(e){
        e.preventDefault()
    }

    doneWord(){
        this.classList.toggle('done');
        // const li = document.querySelectorAll(".li")
        // li.forEach(item => {
        //     item.classList.toggle('done');
        // })
        
        console.log(li)
        // li.forEach((index)=>{
        //     ;
        // })
        
        
        // li.forEach(function(item){
        //     console.log(item)
        //     item.classList.toggle("done");
        // })
        
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                            <input value={this.state.userInput} onChange={(e) => {this.onChangeEvent(e.target.value)}} type="text" placeholder="Enter your text"/>
                            <button className="btn-input" onClick={ () => { this.addItem(this.state.userInput) } }>+</button>
                    </div>

                    <ul>
                        {this.state.tasks.map((item, index) =>(
                            <li key={index} className="li">
                                
                                    <img  className="image-done" onClick={() => this.doneWord()} src={doneImage} alt="done"/>
                                    {item}
                                    <img  src={delImage} alt="del" className="image-del" onClick={() => this.deleteItem()}/>
                                
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        ) 
    }

}
