import React from "react";

import { Icon, Grid } from "semantic-ui-react";



class Square extends React.Component {

  squareClick = () => {
    this.props.squarePressed(this.props.square)
    this.props.compChoice(this.props.square)
  }
  render() {
    return (

      <div>
        <Grid.Column
          style={{
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            border: "solid black 1px"
          }}
          onClick={this.squareClick}
        >
          {this.props.square.clicked ? <Icon name="x" /> : ""}

          {this.props.square.id}

        </Grid.Column>
      </div>
    )


  }
};
export default Square;