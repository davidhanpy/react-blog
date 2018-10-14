import React from 'react';

class InfoDetail extends React.PureComponent {
  state = {
    post: null
  }
  render() {
    if (this.state.post === null) {
      return null;
    }
    return (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
      .then((result) => result.json())
      .then((data) => {
        this.setState({post:data});
      })
  }
}

export default InfoDetail;
