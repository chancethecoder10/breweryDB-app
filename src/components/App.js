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
    await fetch("/.netlify/functions/api", {
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.ok) return res.json();
        return null;
      })
      .then(data => {
        console.log(data);
        this.setState({ data });
        return data;
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
