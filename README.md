# Hymn Tracker

In my church organization, I serve as the congregation pianist. To ensure I don't play the same hymns over and over again, I created this mobile app to log each song I play and when. Now I can filter through the hymns easier than ever to choose which one to play on Sunday.

## Instructions for Build and Use

Steps to install, build, and/or run the software:

1. Install [Node.js](https://nodejs.org/) (the current LTS release is recommended), then clone this repository and open a terminal in the project folder.
2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and provide the Supabase project credentials used by the app:

   ```text
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-project-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   Do not commit the `.env` file or any private keys to the repository.
4. Start the Expo development server:

   ```bash
   npm start
   ```

5. Use the QR code to open the app in Expo Go on a physical device, or use one of the platform-specific commands:

   ```bash
   npm run android
   npm run ios
   npm run web
   ```

Instructions for using the software:

1. Open the Record screen and enter the sacrament meeting music agenda (opening hymn, sacrament hymn, and closing hymn).
2. Save the agenda to record the hymns in the database.
3. Visit the History tab to view past sacrament meeting agendas.
4. Visit the Stats tab to view the hymns you have played, ordered from most frequent to least frequent.

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Node.js LTS and npm
* Expo SDK 57 (`expo` version `~57.0.28`)
* React 19.2.3
* React Native 0.86.3
* React Native Web `~0.21.0` for running the app in a web browser
* Supabase JavaScript client `^2.117.3`
* Async Storage `2.2.0` for persisting the Supabase session
* Expo Go for testing on a physical Android or iOS device, or the corresponding Android/iOS emulator tools for local native runs
* A Supabase project containing the tables and data required by the application

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
* [React Native Tutorial](https://reactnative.dev/docs/tutorial)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Add delete button to remove hymns accidentally added
* [ ] Create rest hymn input box that is optional
* [ ] Make the color scheme more interesting
* [ ] Design algorithm that shows only hymns I haven't played in the last 4 months so as to easily prevent repeated others