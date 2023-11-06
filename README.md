# Weather_Website

Welcome to the Weather_Website repository! This web application provides real-time weather information for cities around the world. Users can search for a city and get details such as temperature, humidity, wind speed, and more. This README file will guide you through the project structure and how to set up and run the website.

## Project Structure

The project consists of an HTML file, a JavaScript file, and a CSS file. Here's a brief overview of the main files:

- `index.html`: This file contains the HTML structure of the website, including the header, main content, and footer. It also includes Bootstrap for styling and a form for city search.

- `index.js`: This JavaScript file handles fetching weather data from the RapidAPI service, updating the UI with the data, and handling user interactions.

- `style.css`: The CSS file contains custom styling for the website, enhancing the visual appearance and layout.

## Getting Started

To set up this project on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/UtkF2/Weather_Website.git
   ```

2. Open the project folder:

   ```bash
   cd Weather_Website
   ```

3. To fetch weather data, you need to sign up for a RapidAPI key and replace the placeholder with your own key. You can get an API key from [RapidAPI](https://rapidapi.com/). Replace the `apiKey` variable in `index.js` with your actual key:

   ```javascript
   const apiKey = "c077554941msh42e0e88a7310304p19ceaajsn58c59c49cbfc";
   ```

4. Now, open the `index.html` file in a web browser, and you'll see the Weather_Website. Enter a city in the search bar and click the "Search" button to get the weather information.

## Usage

- Enter the name of a city in the search input field and click the "Search" button to fetch weather data for that city.

- The website will display various weather details for the specified city, such as temperature, humidity, wind speed, and sunrise/sunset times.

- The header of the website displays the current time, updating every second. The background color and text color change periodically for a visually appealing effect.

## Author

This Weather_Website was created by [Utkarsh Gupta](https://github.com/UtkF2). If you have any questions or need assistance, feel free to reach out to the author.

## Libraries Used

- [Bootstrap](https://getbootstrap.com): The website uses Bootstrap for styling.

## License

This project is open-source and available under the [MIT License](LICENSE).

Enjoy using the Weather_Website to stay updated with real-time weather information!
