## Initialize project

 `npm start`

### Cleaning process

### import libraries

-material-ui/core, axios, firebase, react-router-dom, react-uuid, styled-components

### App.js - initial layout

-We create the routes
login or app conditional on the existence of a user

## Styles

-We use useStyles to create an infrastructure that allows us to assign styles to each of the components.

### Create the component folders: Pages

-We create the basic infra-structure of the components that represent a page: home, login, PayPal, profile, signUp

### Styles in page components

-pattern to add the infrastructure to all page components: Banner, Header, Plans and Rows.

### Create the component folder

-We create the basic infra-structure of of the rest of the components.

### Wtyles of the components of the cap components

### We started working on the Header component

-Import the logo
-We add a class to the appbar a conditional transparent class, this class is activated if the variable show is true,
-The variable show is activated if the vertical scroll is greater than 100px.
-To listen when the user scrolls vertically, we add an eventListenner to the window object.
-The eventListener is active only once each time we refresh the page.
-Once the component is assembled, it is necessary to clean it so that it does not remain buggy.
-We add the paths to both the logo and the avatar, with the useHistory.
-The Toolbar has been added css so that the items are separated.


### We start working on the banner

-We have imported an image as a backgrpundImage.
-In React, we have to accompany the backgrpundImages with styles like: object-fit, background-size and background-position. To have the image square.
- We have positioned the title of the pili, some buttons and the description.
-As the description comes from the Api we have to truncate it to make sure that it fits. for it, we have declared the function truncate.
- We have added an empty div, which darkens the image until it merges with the rest of the UI, which is dark.

### We start working on the Login

-We have created a button with styled components and named it netflixButton. This button is fully customizable and we can vary its length, color and other styles by passing props to it.
- Styled components to vary the styles of the input or the button, but its          positioning, we give it a normal class.
-We have inserted a background image for the login.
-We have also put the logo with position.

-We have created a custom input in styled component and named it NetflixInput. As inputBase was a Ui material component, we called it styled(inputBase). If it had been a base input styled.input.

### Component profile

-We have worked on the distribution.
-We have passed to the plans we have passed children from profile.
-we have set the avatar, the evil and the buttons of the plans from plans.
-Passing props to styled composites.


### Component plans

-We have put the text and botoenes of subscribers and props from profile.



