
# Tutorial 4

* *Date Created*: 19 February 2024
* *Last Modification Date*: 20 February 2024
* *Tutorials URL*: https://git.cs.dal.ca/anagpal/csci-5709-tutorials
* *GitLab URL*: https://git.cs.dal.ca/anagpal/csci-5709-tutorials/-/tree/main/Tutorial4
* *Github URL*: https://github.com/ashishnagpal2498/t4-web
* *Deployment Link*: https://t4-web-profile.netlify.app/

## Authors

* [Ashish Nagpal](ashish.nagpal@dal.ca)

## Getting Started

To start with the project, I created a new sample react application using ```npx create-react-app .``` command.

### Prerequisites

1. [React](https://legacy.reactjs.org/docs/getting-started.html/) - Web framework
2. [Npm](https://docs.npmjs.com//) - Dependency Management
3. [Node](https://nodejs.org/docs/latest/api/) - Javascript Runtime environment

### Installing

1. Clone the project repository

2. Go into the project directory and install the required dependency using ```npm install``` command.

3. Once the dependencies are installed, start the development server by ```npm start``` command.

4. Server will be running on port - 3000 [http://localhost:3000](http://localhost:3000). 

## Deployment

The deployment is made through Netlify.   
[![Netlify Status](https://api.netlify.com/api/v1/badges/a9e0a933-8647-452f-adb9-545559a92a82/deploy-status)](https://app.netlify.com/sites/t4-web-profile/deploys)

## Sources Used

### Code 

### 1.  Users.js

*Lines 18 - 33*

```js
 useEffect(() => {
        console.log("UseEffect Run")
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://express-t4.onrender.com/api/users");
                if (response.status === 200) {
                    setUsers(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }

        }
        fetchUsers();
    }, []);
```

The code above was created by adapting the code in [blog.logrocket](https://blog.logrocket.com/useeffect-react-hook-complete-guide/#:~:text=This%20may%20sound%20strange%20initially,UI%20because%20they%20run%20asynchronously.) as shown below: 

```js
 useEffect(() => {
    console.log("useEffect local storage");
    const persistedTitle = localStorage.getItem("title");
    setTitle(persistedTitle || []);
  }, []);
```

- The code was used to have an understanding on different use-case of useEffect Hook. 

- I used the code because I wanted to make the call only once when the component mounts. 

- I used the empty square brackets and called the users API to fetch the details of all the users using axios.

## Acknowledgments
* I am grateful to the coding community for all of their hardwork in materials related to frontend development. The content provided served as a foundation for understanding and learning it's functionality and logic. 