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
Alternatively, the application is deployed with Vercel at https://search-2rdek2das-felicepng.vercel.app

---

### Testing
Enter the following command to run tests using Jest:
```bash
yarn test
```

---

### Assumptions on Requirements
1. Search and suggestion results are **case-insensitive**.
2. Presence of whitespace before and after search terms does not affect its search results. However, whitespace between search terms affects its suggestion results.
3. If a search term consists of multiple words, its search results must contain **all** words in **any order**, whereas its suggestion results must contain **all** words in the **same order**.
4. The total number of results provided by the API (100 results) is unused, in place of the number of actual results rendered according to the search query.
5. Clearing the search bar does not clear current search results rendered on the screen.
6. When pressing Up and Down arrow keys on the suggestion dropdown, the text in the search input is not required to change accordingly.
7. With reference to the user interface of Google Search, **titles** of search results that include search terms will not be bolded. Only parts of the **excerpt text** that include search terms will be bolded.
8. The starting and ending points of highlights provided by the API is unused, in place of a dynamic approach used according to the search query.

---

### Technologies Used
Next.js, Tailwind CSS

---

### Design Attributions
1. No Result Search icon by NikhilDesigner, Pngtree: https://pngtree.com/freepng/no-result-search-icon_6511543.html
2. Singapore Lion Head symbol: https://www.nhb.gov.sg/-/media/nhb/images/resources/national-symbols/resources_lionhead_hires.gif?la=en
