import React from "react";
import PageTemplate from "./PageTemplate/PageTemplate";

const Homepage = props => {
  return (
    <PageTemplate title="This is the home page">
      <p>.....and of course hello world</p>
      <br />
      <h2>Secondary Heading Here</h2>
      <p>
        Lorem ipsom text will be placed here for the sake of taking up space.
        uilds the app for production to the `build` folder.
        <br />
        It correctly bundles React in production mode and optimizes the build
        for the best performance. The build is minified and the filenames
        include the hashes.
        <br />
        Your app is ready to be deployed! See the section about deployment for
        more information. Your app is ready to be deployed! See the section
        about deployment for more information.Your app is ready to be deployed!
        See the section about deployment for more information.
      </p>
      <br />
      <h2>Perhaps a Second Secondary Heading Here</h2>
      <p>
        Lorem ipsom text will be placed here for the sake of taking up space.
        uilds the app for production to the `build` folder.
        <br />
        It correctly bundles React in production mode and optimizes the build
        for the best performance. The build is minified and the filenames
        include the hashes.
        <br />
        Your app is ready to be deployed! See the section about deployment for
        more information.
      </p>
    </PageTemplate>
  );
};

export default Homepage;
