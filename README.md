# 🎬 FilmFinder

## Project Description

**FilmFinder** is a modern, responsive web application designed to be a unified discovery platform for searching and exploring both **Movies** and **Anime** in one clean interface.

Built as a Capstone Project to demonstrate proficiency in modern frontend development, FilmFinder provides users with instant access to detailed information like plots, cast, ratings, scores, and episode counts by leveraging multiple external APIs.The application features a cinematic, dark-themed UI and is fully responsive across all device sizes.

## Features

The following core functionalities have been implemented (or are planned) for the application:

* **Category Selection:** Users can easily toggle between searching for **Movies** or **Anime** to filter results.
* **Universal Search:** A central search bar fetches real-time data from two different APIs based on the selected category.
* **Detailed Results View:** Results are displayed in a clean, visual grid, showing posters, titles, and key metrics (e.g., Release Year, IMDb Rating, MAL Score, Episodes count).
* **Dedicated Details Pages:** Clicking a result navigates to a unique details page tailored for the content type, displaying the plot summary, full cast, genres, and other relevant metadata.
* **Responsive Design:** The entire layout is built using Tailwind CSS for a smooth and intuitive experience on desktop, tablet, and mobile devices.

## Tech Stack

* **Frontend Framework:** React JS
* **Styling:** Tailwind CSS (v3.4.1)
* **State Management:** React Hooks (`useState`, `useEffect`) 
* **Routing:** React Router DOM (Planned) 
* **API Client:** `fetch` or `axios` 

## APIs Used

FilmFinder uses two separate, external APIs to provide comprehensive coverage:

* **Movies:** **OMDb API** (The Open Movie Database).
    * *Purpose:* Fetching movie details, ratings, and cast information.
* **Anime:** **Jikan API**.
    * *Purpose:* Pulls anime data from MyAnimeList, providing titles, scores, episodes, and synopsis.

## Installation and Running Locally

To get a copy of this project up and running on your local machine, follow these steps:

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed on your machine.

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR GITHUB REPO URL HERE]
    cd FilmFinderApp
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Setup API Keys (OMDb Only):**
    * The OMDb API requires a free API key.
    * Create a `.env` file in the root directory.
    * Add your API key: `VITE_OMDB_API_KEY="your_api_key_here"`

4.  **Run the Application:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, typically at `http://localhost:5173/`.

## Author

* **Barema Gael** 


