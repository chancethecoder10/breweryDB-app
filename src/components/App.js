import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    fetch("/api/beers")
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        this.setState({ data: data.data });
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
