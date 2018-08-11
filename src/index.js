import React, { createContext } from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";

const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 1fr 2fr 2fr;

  & * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled.header`
  background-color: #8eb9a8;
  ${props =>
    props.isDarkTheme &&
    css`
      background-color: #ffbc67;
    `};
`;

const Article = styled.article`
  background-color: ${props => props.color};
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const { Provider: ThemeProvider, Consumer: ThemeConsumer } = createContext();

class App extends React.Component {
  state = {
    theme: "light_theme"
  };
  changeTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "light_theme" ? "dark_theme" : "light_theme"
    }));
  };
  render() {
    return (
      <AppWrapper id="app">
        <Button onClick={this.changeTheme}>Change Theme</Button>
        <ThemeProvider value={this.state}>
          <ThemeConsumer>
            {({ theme }) => (
              <React.Fragment>
                <Header isDarkTheme={theme === "dark_theme"}>header</Header>
                <Article color={theme === "dark_theme" ? "#fdcfb7" : "#da727e"}>
                  Article 1
                </Article>
                <Article color={theme === "dark_theme" ? "#f4828c" : "#ac6c82"}>
                  Article 2
                </Article>
              </React.Fragment>
            )}
          </ThemeConsumer>
        </ThemeProvider>
      </AppWrapper>
    );
  }
}

render(<App />, document.getElementById("root"));
