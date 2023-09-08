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

### App Component

- **Description**: Main layout of the application.
- **Dependencies**: CSS styling from 'App.css'.
- **Components**: 
  - **Layout**: Wrapper component that includes header and footer.
  - **DataTable**: Main content component.

### Layout Component

- **Description**: Wraps the main content with a header and footer.
- **Components**: 
  - **Header**: Top navigation and branding.
  - **Footer**: Bottom navigation and branding.

### Header Component

- **Description**: Contains main navigation, disclaimer, login button.
- **Features**: Navigation toggle, Disclaimer text, Login Modal.

### Footer Component

- **Description**: Displays logo, links, social media icons, copyright note.

### LoginForm Component

- **Description**: Modal form for user login.
- **Dependencies**: Material-UI, Formik.
- **Features**: Modal can open/close, Login & Cancel actions.

### DataTable
- **Description**: Fetches and displays character data.
- **Components**:
  - **Table**: A generic table container.
  - **TableHead**: Represents the header allowing sorting of columns.
  - **TableBody**: Contains rows of characters' data.
  - **TableRow**: A single row displaying character details.
- **Utilities**: 
  - **Pagination**: Controls for page size and navigation.
  - **PieChart**: Visual representation of character film participation.
  - **SkeletonLoader**: Displays placeholder rows while data is fetched.

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
3. **Selectors**: Place selectors in a separate file.
4. **Normalizing Data**: Use the normalizr library.
5. **Redux Toolkit**: Simplify boilerplate.
6. **Caching**: Implement a caching mechanism.


