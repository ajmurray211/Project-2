# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description/ API research | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

## Motivation

This website will allow you to search for an aquatic animal and get information or look for a recipes based on an animals name. You will be given information about the animal, look at recipes that include that animal and you can save some recipes to your favorites. The intent of this website is to create a one stop shop for anglers and eventually hunters where they can access a wide variety of information in one location.

## How to use

Navigate through the website using the nav bar at the top. If you navigate to the recipes page you are able to search for recipes, either use the name of the animal you want to search for or just a general dish name. Try using "pie" or "elk" and see what appears! Once the recipes show up then you can add them as a favorite and a url will be added to a list at the bottom. If you click on a favorited item then it will take you to a new page with directions on how to make the dish. You are able to clear the favorited list by hitting the button that says "clear all". Happy hunting!

## Wireframes

Mobile
- [Home](https://imgur.com/a/OlrsBi7)
- [Info](https://imgur.com/JSM6FTn)
- [Recipes](https://imgur.com/0P7bhwy)

Desktop
- [Home](https://imgur.com/jIDLTZH)
- [Info](https://imgur.com/CSovPIS)
- [Recipes](https://imgur.com/e76MfNv)

## Time/Priority Matrix 

- [Link](https://imgur.com/laEAJwf)

### MVP
- Get and display data for recipes based on the user search
- Favorites bar user can add and take away from 

### PostMVP
- Add land based animals to search page
- Add a route where rules and regulations on hunting and fishing can be viewed
- Add a route for weather reports based on location
- Display fish data based on active favorite

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Recipes layout       | H | 3hrs  |3hrs|
| Favorites layout     | H | 3hrs  |4hrs|
| Home layout          | H | 2hrs  |2hrs|
| Api research         | H | 10hrs |12hrs|
| Page styling         | M | 3hrs  |4hrs|
| Total                |   | 21hrs | 25hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Fish layout             | H | 4hrs |0hrs|
| Hunting option          | M | 2hrs |0hrs|
| Rules and regulations   | M | 3hrs |0hrs|
| Weather                 | M | 2hrs |0rhs|
| Total                   |   | 11hrs |0hrs|

## Code Snippet for API calls 
[Fish](https://www.fishwatch.gov/profiles/all-profiles)
```js
  // This request is for salt water fish that has 115 options 
  // fetch('https://www.fishwatch.gov/api/species')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(() => console.log('Call failed'))
```
[Recipe](https://developer.edamam.com/edamam-docs-recipe-api)
```js
 // Fetch request for recipe information based on name (using the 'q' portion of the url)
  // fetch('https://api.edamam.com/api/recipes/v2?type=public&q=butterfish&app_id=f6eefa00&app_key=8ebf1e1223eb8c398580458b31f482d8')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(() => console.log('Call failed'))
```