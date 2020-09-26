import css from "./css/style.css";
import posts from './ posts.json';
//console.log(posts);
import postTemplate from './post.hbs';
//console.log(postTemplate);
import "./module11/mod11.js";

const itemTemplate = postTemplate(posts);
//console.log(itemTemplate);

const listItem = document.getElementById('myFavouritePosts');
//console.log(listItem);
listItem.insertAdjacentHTML('afterbegin', itemTemplate);

