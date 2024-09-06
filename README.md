# Server-Blog

## Backend Component to edit and update a file on the local machine

This is a project to showcase my backend development using Javascript. It uses the readfile component of NodeJS to edit a file in the api folder in the code. You will need to install the required dependencies for this code to run properly. To do this run the npm i command in your terminal to install the necessary dependencies. You will also need NodeJS installed on your machine to get the code to run properly.

The routes for this project are as follows:
* "/" using .get will get all of the data that is in the designated file
* "/:postid" using .get will get all of the data with the corresponding ID that was entered
* "/" using .post will add any data to the designated file
* "/:postid" using .put will update any data in the file with the corresponding ID that was entered
* "/:postid" using .delete will delete any data in the file withe the corresponding ID that was entered
