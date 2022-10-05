# _fantasy-disc-golf_

#### By _Joe Roaden_

#### _A Fantasy Sports REACT application that allows a user to sign in via Firestore to sign up for an account.  Then create, delete and update Disc Golf Events that are stored within Firebase. A user can then click on an event and create their own team including Team name and select 5 players the 5th of which is the wildcard player, the player you believe will finish well but also average above their rating.  Once a user has submitted their team they are taken to their Team Home Page._


![image logo](screen-shot-logo.png)



---
## Table of Contents
[Technologies Used](#technologies-used)  
[Description](#description)  
[Setup/Installation Requirements](#setup-and-installation-requirements)   
[Known Bugs](#known-bugs)  
[License](#License)

---
## Technologies Used

* _REACT_
* _JavaScript_
* _Firebase_
* _Firestore_
* _Styled Components_
* _Authorization and Authentication with Firestore_
* _HTML_
* _CSS_
* _JSX_


---
## Description

_The goal of this project is to provide more reasons to watch live disc golf and get more enjoyment out of a tournament even when the top few positions are already locked in going into the final round.  Fantasy disc golf will allow users to compete against each other for points each week by selecting their top 5 players for men and women at each disc golf event. The disc golf pro tour has regular events each month and also silver series events nearly every weekend.  The initial goal is to have each week be its own event so anyone can jump in and play anytime.  Stretch goals will allow users to establish their own leagues each week or compete in the general pool among all users._

## Scoring System Explained
1. Salary Cap - every week each player has a salary cap of 10k to select players based on rating
2. Choose your top 4 for MPO and FPO and 1 wild card each - wild card will be the player you believe to play most above their *rating - *points above rating will be added to overall score along with additional points
3. Players will accumulate points based on where they finish regardless of order - except wild card - this is the player you believe will finish well but also farther above their rating


## Scoring System - Points
| Place | MPO | FPO | 
| :---: | :---: | :---: | 
| 1 | 250 | 250 | 
| 2 | 225 | 230 | 
| 3 | 220 | 210 | 
| 4	|215|	190|
| 5	|210|	170|
|6	|200|	150|
|7	|198|	130|
|8	|196|	110|
|9	|194|	100|
|10	|192|	90|
|11	|190|	80|
|12	|185|	70|
|13	|183|	60|
|14	|181|	50|
|15	|180|	40|
|16	|178|	30|
|17	|176|	25|
|18	|174|	20|
|19	|172|	15|
|20	|170|	10|
|21	|165|	5|
|22	|163|	0|
|23	|161|	-10|
|24	|157|	-20|
|25	|154|	-30|
|26	|150|	-50|
|27	|145|	-70|
|28	|143|	-90|
|29	|141|	-110|
|30	|138|	-130|
|31	|135|	-150|
|32	|130|	-170|
|33	|127|	-190|
|34	|124|	-210|
|35	|120|	-220|
|36	|115|	-230|
|37	|113|	-240|
|38	|110|	-250|
|39	|107|	-250|
|40	|105|	-250|
|41	|95	|-250|
|42	|93	|-250|
|43	|90	|-250|
|44	|87	|-250|
|45	|84	|-250|
|46	|80	|-250|
|47	|78	|-250|
|48	|74	|-250|
|49	|70	|-250|
|50	|65	|-250|
|51	|55	|-250|
|52	|52	|-250|
|53	|50	|-250|
|54	|48	|-250|
|55	|44	|-250|
|56	|40	|-250|
|57	|36	|-250|
|58	|32	|-250|
|59	|28	|-250|
|60	|25	|-250|
|61	|20	|-250|
|62	|18	|-250|
|63	|14	|-250|
|64	|10	|-250|
|65	|8	|-250|
|66	|5	|-250|
|67	|3	|-250|
|68	|1	|-250|
|69	|0	|-250|
|70	|-5	|-250|
|71	|-10	|-250|
|72	|-20	|-250|
|73	|-30	|-250|
|74	|-35	|-250|
|75	|-40	|-250|
|76	|-50	|-250|
|77	|-60	|-250|
|78	|-70	|-250|
|79	|-80	|-250|
|80	|-90	|-250|
|81	|-100	|-250|
|82	|-120	|-250|
|83	|-125	|-250|
|84	|-130	|-250|
|85	|-140	|-250|
|86	|-150	|-250|
|87	|-155	|-250|
|88	|-160	|-250|
|89	|-165	|-250|
|90	|-170	|-250|
|91	|-180	|-250|
|92	|-185	|-250|
|93	|-190	|-250|
|94	|-195	|-250|
|95	|-200	|-250|
|96	|-210	|-250|
|97	|-220	|-250|
|98	|-230	|-250|
|99	|-240	|-250|
|100	|-250	|-250|

---
## Setup and Installation Requirements

<details>
<summary><strong>Initial Setup</strong></summary>  

1. Copy the git repository url: https://github.com/joeroaden/fantasy-disc-golf
2. Open a shell program and navigate to your desktop.
3. Clone the repository for this project using the `git clone` command and including the copied URL.
4. While still in the shell program, navigate to the root directory of the newly created file named `fantasy-disc-golf`.
5. From the root directory, run `npm install` to install all modules that are listed on package. json file and their dependencies
6. From the root directory, run `npm run start` to view the application on your local live server.


---
## Known Bugs

* _There are no known bugs at this time_

---
## License



[Copyright](/LICENSE) © 2022 Joe Roaden

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



