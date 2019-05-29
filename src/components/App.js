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

  async callApi() {
    await fetch("/.netlify/functions/index/beers", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        console.log(res);
        if (res.ok) return res.json();
        return null;
      })
      .then(data => {
        console.log(data);
        this.setState({ data });
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.callApi()}>call api</button>
      </div>
    );
  }
}

export default App;
