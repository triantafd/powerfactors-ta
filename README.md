<!-- @format -->

# React Application Documentation

A comprehensive guide to the React application's structure and components.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Components & Main Files Overview](#components--main-files-overview)
- [Utilities & Configurations](#utilities--configurations)
- [Redux Architecture](#redux-architecture)
- [Service Layer](#service-layer)
- [Suggestions](#suggestions)

## Folder Structure

    src/
    |-- components/
    | |-- App/
    | |-- DataTable/
    | |-- Footer/
    | |-- Header/
    | |-- Layout/
    | |-- LoginForm/
    | |-- CustomModal/
    | |-- Pagination/
    | |-- PieChart/
    | |-- SkeletonLoader/
    | |-- CharacterPopUpInfo/
    | |-- Table/
    | |-- TableHead/
    | -- TableBody/ |-- conf/ | -- tableConfig.ts
    |-- redux/
    | |-- store/
    | |-- actions/
    | -- reducers/ |-- services/ | -- disneyService.ts
    |-- utils/
    | |-- debounce.ts
    | `-- sorting.ts

## Components & Main Files Overview

### Main Entry Point: `index.js`

- **Description**: Entry point of the React application. App wrapped in Provider for Redux store access.
- **Dependencies**: Bootstrap, FontAwesome, React, ReactDOM, Redux store.

### App Component `src/components/App/App.js`

- **Description**: Main layout of the application.
- **Dependencies**: CSS styling from 'App.css'.
- **Components**:
  - **Layout**: Wrapper component that includes header and footer.
  - **DataTable**: Main content component.

### Layout Component `src/components/Layout/Layout.js`

- **Description**: Wraps the main content with a header and footer.
- **Components**:
  - **Header**: Top navigation and branding.
  - **Footer**: Bottom navigation and branding.

### Header Component `src/components/Layout/Header.js`

- **Description**: Contains main navigation, disclaimer, login button.
- **Features**: Navigation toggle, Disclaimer text, Login Modal.

### Footer Component `src/components/Layout/Footer.js`

- **Description**: Displays logo, links, social media icons, copyright note.

### LoginForm Component

- **Description**: Modal form for user login.
- **Dependencies**: Material-UI, Formik.
- **Features**: Modal can open/close, Login & Cancel actions.

### DataTable `src/components/DataTable/DataTable.js`

- **Description**: Fetches and displays character data.
- **Components and Utilities**:

  - **Table**: A generic table container.
  - **TableHead**: Represents the header allowing sorting of columns.
  - **TableBody**: Contains rows of characters' data.
  - **TableRow**: A single row displaying character details.
  - **Pagination**: Controls for page size and navigation.
  - **PieChart**: Visual representation of character film participation.
  - **SkeletonLoader**: Displays placeholder rows while data is fetched.
  - **Character PopUp**: Presents a modal with detailed information about a selected character, including their image and appearances.
  - **Features**:

    - **Filtering**:
      - **Search by Name**: Allows users to filter the table's data based on character names.
      - **Search by TV Show**: Permits filtering of characters based on the TV shows they appeared in.
    - **Sorting**:

      - The table offers dynamic multi-level sorting using the `multiLevelSort` utility.
      - Users can click on column headers to toggle the sorting direction for that particular column.

    - **State Management (Redux)**:

      - **Action**: `fetchCharacters`
      - **Reducer**: State shape managed under `state.characters`

    - **Filtering** Utilities and Configurations

      - **Sorting**: `multiLevelSort`, `SortedByState`
      - **Debounce**: `debounce`
      - **Configuration**: `disneyCharacterColumns`

    - **Styling**: Uses a dedicated CSS file: `DataTable.css`.

    - **Filtering**:  How to Use
      1. **Filtering**:
        - Type in the `Search by Name` or `Search by TV Show` input fields to filter the table data.
        - Filtering is debounced, meaning the API call to fetch filtered data will be made a short while after the user stops typing to ensure optimal performance.

      2. **Sorting**:
        - Click on the column headers to sort the data based on that column.
        - The sorting direction (ascending/descending) toggles with each click.

      3. **View Character Details**:
        - Click on a table row to view detailed information about the selected character in a popup modal.

      4. **View Pie Chart**:
        - Click the `Show Pie Chart` button to open a modal displaying a pie chart of the characters based on their TV show appearances.

      5. **Pagination**:
        - Use the pagination controls below the table to navigate between pages or adjust the number of rows displayed per page.
        
      ## TODO

      - **Refine Filtering**:
        - Remove debouncers and handle input changes in a more optimal way.
        - Implement a filtering procedure similar to how `sortingModel` works in the app.

## Utilities & Configurations

### `src/conf/tableConfig.ts`

- **Description**: Specifies how each column in the data table should be presented and functioned.

### `src/utils/debounce.ts`

- **Description**: Debounces a function to avoid excessive calls.
- **Usage**: Useful during window resize or input change.

### `src/utils/sorting.ts`

- **Description**: Utilities for sorting.
- **Features**: Allows multi-level sorting based on multiple criteria.

## Redux Architecture

### `src/redux/`

- **store.js**: Redux store configuration.
- **reducers/characterReducer.js**: Reducer for character actions.
- **reducers/index.js**: Combines all reducers.
- **actions/characterActions.js**: Action creators for character-related actions.

## Service Layer

### `src/services/disneyService.js`

**DisneyService:**

- **Description**: API service to fetch character data from Disney.
- **Features**: Constructs API URL based on parameters for flexible requests.

---

**Note**: Always consult the source code for more specific details and nuances.

## Suggestions

1. **Error Handling**: Handle various types of errors distinctly.
2. **Unit Tests**: Write tests for actions, reducers, services.
3. **Redux Toolkit**: Simplify boilerplate.
4. **Caching**: Implement a caching mechanism.
