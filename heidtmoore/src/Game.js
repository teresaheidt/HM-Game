import React, { Component } from 'react';


class Game extends Component {
    state = {
        gravity: 0.8,
        lift: -15,
        bird: {
            x: 1000,
            y: 100,
            velocity: 0,
            radius: 40
        },
        bag: {
          x: 1000,
          y: 100,
          velocity: 0,
          radius: 40
      }
    }


draw = () => {
    const ctx = this.refs.canvas.getContext("2d");
    // change this colour to change the colour of your 
    // "pen" in the canvas 
    // ctx.fillStyle = "green";
    ctx.fillStyle = "pink";
    ctx.fillRect(2, 4, this.refs.canvas.width,   
        this.refs.canvas.height);     
    ctx.beginPath();

    
    
    ctx.font = "30px Arial";
    ctx.strokeText("Welcome to The HeidtMoore", 10, 50);
    
    ctx.arc(this.state.bird.x, this.state.bird.y,                        
            this.state.bird.radius, 0, 2 * Math.PI,
            this.state.bag.x, this.state.bird.y,                        
            this.state.bag.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
}

update = () => {
    let newV = (this.state.bird.velocity + this.state.gravity) * 0.9
    this.setState({
      bird: {
        x: 200,
        y: Math.max(
          Math.min(
            this.state.bird.y + newV,
            this.refs.canvas.height - this.state.bird.radius
          ),
          0
        ),
        velocity: newV,
        radius: 40
      },
      bag: {
        x: 200,
        y: Math.max(
          Math.min(
            this.state.bag.y + newV,
            this.refs.canvas.height - this.state.bag.radius
          ),
          0
        ),
        velocity: newV,
        radius: 40
      }
    });
}

componentDidMount() {
  
    setInterval(() => {
        this.update();
        this.draw();
    }, 1000 / 60);
    document.addEventListener("keydown", e =>
    e.keyCode === 32 ? this.setState({ 
      bird: {
        x: 50,
        y: this.state.bird.y,
        velocity: this.state.bird.velocity + this.state.lift,
        radius: 20
        },
        bag: {
          x: 50,
          y: this.state.bag.y,
          velocity: this.state.bag.velocity + this.state.lift,
          radius: 20
          }
      }) : null
  );
}

    render() {
        return (
            <div> 
                
            <canvas ref="canvas" width={550} height={650} />
            <div>
            <img src='./imgs/chanel.png' alt='chanel' width={100} height={100}></img>
            <img src='./imgs/lambo.png' alt='lambo' width={120} height={100}></img>
            <img src='./imgs/gucci.png' alt='gucci' width={100} height={100}></img> 
            </div>
            </div>
        );
    }
}

export default Game;