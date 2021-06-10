import * as React from "react";
import { IconButton } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";

import styles from "./XSearchBox.module.scss";

export interface XSearchBoxPropsInterface extends RouteComponentProps {}

export interface XSearchBoxStateInterface {
  isSearchButtonDisabled: boolean;
  previousSearchText: string | null;
  searchText: string;
}

class XSearchBox extends React.Component<
  XSearchBoxPropsInterface,
  XSearchBoxStateInterface
> {
  constructor(props: XSearchBoxPropsInterface) {
    super(props);
    this.state = {
      isSearchButtonDisabled: true,
      previousSearchText: null,
      searchText: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    const searchText: string = event.target.value;
    this.setState({ searchText: searchText }, () => {
      this.setState((state) => {
        return {
          isSearchButtonDisabled:
            state.searchText.length === 0 ||
            state.searchText === state.previousSearchText,
        };
      });
    });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    if (this.state.isSearchButtonDisabled) {
      return;
    }
    this.setState({
      isSearchButtonDisabled: true,
      previousSearchText: this.state.searchText,
    });
    this.props.history.push({
      pathname: "/questions",
      search: "?title=" + encodeURIComponent(this.state.searchText),
    });
  }

  render() {
    return (
      <div>
        <form className={styles.searchBox} onSubmit={this.handleSubmit}>
          <input
            autoFocus
            type="search"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <IconButton
            aria-label="search"
            color="primary"
            disabled={this.state.isSearchButtonDisabled}
            href="#"
            onClick={this.handleSubmit}
          >
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    );
  }
}

export default withRouter(XSearchBox);
