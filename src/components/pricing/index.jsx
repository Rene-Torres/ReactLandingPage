import React, { Component } from "react";
import Button from '../utils/Button';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "VIP"],
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa nobis porro distinctio natus eaque dolore reprehenderit, magnam iure, veniam cumque rem nesciunt magni perferendis, quis incidunt fuga eum dolorem!",
      "Loresdadasdasddasdm, ips adipisicing elit. Vitae ipsa nobis porro distinctio natus eaque dolore reprehenderit, magnam iure, veniam cumque rem nesciunt magni perferendis, quis incidunt fuga eum dolorem!",
      "asdasdaxa, ipsum dolor sit elit. Vitadipisicingadipisicingae ipsa nobis porro distinctio natus eaque dolore reprehenderit, magnam iure, veniam cumque rem nesciunt magni perferendis, quis incidunt fuga eum dolorem!"
    ],
    linkto: [
      "http://facebook.com",
      "http://twitter.com",
      "http://instagram.com"
    ],
    delay:[500,0,500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom
      delay={this.state.delay[i]}
      key={i}
      >
  <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
          <span>${this.state.prices[i]}</span>
          <span>{this.state.positions[i]}</span>
        </div>
        <div className="pricing_description">
        {this.state.desc[i]}
        </div>
        <div className="pricing_buttons">
<Button
text="Purchase"
bck="#ffa800"
color="#ffffff"
link={this.state.linkto[i]}
/>
          </div>
        </div>
      </div>


      </Zoom>
    
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{this.showBoxes()}</div>
      </div>
      </div>
    );
  }
}

export default Pricing;
