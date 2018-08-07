import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import MyButton from '../../components/utils/Button'
import Slide from "react-reveal/Slide";

class Discount extends Component {
  state={
    discountStart:0,
    discountEnd:30
  }

percentage=()=>{
  if(this.state.discountStart<this.state.discountEnd){
    this.setState({
      discountStart:this.state.discountStart + 1
    })
  }
}

componentDidUpdate(){
  setTimeout(()=>{
this.percentage()
  },50)
}

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
          onReveal={()=>this.percentage()}
          
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>

          <Slide right delay={700}>
            <div className="discount_description">
              <h3>Buy your tickets now</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                in unde rem, et quibusdam laboriosam quam eligendi aliquam nobis
                commodi aut minima autem voluptatibus deleniti tenetur non
                facilis dolor sequi.
              </p>
             <MyButton
             text="Purchase tickets"
             bck="#ffa800"
             color="ffffff"
             link="http://google.com"
             />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
