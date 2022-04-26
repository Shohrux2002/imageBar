import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.malumotOl = this.malumotOl.bind(this);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { keyboard: "" };

  malumotOl = (e) => {
    this.setState({ keyboard: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.malumotniOl(this.state.keyboard);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <form className="ui search" onSubmit={this.onFormSubmit}>
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              className="prompt"
              type="text"
              placeholder="Search images..."
              onChange={this.malumotOl}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
