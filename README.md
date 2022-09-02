# Barspune
A library of cocktail specs made using Node.js, Express, EJS, CSS and MongoDB Atlas, deployed using Heroku.

I made Barspune out of a desire to have a single, centralized place where I could store my preferred specs (bar-talk for recipes) for cocktails, as well as search for specs by ingredient or category. My approach was to create a schema using Mongoose for specs, giving them a name, source, array of ingredients, garnish, method, and an array of tags to filter by. My goal initially was to have ingredients as a nested schema inside of the spec, with each having its own name, broad & narrow type (i.e. broad: whiskey / narrow: bourbon), and amount. This proved to be too complicated for the timeframe I was working on, and I think that giving the drink tags instead ended up having its own benefits, as it gave me a wider variety of ways to categorize drinks. In the future I plan on working on some way to integrate both approaches for a more dynamic way of sorting drinks.

I use Express routes linked to EJS pages to dynamically render a list of specs on the index page, as well as in-depth information on each in the show pages. Users are able to upload, edit, and delete recipes. I want to plan on implementing user logins, so that users can see and edit just their own specs as a private repository.

The app is not currently styled, but includes functionality for all routes. Search functionality/pages to filter by tags have not yet been incorporated, but are forthcoming.

## Wireframes

<img width="1425" alt="image" src="https://media.git.generalassemb.ly/user/43194/files/44373b95-8bfb-4e4d-83ba-aa907292e08f">
<img width="738" alt="image" src="https://media.git.generalassemb.ly/user/43194/files/d318728c-f5e0-4070-9cc0-fcd06b07ab09">

## User Stories

> As a user, I want a way of seeing a compiled list of drink recipes so that I can know how to make a certain cocktail
> I want a way of storing recipes I find so that I can refer to them later in a centralized place with a standardized format
> I want a way of filtering for recipes based on an ingredient so that I know what I can make with the new bottle I bought

## Deployed App

https://barspune.herokuapp.com/specs
