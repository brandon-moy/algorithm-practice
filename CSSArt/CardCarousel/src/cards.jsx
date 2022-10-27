import React from 'react';

export default class Cards extends React.Component {
  render() {
    return (
      <div className="scene">
        <div className="carousel">
          {
            this.props.cards.map(image => {
              return (
                <div className="card" key={image.number}>
                  <div className="front"></div>
                  <div className="back">
                    <img src={image.background}></img>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
