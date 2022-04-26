import React from "react";
import SearchBar from "./SeachBar";
import axios from "./axios";

class App extends React.Component {
  // constructor() {
  //   this.searchdanMalumotniOl = this.searchdanMalumotniOl.bind(this);
  // }

  state = { kalit: "" };
  searchdanMalumotniOl = (data) => {
    this.setState({ kalit: data });
  };
  componentDidUpdate() {
    this.getData();
  }

  getData = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID S2TcZdozb97HGEiq_wMRREghVutfMGAYuln_ssOwWd0",
      },
    });
    console.log(data);
  };
  render() {
    return (
      <>
        <SearchBar malumotniOl={this.searchdanMalumotniOl} />
      </>
    );
  }
}
export default App;
