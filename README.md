
# YouTube Clone

This is my Full Stack Project. This is the YouTube Clone. In FrontEnd I use React and Tailwind. For the Backend I use Nodejs, Express and Mongodb. we can uplaod videos, watch videos, Filter videosby category.We can Comment on any video. We can update Comments and delete comments. We can like or dislike the videos.
In this I use JWT aunthentication.
## Acknowledgements

Thanks for giving me this amazing project. Due to this project I am able to showcase my knowledge about ReactJs and redux. Due to this project I get good practice about props, state, redux, routing.

By Building this project, I experience how to tackel new problem. It enhance my knowledge as well. I created my own api to fetch Videos, post videos, update comments. I was my good experience to build a real life project.
## Documentation

**Introduction**

This is the youtube clone which is used to watch videos, uplaod videos. It is very easy to use. In this we can also upload news videos. Filtered by category. And we go on any wrong path there is not found page is implemented.

This is the Full Stack Project. For the Frontend I use React and tailwind css. And for the backend I use Nodejs, Express and for storing data I use mongoDb database.

## Creating this project 

I use Vite project to create project. I used some other dependencies. For the Frontend I install React-router-dom to navigate from one page to another. I also installed react-icons to use icon in my project. For the backend I install cors for the integration Frontend with backend. Installed bycrypt for the password hasing. I also installed JsonWenToken to secure my project by unauthenticated users. And some other pakages I installed.  

## How The My project is work

First of all we have to login to acess videos and other stuff.

When we go on the website. We can see a header and a sidenavbar. 
In header we have a option to login. If we don't have an account then we go for signUp. After SignUp we have to login. And After Login we will able to use the youTube Clone.

## On the home Page

On The Home Page we have a header. In Header we have HamBurger icon from this icon we can toggle the sidenavbar. Next to hamburger button we have a youTube logo. When we click on this Logo we redirect to the home Page. In the Center A searchBar is exist. and At the Next end of the header we have a icon of a unknown person. When we click on this icon we have two option one in channel and the other is login for the login we have to click on the login option. 
Then we have a sidenavbar there is icon of home when we click on this icon we redirect to home Page. And then we can see videos section. There is we have all the videos which we fetch form api.
When we click on any video we redirect to The Selected video page. 

## Login Page

On the Login Page we have option to login. If we don't have an any account then we go for signUp. After login we get a JWT token I store this token in the LocalStorage. for the future use. I also store Email address in the LocalStorage to update the user icon in the home Page.

## Selected Video Page

After clicking on any video we redirect to the selected video page.And start playing this video. In selected Video Page we can like the videos and dislike the videos. All the information is stored in mongoDb. We can comment on any video. We can edit the existing comment and delete the comment. At The SideBar We have Some Suggested Video. When we click on any video. It start playing.

## Lazy Loading

I used Lazy loading for the best practice. 
It increase the performnce to the project. 

## Responsive 
My website is completely reponsive for the laptop, computers and mobile phones.


## backend

I used GET request to fetch all videos, comment, Users stored in the mongoDb

I Used POST request to store videos in the mongoDb. Stores comment in the mongoDb. Store logged User information. 

I Used PUT request to update the comments stores in the mongoDb.

I used DELETE request to delete the comment form the database.

This is Complete YouTube Clone Project.


**Api**
```http://localhost5173```



## Authors

- [@suman](https://github.com/SumanCoderr/YouTubeClone)

