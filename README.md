# workout-buddy
Build your own home workout

### Use/comparison with existing apps:

Workout buddy is an application that allows you to create and run through home workouts. With gyms closed and lots of people doing home workouts, we wanted to make an application to make following a home workout easier. Users will not have to struggle setting timers on their phones or remembering which workouts to perform. There appears to be many mobile applications for following home workouts, but many of these are geared toward preset workouts. The disadvantage of running this on a mobile application is the relatively small size of phones. When you are doing a workout and moving around, it is not easy to read a phone screen. It would be advantageous to see the timer and workout routine on a larger screen and not have to pick up your phone to see instructions between each exercise.

### Sign-Up / Log-In:

This is the landing page of the application and where users can both sign-up and log-in to the application through one form. The form uses passport.js for authentication and users persist as logged in until they close the webpage or logout. When the user signs in it saves their username to session storage so the information can easily be used for other functionalisty.



Users can create and save their own custom workout routines with custom times for each exercise. When they start their workout, a timer will begin indicating how much time is left for a particular exercise. When time is done, it will move on to the next exercise with a new timer.

Users will also be able to select preset workout for a "quick start" option. There will be options for preset 5 minute, 10 minute and 15 minute workouts.

The user page will also show a user what workouts they have performed recently and their saved workout routines. There will also be a graph to show them how much time they have spent per week working out.

### Schedule:

#### May 16: MVP
1. Working Data Base - Erik
2. API routes: POST, GET to/from db - After db created
3. Server - Done
4. React pages/components
    * Create workout page
    * Workout Form component - Sawyer
    * Completed workouts component - Clay
    * Login page - Talila
    * Workout page
    * Timers component - Sawyer

#### May 23: Additions
1. Preset workouts
2. Profile page
3. Charts
4. Improve design
5. Authentication - Clay

#### May 30: Final Additions
1. Presentation slides
2. Final tweaks to layout
3. Share workouts to common pool (through Admin)
4. PWA?

### Mockup:
![Sign In](./Sign-in.jpg?raw=true "Sign In")
![Sign Up](./Sign-up.jpg?raw=true "Sign Up")
![Workout Buddy](./landingPage.jpg?raw=true "Workout Buddy")
![Workout Page](./Workout-Page.jpg?raw=true "Workout Page")
