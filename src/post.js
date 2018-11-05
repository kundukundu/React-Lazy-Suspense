import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.match.params.id}</h2>
        <hr />
        <Link to="/">Volver</Link>
      </>
    );
  }
}
export default Post;
