import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: {},
      loading: true
    };
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    fetch("/api/beers")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ beers: data });
      });
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    return <div className="App">hiiiiii</div>;
  }
}

export default App;
