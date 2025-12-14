# 🎬 FilmFinder

## Project Description

[cite_start]**FilmFinder** is a modern, responsive web application designed to be a unified discovery platform for searching and exploring both **Movies** and **Anime** in one clean interface[cite: 61, 62].

[cite_start]Built as a Capstone Project to demonstrate proficiency in modern frontend development, FilmFinder provides users with instant access to detailed information like plots, cast, ratings, scores, and episode counts by leveraging multiple external APIs[cite: 62, 64]. [cite_start]The application features a cinematic, dark-themed UI [cite: 14] [cite_start]and is fully responsive across all device sizes[cite: 112].

## Features

The following core functionalities have been implemented (or are planned) for the application:

* [cite_start]**Category Selection:** Users can easily toggle between searching for **Movies** or **Anime** to filter results[cite: 69, 70, 71].
* [cite_start]**Universal Search:** A central search bar fetches real-time data from two different APIs based on the selected category[cite: 74, 75].
* [cite_start]**Detailed Results View:** Results are displayed in a clean, visual grid, showing posters, titles, and key metrics (e.g., Release Year, IMDb Rating, MAL Score, Episodes count)[cite: 78, 83].
* [cite_start]**Dedicated Details Pages:** Clicking a result navigates to a unique details page tailored for the content type, displaying the plot summary, full cast, genres, and other relevant metadata[cite: 90, 91, 99].
* [cite_start]**Responsive Design:** The entire layout is built using Tailwind CSS for a smooth and intuitive experience on desktop, tablet, and mobile devices[cite: 112, 113].

## Tech Stack

* **Frontend Framework:** React JS
* **Styling:** Tailwind CSS (v3.4.1)
* [cite_start]**State Management:** React Hooks (`useState`, `useEffect`) [cite: 650]
* [cite_start]**Routing:** React Router DOM (Planned) [cite: 144]
* [cite_start]**API Client:** `fetch` or `axios` [cite: 644]

## APIs Used

[cite_start]FilmFinder uses two separate, external APIs to provide comprehensive coverage[cite: 64]:

* **Movies:** **OMDb API** (The Open Movie Database).
    * [cite_start]*Purpose:* Fetching movie details, ratings, and cast information[cite: 121, 122, 124].
* **Anime:** **Jikan API**.
    * [cite_start]*Purpose:* Pulls anime data from MyAnimeList, providing titles, scores, episodes, and synopsis[cite: 125, 127, 128].

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
    * [cite_start]The OMDb API requires a free API key[cite: 123].
    * Create a `.env` file in the root directory.
    * Add your API key: `VITE_OMDB_API_KEY="your_api_key_here"`

4.  **Run the Application:**
    ```bash
    npm run dev
    ```
    The application will open in your browser, typically at `http://localhost:5173/`.

## Author

* **[Your Name]** - (Link to your LinkedIn or Portfolio)

## License

This project is licensed under the MIT License - see the `LICENSE.md` file (if you create one) for details.
