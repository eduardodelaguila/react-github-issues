# React-Github-issues

This repo is house for a replica of the Issues section on React's repo. It was bootstrapped using [Create-React-app](https://github.com/facebook/create-react-app) tool.

## Scripts 

###  `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

###  `yarn test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###  `yarn build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## App setup 

This app relies in [GitHub's rest API](https://docs.github.com/en/rest) which has a rate limit of 10 calls per minute, which make the app usable but limited.

Changes has been made to let the app run without a token, with the rate limit on play, Just take into consideration this when running it without a token.

### Using the app with GitHub's app token

To have more call per minute, 30 to be precise, we need to add a token to the API call. To add a token follow the next instructions:

 1. Create a personal account access token following the instructions in [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
 2. Before starting the app, go to the file `.env` file in the app root folder and change the key `REACT_APP_GITHUB_TOKEN`with the token generated in the previous step
 3. Run the app and all the API calls will be authenticated and with the 30 requests per minute.
