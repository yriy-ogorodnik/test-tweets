Tweets App
This repository contains a web application that allows users to interact with tweet cards. The app provides functionality to follow and unfollow users, with interactive buttons.

Task Description
The goal is to create tweet cards and add interactivity when clicking on the button.

Follow and Following
The tweet cards should have two states: "Follow" and "Following".

Task Criteria
The layout should be fixed in pixels and follow semantic and valid HTML structure.
There should be no errors in the browser console.
The implementation should be done using native JavaScript with build tools or using React.
Interactivity should work according to the technical requirements.
The code should be properly formatted and without comments.
The repository should include a descriptive README.md file.
Technical Requirements
According to the provided design, you need to implement user cards. When clicking the "Follow" button, the text should change to "Following". Additionally, the button color should change. The number of followers should also increase by one (e.g., starting with 100,500 followers, it becomes 100,501).

On page refresh, the final state of the user's action should be preserved. So if a user clicks the button and refreshes the page, the button should still show "Following" with the corresponding color, and the number of followers should not revert to the initial value.

On subsequent clicks of the button, the text, color, and number of followers should revert to the initial state. The number of followers should decrease by one (e.g., from 100,500 to 100,499).

The number 100,500 should be defined as a single value (100500) in the code. It should be displayed with a comma in the UI (100,500).

Create a personal backend for development using the UI service mockapi.io. Create a "users" resource and describe the user object as mentioned below.

User Object
Create users in Mockapi with the following fields: id, user, tweets, followers, avatar (see screenshot below). Use separate URLs for the avatar images. You can choose the avatar images yourself.

There should be at least 12 users in the database with different values (at your discretion). Implement pagination, where each page shows 3 tweets, and the rest load when clicking "Load More".

Other requirements are similar to the technical specifications mentioned above.

Follow and Following (Design)
Design: Figma - Follow and Following

Additional Task (Optional)
Completing this task will earn you extra points! Not completing the additional task will not affect the maximum score.

Implement routing using React Router.

The application should have the following routes. If a user accesses a non-existent route, they should be redirected to the home page.

'/' - Home component, the landing page. Styling and layout are up to your discretion.
'/tweets' - Tweets component, the page that displays the tweets. The tweets page should include a "Back" button that leads to the home page.
Bonus Task
Add filtering. This should be a dropdown with 3 options (styling is up to you): "Show All", "Follow", and "Followings".

"Show All" - displays all tweets.
"Follow" - displays tweets with the "follow" state.
"Followings" - displays tweets with the "following" state.
