import React from 'react';
import './Calculator.css';
import Button from './Buttons/Button';
import ButtonC from './Buttons/ButtonC';
import ButtonO from './Buttons/ButtonO';
import Screen from "./Screen/Screen";

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentString: "0",
      isOperator:false,
      isDecimal:false
    }
  }
  
  handleClick = (buttonName) => {
    let currentString = this.state.currentString
    let isOperator = this.state.isOperator
    
    switch(true){
        
      case buttonName === "0" ||
             buttonName === "1" ||
             buttonName === "2" ||
             buttonName === "3" ||
             buttonName === "4" ||
             buttonName === "5" ||
             buttonName === "6" ||
             buttonName === "7" ||
             buttonName === "8" ||
             buttonName === "9" :
          
          if(this.state.currentString!=="0"){
              currentString += buttonName
              isOperator = false
          }else{
              currentString = buttonName
          }
          break

        case buttonName === "+" || buttonName === "-" || buttonName === "*" || buttonName === "/" :
          
          if(buttonName === "-"){
            // this.setState({
            //   isOperator: false
            // });
            // eslint-disable-next-line
            this.state.isOperator = false;
            }else if(currentString.length>=2 && currentString.charAt(currentString.length-1) === "-"){
                if(currentString.charAt(currentString.length-2) === "*" || currentString.charAt(currentString.length-2) === "-"
                || currentString.charAt(currentString.length-2) === "+" || currentString.charAt(currentString.length-2) === "/"){
                    const newNumber = currentString.slice(0,currentString.length-2)
                    currentString = newNumber
                    currentString += buttonName
                    break
                }
            }
            if(!this.state.isOperator){
                currentString += buttonName
                isOperator = true
                this.setState({
                    isDecimal:false
                })
            }else{
                const newNumber = currentString.slice(0,currentString.length-1)
                currentString = newNumber
                currentString += buttonName
            }
            break
          
        case buttonName === "C":
          
          currentString = "0"
          isOperator = false
          this.setState({
              isDecimal:false
          })
          break

        case buttonName === "=":
          // eslint-disable-next-line
          currentString = eval(currentString)
          isOperator = false
          this.setState({
              isDecimal:true
          })
          break

        case buttonName === ".":
          
          if(!this.state.isDecimal){
            currentString += "."
            this.setState({
                isDecimal:true
              })
          }
          break
        
        default:
          break
    }
    this.setState({
      isOperator
    });
    this.setState({
      currentString
    });
  } 
  
  render(){
    return(
     <div class="containerC">
       
       <div class="calculator-body">
        <div id="calcGrid">
        <Screen id="display" currentString={this.state.currentString} />
        </div>
        <div class="button-row">
            <ButtonC id="clear" name="C" handleClick={this.handleClick} />
            <Button id="divide" name="/" handleClick={this.handleClick} />
        </div>
        <div class="button-row">
            <Button id="seven" name="7" handleClick={this.handleClick} />
            <Button id="eight" name="8" handleClick={this.handleClick} />
            <Button id="nine" name="9" handleClick={this.handleClick} />
            <Button id="multiply" name="*" handleClick={this.handleClick} />
        </div>
        <div class="button-row">
            <Button id="four" name="4" handleClick={this.handleClick} />
            <Button id="five" name="5" handleClick={this.handleClick} />
            <Button id="six" name="6" handleClick={this.handleClick} />
            <Button id="subtract" name="-" handleClick={this.handleClick} />
        </div>
        <div class="button-row">
            <Button id="one" name="1" handleClick={this.handleClick} />
            <Button id="two" name="2" handleClick={this.handleClick} />
            <Button id="three" name="3" handleClick={this.handleClick} />
            <Button id="add" name="+" handleClick={this.handleClick} />
        </div>
        <div class="button-row">
            <Button id="decimal" name="." handleClick={this.handleClick} />
            <ButtonO id="zero" name="0" handleClick={this.handleClick} />
            <Button id="equals" name="=" handleClick={this.handleClick} />
        </div>
      </div>
    
     </div>
    );
  }
}

export default Calculator;