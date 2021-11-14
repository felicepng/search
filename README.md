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

Navigate to http://localhost:3000 using Safari or Google Chrome to interact with the application.

---

### Testing
Enter the following command to run tests using Jest:
```bash
yarn test
```

---

### Assumptions on Requirements
1. Search and suggestion results are case-insensitive.
2. Presence of whitespace before and after a **single** word input does not affect its suggestion and search results.
3. If a search term consists of multiple words, its search results must contain **all** words in **any order**, whereas its suggestion results must contain **all** words in the **same order**.
4. The total number of results obtained from the API (100 results) can be overlooked, in place of the number of actual results rendered according to the search query.
5. Clearing the search bar does not clear current search results rendered on the screen.
6. When pressing Up and Down arrow keys on the suggestion dropdown, the text in the search input is not required to change accordingly.
7. Following the user interface of Google, **titles** of search results that include search terms will not be bolded. Only parts of the **excerpt text** that include search terms will be bolded.
8. Since the API provided starting and ending points of highlights for the search results of "child" specifically, the implementation for the bolding of matching search results was hardcoded. If I were to use a dynamic approach instead, it would be similar to that of the boldSuggestion() function, by using String replaceAll() for each of the search terms.

---

### Technologies Used
Next.js, Tailwind CSS

---

### Design Attributions
1. No search results icon by NikhilDesigner, Pngtree: https://pngtree.com/freepng/no-result-search-icon_6511543.html
2. Singapore Lion Head symbol: https://www.nhb.gov.sg/-/media/nhb/images/resources/national-symbols/resources_lionhead_hires.gif?la=en
