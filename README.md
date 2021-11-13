# Search

### Objective
Develop a single page web application designed to allow users to search for information on the website, given Search and Suggestion API endpoints.

---

### Set-Up
Enter the following commands to install node modules and required dependencies, before running the frontend:
```bash
yarn
```
```bash
yarn dev
```

Navigate to http://localhost:3000 to interact with the application.

---

### Testing
Enter the following command run tests using Jest:
```bash
yarn test
```

---

### Assumptions on Requirements
1. Presence of whitespace before and after a **single** word input does not affect its suggestion and search results.
2. Search and suggestion results are case-insensitive.
3. The total number of results obtained from the API (100) can be overlooked, in place of the number of actual results rendered according to the search query.
4. Clearing the search bar does not clear current search results rendered on the screen.
5. **Titles** of search results that include search term do not need to be bolded. Only parts of the **excerpt text** that include search terms are required to be bolded.
6. If no search results are found, the section of results is left empty. No placeholder is required.
7. If a search term contains multiple words, the search results must contain **all** words in the **same order**.
8. When pressing up and down arrow keys on the list of suggestions, the text in the search input is not required to change accordingly.
9. As the API provided beginning and ending points of highlights for the search results of "child", I assumed that I was required to use the data for the bolding of matching search terms. If I were to use a dynamic approach of bolding relevant search terms instead, it would be similar to that of boldSuggestion().

---

### Technologies Used
Next.js, Tailwind CSS
