import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <img src={this.props.cardImg} alt={this.props.altImg} />
          <div className={this.props.cardBody}>
            <h2>{this.props.cardTitle}</h2>
            <p>{this.props.cardDesc}</p>
            <button className={this.props.buttonClass}>{this.props.buttonText}</button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
