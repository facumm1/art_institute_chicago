# Modak Makers - React Native Coding Challenge - Art Institute Of Chicago Catalog App

Hi! This is a coding challenge for Modak Makers. I created a catalog application that:

- The user should be able to see a thumbnail and a small description of each artwork in the main screen of the app. (done ✓)
- When clicking on a thumbnail the user must be sent to a detailed screen of the artwork containing a better quality image and more detailed information about the piece, the author, and any other data you consider might be relevant for the end user. (done ✓)
- The user should be able to save some favorite artworks. (done ✓)
- The user should be able to explore favorite artworks even if the application is completely closed and reopened. (done ✓)

## Application Optional Features

The app has the following extra features or development tools:

- **Redux-toolkit** to manage application state:
  Used for general artworks and favourite artworks. ✓
- **RTK Query** to manage API calls and data:
  Used for fetching ChicagoAPI. ✓
- **Smooth animations or transitions** when switching views or hiding elements:
  I created 2 HOC that adds a fade or bounce animation to components using react-native-reanimated.
- Use **React Navigation** for screen navigation:
  Used Bottom Tab Navigator with Stack Navigators to navigate between general artworks and favourites artworks.
- **Pagination (infinite scrolling)** for general artworks:
  After reaching the end of the artworks, the app renders more artworks after loading.
