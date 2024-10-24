# Candidate Search Application

## Description

The Candidate Search application is designed to allow employers to search for potential candidates using the GitHub API. This application pulls all relevant candidate data, displays it in an easy-to-use interface, and allows users to store selected candidate information in local storage for future reference.

## User Story

**As an employer,** 
I want a candidate search application 
So that I can hire the best candidates. 

## Acceptance Criteria

- When the candidate search page loads, information for one candidate should be displayed, including the candidate's name, username, location, and number of public repositories.
- When I click the **Next** button, the next candidate's information should be displayed, and the previous candidate's information should be saved to a list of potential candidates.
- The list of potential candidates should persist and be available for future viewing.
- When there are no more candidates to review, an appropriate message should be shown indicating that no more candidates are available.
- If no candidates have been accepted, the list of candidates should be empty.

## Technical Acceptance Criteria (40%)

- The application uses the GitHub API to retrieve user data.
- The application uses TypeScript to type user data and handle API responses.
- The application stores potential candidates in local storage for future access.

## Deployment (32%)

- The application is deployed at a live URL.
- The application loads with no errors.
- A GitHub URL has been submitted.
- The repository contains the complete source code for the application.

## Application Quality (15%)

- The user experience is intuitive and easy to navigate.
- The user interface is clean and polished.
- The design resembles the mock-up functionality provided in the challenge instructions.

## Repository Quality (13%)

- The repository has a unique name.
- The repository follows best practices for file structure and naming conventions.
- The repository includes a `README.md` file that clearly explains the project and provides installation instructions.

## Installation

To run this application locally, follow these steps:

1. Clone the repository from GitHub:
    ```bash
    git clone https://github.com/your-username/candidate-search-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd candidate-search-app
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Set up the `.env` file with your GitHub API token:
    ```
    REACT_APP_GITHUB_API_TOKEN=your_personal_access_token
    ```

5. Start the development server:
    ```bash
    npm start
    ```

## Usage

- Navigate to the deployed URL or run the application locally.
- The application will automatically fetch and display candidates from the GitHub API.
- Use the **Next** button to browse through candidates and save their information.

## Technologies Used

- React
- TypeScript
- GitHub API
- HTML, CSS
- Node.js
- Vite (for bundling and serving)

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b your-feature-branch
    ```

3. Commit your changes:
    ```bash
    git commit -m "Description of your changes"
    ```

4. Push your changes to your forked repository:
    ```bash
    git push origin your-feature-branch
    ```

5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE] file for more details.

## Contact

For questions, issues, or contributions, please contact:

- **GitHub Username:** `your-username`
    - [GitHub Profile](https://github.com/khorimoore)

### Submit Video Link

If you have a video demo of the project or walkthrough, please submit the video link [here](your-video-submission-link).

---

Feel free to reach out for further assistance or submit your video demo for evaluation!