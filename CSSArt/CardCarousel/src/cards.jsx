import React from 'react';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { links: [] };
  }

  handleClick(event) {
    // console.log(event.target.closest('.card'));
    // window.open('https://www.linkedin.com/in/ashleylho/');
    // how can i put linkedinlinks into array and click div to open link?
  }

  componentDidMount() {
    const links = this.props.cards.map(obj => obj.linked);
    this.setState({ links });
  }

  render() {
    return (
      <div className="scene">
        <div className="carousel">
          {
            this.props.cards.map(image => {
              return (
                <div className="card" key={image.number} onClick={this.handleClick}>
                  <div className="front">
                    <img className="student-image" src={image.front}></img>
                    <h1 className="student-name">{image.name}</h1>
                  </div>
                  {/* <div className="back"> */}
                  {/* <img src={image.background}></img> */}
                  {/* </div> */}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
