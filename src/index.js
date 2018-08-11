import React, { createContext } from "react";
import { render } from "react-dom";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

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
      <div id="app" style={styles}>
        <button onClick={this.changeTheme}>Change Theme</button>
        <ThemeProvider value={this.state}>
          <ThemeConsumer>
            {({ theme }) => (
              <React.Fragment>
                <header className={theme}>Header</header>
                <article id="article_top" className={theme}>
                  Article 1
                </article>
                <article id="article_bottom" className={theme}>
                  Article 2
                </article>
              </React.Fragment>
            )}
          </ThemeConsumer>
        </ThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
