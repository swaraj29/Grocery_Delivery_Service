# Taiyo-Assignment

This repository contains the tasks completed as specified in the application form for Taiyo.ai.

## Tech Stack

- **Python**: 3.8.5
- **Jupyter Notebook**: 6.0.3

## Note (For Chrome Users)

To enable Selenium to access the browser, you need to install the Chrome WebDriver:

1. **Download and Install Chrome Browser**: [Google Chrome](https://www.google.com/chrome/)
2. **Download ChromeDriver Executable**: [ChromeDriver Downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)

## Part 1: Web Scraping

### Task
Use Selenium to web scrape NASA Earth Data.

### URL
[NASA Earth Data](https://earthdata.nasa.gov/)

### Steps
1. **Access the Website**: Use Selenium to navigate to the NASA Earth Data website.
2. **Take Screenshot**: Capture a screenshot of the website.
3. **Convert HTML to DataFrame**: Use Selenium and BeautifulSoup (bs4) to scrape the HTML content and convert it into a Pandas DataFrame.

### Example
An example of converting the HTML page to a Pandas DataFrame is provided in the repository.

### Screenshots
- **Website Screenshot**: ![Website Screenshot](path/to/website_screenshot.png)
- **Example DataFrame**: ![Example DataFrame](path/to/example_dataframe.png)

## Part 2: Using the NEWSAPI

### Task
Use an alternative to Google's News API to retrieve news information.

### Example Response
An example response from the alternative News API is provided in the repository.

### Screenshots
- **Example Response Screenshot**: ![Example Response](path/to/newsapi_example_response.png)

## Repository Structure

- **/notebooks**: Contains Jupyter notebooks for web scraping and API tasks.
- **/screenshots**: Contains screenshots related to the tasks.
- **requirements.txt**: List of required Python packages.
- **README.md**: This file.

## Setup

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/taiyo-assignment.git
    cd taiyo-assignment
    ```

2. **Install Dependencies**
    ```sh
    pip install -r requirements.txt
    ```

3. **Run Jupyter Notebook**
    ```sh
    jupyter notebook
    ```

## Contact

For any questions or support, please contact [your-email@example.com](mailto:your-email@example.com).

---

Thank you for checking out the Taiyo-Assignment repository!
