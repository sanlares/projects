# Open Amenities

A prototype that connects residents with the facts behind the public places their council runs: pools, libraries, parks, community centres, sports grounds and public toilets.

Most Australian council budget dashboards start from the spreadsheet. This one starts from the map. Residents find a place they already know, tap it, and see in plain English:

- what it cost to build and what it costs to run each year
- what that means per resident and per visit
- where the yearly money goes
- how it compares with similar places
- why it is in that location
- how and when the decision was made, and how many residents were consulted
- who looks after it (council team or contractor) and when the contract ends
- its age, condition, history and planned works
- features and accessibility

> **Sample data.** Locations are real places in the City of Sydney area, but every figure, date, decision and operator detail is illustrative. This is not an official City of Sydney product.

## Design principles

| Principle | How it shows up |
|---|---|
| Place first, numbers second | The map and a plain list are the entry points. Numbers appear only once a resident has chosen a place they care about. |
| Plain language | Follows the Australian Government Style Manual. "Cost to run each year" instead of "Opex". No accounting jargon. |
| Numbers with context | Every dollar figure is paired with something relatable: per resident, per visit, and compared with the average of similar places. |
| Progressive disclosure | List card shows one number. The detail view expands into money, reasons, decisions, people and history. |
| Trust and transparency | Every page states the source, date and the council resolution behind the decision. A "Sample data" badge is always visible. |
| Accessible by default (WCAG 2.2 AA) | Keyboard friendly list as an alternative to the map, visible focus, 44px tap targets, colour never used alone (icons and labels too), dark mode, reduced motion respected, Esc closes the detail view. |
| Mobile first | Map on top, bottom sheet below on phones. Sidebar and map side by side on larger screens. |
| Shareable | Every place has its own link (for example `#sydney-park`) that can be pasted into a community group or email. |
| Two-way | "Report a problem" and "Was this page easy to understand?" close the loop with the council. |

## Run it

No build step. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

It also works on GitHub Pages as is.

## Structure

```
index.html          page shell
styles.css          design tokens (light and dark), layout, components
app.js              map, filters, search, sort, detail view, hash routing
data/facilities.js  sample data: council info, categories, facilities
```

## Using real data

Replace `data/facilities.js` with an export from the council's asset register and budget system. Each facility needs:

| Field | Meaning |
|---|---|
| `id`, `name`, `category`, `suburb`, `address`, `coords` | Identity and location |
| `opened`, `builtOriginally`, `lastUpgrade` | Age and history |
| `capitalCost`, `capitalNote` | What it cost to build or last rebuild |
| `annualCost`, `breakdown[]` | Yearly running cost and where it goes |
| `visitsPerYear` | Used for cost per visit |
| `maintainedBy` | Team or contractor, detail, contract end year |
| `whyHere` | Plain English reason for the location |
| `decision` | Year, decision body, resolution reference, summary, number consulted |
| `condition`, `upcoming[]` | Condition rating and planned works |
| `features[]`, `access[]` | What is there and accessibility features |

`COUNCIL.population` drives the "per resident" figures.

## Ideas for the next iteration

- Link each decision to the real meeting minutes and budget line
- "Near me" using location, and walking distance to each place
- Suburb view: what is spent in my suburb compared with the council average
- Plain English glossary and translations for the top community languages
- Open data feed so others can reuse the dataset
