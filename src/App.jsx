/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ahsan Raza",
  title: "Web Designer & Developer",
  email: "ahsanraza00059@gmail.com",
  gitHub: "AhsanCommits",
  instagram: "ahsancommits",
  linkedIn: "ahsancommits",
  medium: "ahsancommits",
  twitter: "ahsancommits",
  youTube: "ucthxlb0wpoblji173n-qbfa?sub_confirmation=1",
};

const primaryColor = "#004643";
const secondaryColor = "#e16162";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
