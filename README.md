# Funda Clone

![image](https://user-images.githubusercontent.com/25815584/194979298-70002e74-241d-4bd7-a9db-5f4d2861faeb.png)
![image](https://user-images.githubusercontent.com/25815584/194973859-df6de17f-a2d6-4d53-a514-4680b69d50a2.png)

This is a simple clone of [funda](https://funda.nl/), you can preview it [here](https://funda-clone.vercel.app/). The main features are searching for a property and displaying details of a property. The design is inspired by Airbnb. The tech stack used: Nuxt 3, Vue 3, Typescript, Tailwind.

## Setup
1. Clone this repository
1. Ensure you have the latest LTS version of Node.js installed
1. `yarn install`
1. `yarn dev`
1. App should be live in `localhost:3000`

## Refactor List
1. Use vue-i18n instead of hardcoding texts
1. Store API key and domain in `.env`
1. Extract duplicated markup into small reusable components
1. Implement responsive `<img srcset>`
1. Lazy load images
1. Write tests and implement CI/CD pipeline

## Next Features List
1. Show more details of the property
1. Open photo in a modal when a property photo is clicked
1. Implement pagination for the search results
1. Implement advanced search and filtering
