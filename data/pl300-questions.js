// PL-300: Microsoft Power BI Data Analyst Practice Exam Questions
// Learn With Abinash - https://learnwithabinash.github.io/learnwithabinash

const PL300_EXAM = {
  id: "pl300",
  title: "PL-300: Microsoft Power BI Data Analyst",
  description: "Practice exam for the Microsoft PL-300 certification covering data preparation, modeling, visualization, and deployment.",
  timeMinutes: 90,
  passingScore: 70,
  questions: [
    {
      id: 1,
      question: "Which Power BI component is used to create and publish reports to the Power BI service?",
      options: [
        "Power BI Service",
        "Power BI Desktop",
        "Power BI Mobile",
        "Power BI Report Server"
      ],
      correct: 1,
      explanation: "Power BI Desktop is the primary tool for creating reports. It's a free Windows application where you connect to data, transform it, create visualizations, and publish reports to the Power BI service."
    },
    {
      id: 2,
      question: "What is the purpose of the CALCULATE function in DAX?",
      options: [
        "To create calculated columns only",
        "To modify the filter context in which an expression is evaluated",
        "To perform basic arithmetic operations",
        "To import data from external sources"
      ],
      correct: 1,
      explanation: "CALCULATE is one of the most important DAX functions. It evaluates an expression in a modified filter context. It allows you to add, remove, or modify filters that are applied to the data, enabling complex calculations like year-over-year comparisons."
    },
    {
      id: 3,
      question: "In Power BI, what is a star schema?",
      options: [
        "A type of visualization",
        "A data model design with a central fact table connected to dimension tables",
        "A security feature for row-level security",
        "A type of DAX function"
      ],
      correct: 1,
      explanation: "A star schema is a data modeling approach where a central fact table (containing measures/metrics) is connected to surrounding dimension tables (containing descriptive attributes). This is the recommended design pattern in Power BI for optimal performance and simplicity."
    },
    {
      id: 4,
      question: "Which of the following is NOT a valid relationship cardinality in Power BI?",
      options: [
        "One-to-Many (1:*)",
        "Many-to-Many (*:*)",
        "One-to-One (1:1)",
        "Many-to-None (*:0)"
      ],
      correct: 3,
      explanation: "Power BI supports three relationship cardinalities: One-to-Many (1:*), Many-to-Many (*:*), and One-to-One (1:1). 'Many-to-None' is not a valid cardinality type in Power BI or in relational database theory."
    },
    {
      id: 5,
      question: "What does the SUMX function do in DAX?",
      options: [
        "Sums all values in a column",
        "Iterates over a table and evaluates an expression for each row, then sums the results",
        "Creates a summary table",
        "Exports data to Excel"
      ],
      correct: 1,
      explanation: "SUMX is an iterator function that evaluates an expression for each row of a table and then returns the sum of all those values. Unlike SUM which simply adds up a column, SUMX can calculate row-level expressions before aggregating. Example: SUMX(Sales, Sales[Quantity] * Sales[UnitPrice])"
    },
    {
      id: 6,
      question: "Which Power Query step removes the top rows from a table?",
      options: [
        "Remove Columns",
        "Remove Top Rows",
        "Filter Rows",
        "Skip Rows"
      ],
      correct: 1,
      explanation: "The 'Remove Top Rows' transformation in Power Query allows you to remove a specified number of rows from the top of the table. This is useful when source data has header rows or metadata at the top that you don't need."
    },
    {
      id: 7,
      question: "In Power BI, what is the default aggregation for a numeric column when added to a visualization?",
      options: [
        "Count",
        "Average",
        "Sum",
        "Maximum"
      ],
      correct: 2,
      explanation: "When you add a numeric column to a visualization in Power BI, the default aggregation is SUM. Power BI automatically applies this aggregation, but you can change it to other aggregations like Average, Count, Min, Max, etc."
    },
    {
      id: 8,
      question: "What is the purpose of Row-Level Security (RLS) in Power BI?",
      options: [
        "To encrypt data at rest",
        "To restrict data access for specific users based on filters",
        "To control who can create reports",
        "To manage workspace permissions"
      ],
      correct: 1,
      explanation: "Row-Level Security (RLS) restricts data access at the row level. You define roles with DAX filter expressions, and when users in those roles view reports, they only see data that passes those filters. RLS is configured in Power BI Desktop and managed in the Power BI service."
    },
    {
      id: 9,
      question: "Which of the following is a valid way to handle incremental refresh in Power BI?",
      options: [
        "Manually deleting old data and re-importing",
        "Using the Incremental Refresh policy with RangeStart and RangeEnd parameters",
        "Creating a new dataset each time",
        "Using bookmarks to filter data"
      ],
      correct: 1,
      explanation: "Incremental Refresh in Power BI uses RangeStart and RangeEnd parameters (of type Date/Time) to partition data by time ranges. Only new or changed data is refreshed, while historical data remains cached. This significantly reduces refresh time and resource consumption."
    },
    {
      id: 10,
      question: "What does the RELATED function do in DAX?",
      options: [
        "Creates a new relationship between tables",
        "Returns a related value from another table using an existing relationship",
        "Removes a relationship between tables",
        "Counts the number of related records"
      ],
      correct: 1,
      explanation: "The RELATED function follows an existing relationship to return the value of a column from the related table. It works in a many-to-one direction, similar to a VLOOKUP in Excel. For example, RELATED(Products[Category]) used in a Sales table returns the category from the Products table."
    },
    {
      id: 11,
      question: "Which visual type in Power BI is best suited for showing the contribution of parts to a whole?",
      options: [
        "Line Chart",
        "Scatter Plot",
        "Pie Chart or Donut Chart",
        "Waterfall Chart"
      ],
      correct: 2,
      explanation: "Pie charts and donut charts are designed to show proportional data — how individual parts contribute to a whole. However, Power BI best practices suggest using treemaps or stacked bar charts for better readability when there are many categories."
    },
    {
      id: 12,
      question: "In Power Query, what does the 'Merge Queries' operation do?",
      options: [
        "Combines rows from two tables vertically",
        "Joins two tables based on matching columns (like SQL JOIN)",
        "Deletes duplicate rows",
        "Splits a column into multiple columns"
      ],
      correct: 1,
      explanation: "Merge Queries in Power Query performs a join operation between two tables based on one or more matching columns, similar to SQL JOINs. It supports Left Outer, Right Outer, Full Outer, Inner, Left Anti, and Right Anti join types."
    },
    {
      id: 13,
      question: "What is the difference between a Calculated Column and a Measure in Power BI?",
      options: [
        "There is no difference",
        "Calculated columns are computed row by row and stored in the model; measures are computed at query time based on filter context",
        "Measures are stored in the model; calculated columns are computed at query time",
        "Calculated columns can only use Power Query; measures can only use DAX"
      ],
      correct: 1,
      explanation: "Calculated columns are evaluated row by row during data refresh and stored in the data model, consuming memory. Measures are evaluated dynamically at query time based on the current filter context of the visualization. Use measures for aggregations and calculated columns when you need row-level values."
    },
    {
      id: 14,
      question: "Which DAX function returns the number of rows in a table?",
      options: [
        "COUNT",
        "COUNTA",
        "COUNTROWS",
        "DISTINCTCOUNT"
      ],
      correct: 2,
      explanation: "COUNTROWS returns the number of rows in a table or table expression. COUNT counts non-blank values in a column, COUNTA counts non-blank values including text, and DISTINCTCOUNT counts unique values in a column."
    },
    {
      id: 15,
      question: "What is a slicer in Power BI?",
      options: [
        "A type of chart that cuts data into segments",
        "A visual filter element that allows users to interactively filter data on a report page",
        "A data transformation tool in Power Query",
        "A function for splitting strings in DAX"
      ],
      correct: 1,
      explanation: "A slicer is a standalone visual filter on a Power BI report page. Users can click on slicer values to filter other visuals on the page interactively. Slicers support single select, multi-select, range selection, and various display formats like lists, dropdowns, and date ranges."
    },
    {
      id: 16,
      question: "In Power BI, what is the purpose of a Gateway?",
      options: [
        "To create mobile reports",
        "To provide secure data transfer between on-premises data sources and the Power BI service",
        "To schedule email alerts",
        "To share reports with external users"
      ],
      correct: 1,
      explanation: "A Power BI Gateway acts as a bridge between on-premises data sources and the Power BI service in the cloud. It enables secure data transfer for scheduled refresh, DirectQuery, and live connections, without exposing the on-premises data directly to the internet."
    },
    {
      id: 17,
      question: "Which DAX function is used to switch between different expressions based on conditions?",
      options: [
        "IF",
        "SWITCH",
        "CALCULATE",
        "FILTER"
      ],
      correct: 1,
      explanation: "The SWITCH function evaluates an expression against a list of values and returns the result corresponding to the first matching value. It's a cleaner alternative to nested IF statements. Example: SWITCH(TRUE(), [Sales] > 1000, \"High\", [Sales] > 500, \"Medium\", \"Low\")"
    },
    {
      id: 18,
      question: "What is DirectQuery mode in Power BI?",
      options: [
        "Data is imported and stored in the Power BI model",
        "Queries are sent directly to the source database every time a user interacts with a report",
        "Data is cached locally for offline use",
        "A way to directly query DAX formulas"
      ],
      correct: 1,
      explanation: "In DirectQuery mode, no data is imported into Power BI. Instead, every interaction (filter, slice, etc.) generates a query sent to the source database in real-time. This ensures data is always current but may result in slower performance compared to Import mode."
    },
    {
      id: 19,
      question: "Which Power BI feature allows you to create a navigational experience similar to a multi-page app?",
      options: [
        "Filters pane",
        "Bookmarks and Buttons",
        "Parameters",
        "Q&A visual"
      ],
      correct: 1,
      explanation: "Bookmarks capture the state of a report page (filters, visibility, slicer selections), and buttons with bookmark actions create interactive navigation. Together, they enable drill-through pages, tabbed navigation, and interactive storytelling experiences."
    },
    {
      id: 20,
      question: "What does the ALL function do in DAX?",
      options: [
        "Selects all columns in a table",
        "Returns all rows of a table ignoring any applied filters",
        "Applies all available filters",
        "Creates all possible combinations of values"
      ],
      correct: 1,
      explanation: "The ALL function removes all filters from a table or specific columns, returning all rows regardless of the current filter context. It's commonly used with CALCULATE to create measures like percentage of total: DIVIDE([Sales], CALCULATE([Sales], ALL(Products)))"
    },
    {
      id: 21,
      question: "In Power BI Desktop, where do you create and manage data model relationships?",
      options: [
        "Report View",
        "Data View",
        "Model View",
        "DAX Editor"
      ],
      correct: 2,
      explanation: "The Model View in Power BI Desktop is where you create, manage, and visualize relationships between tables. You can drag and drop to create relationships, set cardinality and cross-filter direction, and organize your data model layout."
    },
    {
      id: 22,
      question: "Which of the following is a best practice for designing a Power BI data model?",
      options: [
        "Use as many tables as possible for flexibility",
        "Create a flat, denormalized single table",
        "Use a star schema with fact and dimension tables",
        "Avoid using relationships between tables"
      ],
      correct: 2,
      explanation: "Star schema is the recommended data modeling approach in Power BI. It uses a central fact table (with numeric measures) connected to dimension tables (with descriptive attributes). This design optimizes query performance, reduces model complexity, and aligns with how DAX calculations work."
    },
    {
      id: 23,
      question: "What is the TREATAS function used for in DAX?",
      options: [
        "Creating tree visualizations",
        "Applying the data lineage of one column to another, creating a virtual relationship",
        "Sorting hierarchical data",
        "Filtering data in a tree structure"
      ],
      correct: 1,
      explanation: "TREATAS applies the data lineage of one column to another column from a different table, effectively creating a virtual relationship for filter propagation. It's useful when you can't create a physical relationship or need to use an alternate relationship for specific calculations."
    },
    {
      id: 24,
      question: "What is the purpose of the 'Append Queries' feature in Power Query?",
      options: [
        "Joins tables based on matching columns",
        "Stacks tables on top of each other (UNION operation)",
        "Adds calculated columns to a table",
        "Creates a parameter from a query"
      ],
      correct: 1,
      explanation: "Append Queries in Power Query performs a UNION-like operation, stacking rows from two or more tables vertically into a single table. The tables should have the same (or similar) column structure. This is useful for combining monthly data files, regional data, etc."
    },
    {
      id: 25,
      question: "Which license is required to create and publish content to Power BI workspaces in the service?",
      options: [
        "Power BI Free",
        "Power BI Pro or Premium Per User (PPU)",
        "Microsoft 365 Basic",
        "Azure Free Tier"
      ],
      correct: 1,
      explanation: "A Power BI Pro or Premium Per User (PPU) license is required to publish content to workspaces (other than 'My Workspace') and share content with others. Power BI Free users can only publish to their personal 'My Workspace' and cannot share content."
    },
    {
      id: 26,
      question: "What does the CROSSFILTER function do in DAX?",
      options: [
        "Creates a new cross filter",
        "Specifies the cross-filtering direction to be used in a calculation",
        "Removes all cross filters",
        "Counts cross-filtered rows"
      ],
      correct: 1,
      explanation: "CROSSFILTER is a relationship modifier function that changes the cross-filter direction of a relationship for the duration of a specific calculation. It can set the direction to Single, Both, or None, overriding the model's default configuration."
    },
    {
      id: 27,
      question: "In Power BI, what is a composite model?",
      options: [
        "A model with only imported data",
        "A model that combines DirectQuery and Import storage modes in the same model",
        "A model with only calculated tables",
        "A model with no relationships"
      ],
      correct: 1,
      explanation: "A composite model in Power BI allows you to combine different storage modes (Import, DirectQuery, and Dual) within the same data model. This flexibility lets you import smaller dimension tables for performance while keeping large fact tables in DirectQuery mode."
    },
    {
      id: 28,
      question: "Which DAX function creates a table with a single column of distinct values?",
      options: [
        "DISTINCT",
        "VALUES",
        "SUMMARIZE",
        "Both A and B"
      ],
      correct: 3,
      explanation: "Both DISTINCT and VALUES return a single-column table of distinct values. The key difference is that VALUES includes the blank row that Power BI adds when there are referential integrity violations (unmatched foreign keys), while DISTINCT does not include this blank row."
    },
    {
      id: 29,
      question: "What is the maximum file size for a .pbix file uploaded to Power BI Pro?",
      options: [
        "100 MB",
        "1 GB",
        "10 GB",
        "Unlimited"
      ],
      correct: 1,
      explanation: "Power BI Pro has a maximum dataset (pbix file) size limit of 1 GB. For larger datasets, you need Power BI Premium, which supports datasets up to 10 GB (or more with the Large Dataset Storage Format). This limit applies to the compressed file size."
    },
    {
      id: 30,
      question: "In Power Query, what does 'Unpivot Columns' do?",
      options: [
        "Removes selected columns",
        "Transforms column headers into row values, converting wide data to tall format",
        "Creates pivot tables",
        "Sorts columns alphabetically"
      ],
      correct: 1,
      explanation: "Unpivot Columns transforms selected columns into attribute-value pairs, converting wide-format data into tall-format data. Column names become values in an 'Attribute' column, and cell values go into a 'Value' column. This is essential for normalizing data from spreadsheet-style layouts."
    },
    {
      id: 31,
      question: "What is the purpose of a drillthrough page in Power BI?",
      options: [
        "To display summary data",
        "To allow users to navigate to a detailed page filtered by the context of the clicked data point",
        "To create a new dataset",
        "To export data to Excel"
      ],
      correct: 1,
      explanation: "Drillthrough pages let users right-click on a data point in one visual and navigate to a detail page automatically filtered by that context. For example, clicking on a product category in a chart could navigate to a page showing detailed sales data for that specific category."
    },
    {
      id: 32,
      question: "Which DAX time intelligence function calculates the total for the year-to-date?",
      options: [
        "TOTALYTD",
        "PREVIOUSYEAR",
        "DATEADD",
        "SAMEPERIODLASTYEAR"
      ],
      correct: 0,
      explanation: "TOTALYTD evaluates an expression for the year-to-date, from the beginning of the year to the latest date in the current filter context. Example: TOTALYTD([Total Sales], 'Date'[Date]) returns cumulative sales from January 1st to the latest filtered date."
    },
    {
      id: 33,
      question: "What does the USERELATIONSHIP function do in DAX?",
      options: [
        "Creates a new relationship",
        "Activates an inactive relationship for the duration of a specific calculation",
        "Deletes a relationship",
        "Changes the cardinality of a relationship"
      ],
      correct: 1,
      explanation: "USERELATIONSHIP activates an inactive relationship between two tables for the duration of a specific DAX calculation. Power BI only allows one active relationship between two tables, but you can create additional inactive relationships and activate them with USERELATIONSHIP when needed."
    },
    {
      id: 34,
      question: "In Power BI, what is the purpose of aggregations?",
      options: [
        "To create custom visuals",
        "To improve query performance by caching pre-aggregated data from DirectQuery tables",
        "To add totals to tables",
        "To merge datasets"
      ],
      correct: 1,
      explanation: "Aggregations in Power BI allow you to define pre-aggregated Import-mode tables that serve as a cache for DirectQuery tables. When a query can be answered by the aggregation table, it uses the faster cached data. For detailed queries, Power BI falls through to DirectQuery."
    },
    {
      id: 35,
      question: "Which of the following is NOT a valid join type in Power Query's Merge operation?",
      options: [
        "Left Outer Join",
        "Cross Join",
        "Inner Join",
        "Full Outer Join"
      ],
      correct: 1,
      explanation: "Power Query Merge supports: Left Outer, Right Outer, Full Outer, Inner, Left Anti, and Right Anti joins. Cross Join (Cartesian product) is not a standard merge option in Power Query, though it can be achieved through other methods like custom columns."
    },
    {
      id: 36,
      question: "What is the SELECTEDVALUE function used for in DAX?",
      options: [
        "To always return the first value in a column",
        "To return the value when there is only one distinct value in the filter context, otherwise returns an alternate result",
        "To select specific rows from a table",
        "To select which measure to use"
      ],
      correct: 1,
      explanation: "SELECTEDVALUE returns the value of a column when there's exactly one distinct value in the current filter context. If there are multiple values or no values, it returns an optional alternate result (or BLANK if not specified). Commonly used in dynamic titles and conditional measures."
    },
    {
      id: 37,
      question: "In Power BI, what is a dataflow?",
      options: [
        "The flow of data between visuals",
        "A cloud-based data preparation technology that uses Power Query Online to ingest and transform data",
        "A type of dashboard",
        "An animation effect in reports"
      ],
      correct: 1,
      explanation: "Power BI Dataflows are cloud-based ETL processes that use Power Query Online to extract, transform, and load data into Azure Data Lake Storage. Dataflows enable data reuse across multiple datasets and workspaces, creating a single source of truth for common data entities."
    },
    {
      id: 38,
      question: "Which of the following is the correct DAX syntax for a simple measure?",
      options: [
        "Total Sales := SUM(Sales[Amount])",
        "Total Sales = SUM(Sales[Amount])",
        "MEASURE Total Sales = SUM(Sales[Amount])",
        "CREATE MEASURE Total Sales AS SUM(Sales[Amount])"
      ],
      correct: 1,
      explanation: "In Power BI Desktop, the correct syntax for creating a measure is: MeasureName = DAX Expression. The ':=' syntax is used in DAX Studio and Tabular Editor, while the '=' syntax is the standard in Power BI Desktop's formula bar."
    },
    {
      id: 39,
      question: "What is the purpose of the Performance Analyzer in Power BI Desktop?",
      options: [
        "To test internet connection speed",
        "To measure and log the time taken by each visual to render and query data",
        "To optimize DAX formulas automatically",
        "To benchmark against other reports"
      ],
      correct: 1,
      explanation: "The Performance Analyzer in Power BI Desktop records and displays the time taken by each visual to execute DAX queries, render visuals, and process other events. It helps identify slow-performing visuals and queries so you can optimize report performance."
    },
    {
      id: 40,
      question: "What does the FILTER function do in DAX?",
      options: [
        "Removes all filters from a table",
        "Returns a table that is a subset of another table based on a condition",
        "Filters visualizations in the report",
        "Creates a slicer"
      ],
      correct: 1,
      explanation: "The FILTER function returns a table that represents a subset of another table, where each row satisfies the specified Boolean condition. It's commonly used as a filter argument inside CALCULATE to apply complex filter conditions that can't be expressed as simple column filters."
    },
    {
      id: 41,
      question: "In Power BI, what is a paginated report?",
      options: [
        "A report with multiple pages",
        "A pixel-perfect, highly formatted report designed for printing or PDF generation",
        "A report with pagination controls for tables",
        "A report that auto-refreshes on a schedule"
      ],
      correct: 1,
      explanation: "Paginated reports in Power BI are pixel-perfect, highly formatted reports designed to fit well on a printed page or be exported as PDFs. They handle large datasets with multi-page output and offer precise control over layout, pagination, headers, footers, and formatting."
    },
    {
      id: 42,
      question: "Which storage mode stores data both in Import cache and can act as a DirectQuery source?",
      options: [
        "Import",
        "DirectQuery",
        "Dual",
        "Live Connection"
      ],
      correct: 2,
      explanation: "Dual storage mode stores data in the Import cache while also being able to act as a DirectQuery source. When a table is set to Dual mode, Power BI determines the most efficient mode to use based on the query. This is commonly used for dimension tables in composite models."
    },
    {
      id: 43,
      question: "What is the RANKX function used for in DAX?",
      options: [
        "To sort a table",
        "To return the ranking of a value in a column based on a specified expression",
        "To count ranked items",
        "To create a hierarchy"
      ],
      correct: 1,
      explanation: "RANKX returns the ranking of the current row's value compared to all values in a specified table for a given expression. It supports ASC/DESC ordering and different tie-breaking strategies (Dense, Skip). Example: RANKX(ALL(Products), [Total Sales],, DESC, Dense)"
    },
    {
      id: 44,
      question: "What is the purpose of the Q&A feature in Power BI?",
      options: [
        "To answer questions in a survey",
        "To allow users to ask natural language questions and get visual answers from their data",
        "To provide a FAQ page",
        "To query SQL databases directly"
      ],
      correct: 1,
      explanation: "Q&A in Power BI lets users type natural language questions like 'show total sales by region last year' and automatically generates appropriate visualizations. It uses the data model's structure, column names, and synonyms to interpret questions and display results."
    },
    {
      id: 45,
      question: "Which of the following is required for a DAX time intelligence function to work properly?",
      options: [
        "A parameter table",
        "A continuous date table with no gaps that is marked as a Date table",
        "A SQL Server connection",
        "The Premium license"
      ],
      correct: 1,
      explanation: "DAX time intelligence functions require a proper date table that: (1) contains a contiguous set of dates covering the full range of your data with no gaps, (2) has a column of Date data type, and (3) is marked as a Date table in the model (or using CALENDAR/CALENDARAUTO functions)."
    },
    {
      id: 46,
      question: "In the Power BI service, what is a workspace?",
      options: [
        "A type of visualization",
        "A collaborative area for creating, publishing, and managing reports and datasets",
        "The desktop application",
        "A data transformation tool"
      ],
      correct: 1,
      explanation: "A workspace in Power BI service is a collaborative container where teams can create, publish, and manage collections of dashboards, reports, datasets, and dataflows. Workspaces have roles (Admin, Member, Contributor, Viewer) that control what actions each member can perform."
    },
    {
      id: 47,
      question: "What is the difference between SUM and SUMX in DAX?",
      options: [
        "They are identical",
        "SUM aggregates a single column; SUMX iterates over a table evaluating a row-level expression then sums the results",
        "SUMX is faster than SUM",
        "SUM works with text; SUMX works with numbers"
      ],
      correct: 1,
      explanation: "SUM is a simple aggregation that adds up all values in a single column. SUMX is an iterator that evaluates a DAX expression for each row in a table and then sums the results. Use SUMX when you need row-level calculations, e.g., SUMX(Sales, Sales[Qty] * Sales[Price])."
    },
    {
      id: 48,
      question: "What does the 'Publish to web' feature do in Power BI?",
      options: [
        "Publishes a report to a specific workspace",
        "Creates a public embed code that anyone on the internet can view without authentication",
        "Publishes to SharePoint only",
        "Creates a mobile-optimized version"
      ],
      correct: 1,
      explanation: "Publish to web creates a public embed code (iframe) that makes the report accessible to anyone on the internet without requiring authentication. This should only be used for public data as there is no security applied. It is NOT recommended for internal or sensitive data."
    },
    {
      id: 49,
      question: "Which Power BI feature allows you to show only specific data to specific users?",
      options: [
        "Bookmarks",
        "Row-Level Security (RLS)",
        "Page Filters",
        "Slicers"
      ],
      correct: 1,
      explanation: "Row-Level Security (RLS) is the feature that restricts data visibility at the row level based on user identity. You define security roles with DAX filter expressions in Power BI Desktop, then assign users to those roles in the Power BI service."
    },
    {
      id: 50,
      question: "In Power Query M language, which function is used to connect to a SQL Server database?",
      options: [
        "Sql.Database",
        "Database.Connect",
        "SqlServer.Connect",
        "Connect.SqlServer"
      ],
      correct: 0,
      explanation: "Sql.Database is the M function used to connect to a SQL Server database in Power Query. The syntax is: Sql.Database(server, database, [options]). This function generates the native query to retrieve data from the specified SQL Server."
    },
    {
      id: 51,
      question: "What is the purpose of the SUMMARIZE function in DAX?",
      options: [
        "To create a text summary of data",
        "To create a summary table grouped by specified columns with optional aggregations",
        "To count summary statistics",
        "To format numbers for display"
      ],
      correct: 1,
      explanation: "SUMMARIZE creates a summary table by grouping rows based on one or more columns and optionally adding calculated aggregation columns. Example: SUMMARIZE(Sales, Products[Category], \"Total\", SUM(Sales[Amount])). Note: Microsoft recommends using SUMMARIZECOLUMNS for better performance in newer scenarios."
    },
    {
      id: 52,
      question: "What is a deployment pipeline in Power BI?",
      options: [
        "A type of data pipeline for ETL",
        "A CI/CD-style tool for managing report lifecycle across Development, Test, and Production stages",
        "A visualization that shows a flow process",
        "A method to deploy gateways"
      ],
      correct: 1,
      explanation: "Deployment pipelines in Power BI provide a CI/CD-like experience for managing content (reports, datasets, dashboards) across Development, Test, and Production environments. Content creators can develop and test in lower environments before promoting to production."
    },
    {
      id: 53,
      question: "Which of the following is a built-in AI visual in Power BI?",
      options: [
        "Gauge Chart",
        "Key Influencers",
        "Tree Map",
        "Waterfall Chart"
      ],
      correct: 1,
      explanation: "Key Influencers is one of Power BI's built-in AI visuals. It uses machine learning to analyze data and identify which factors most influence a specific metric. Other AI visuals include Decomposition Tree, Q&A, and Smart Narratives."
    },
    {
      id: 54,
      question: "What does the LOOKUPVALUE function do in DAX?",
      options: [
        "Looks up a value in a lookup table and returns a corresponding value from another column",
        "Creates a lookup table",
        "Validates data integrity",
        "Searches for text patterns"
      ],
      correct: 0,
      explanation: "LOOKUPVALUE returns the value of a result column for the row that meets all specified search criteria. It works like VLOOKUP/INDEX-MATCH in Excel. Example: LOOKUPVALUE(Products[Name], Products[ID], Sales[ProductID]) returns the product name matching the ID."
    },
    {
      id: 55,
      question: "In Power BI, what is the difference between a Dashboard and a Report?",
      options: [
        "They are the same thing",
        "A dashboard is a single-page canvas with pinned tiles from one or more reports; a report has multiple pages with full interactive visuals",
        "A dashboard has more features than a report",
        "Reports are for developers; dashboards are for viewers"
      ],
      correct: 1,
      explanation: "In Power BI, a dashboard is a single-page canvas (in the service only) composed of tiles pinned from one or more reports. A report consists of one or more pages of interactive visuals built in Power BI Desktop. Dashboards provide a consolidated view; reports provide detailed analysis."
    },
    {
      id: 56,
      question: "What is the purpose of the FORMAT function in DAX?",
      options: [
        "To format the report layout",
        "To convert a value to text with a specified format pattern",
        "To apply conditional formatting",
        "To set date formats in Power Query"
      ],
      correct: 1,
      explanation: "The FORMAT function converts a value to text using a specified format string. Example: FORMAT([Date], \"MMMM YYYY\") returns \"January 2026\". FORMAT([Sales], \"$#,##0.00\") returns \"$1,234.56\". Note: FORMAT returns text, which can impact sorting."
    },
    {
      id: 57,
      question: "What is the KEEPFILTERS function used for in DAX?",
      options: [
        "To prevent any filters from being removed",
        "To modify CALCULATE behavior by adding new filters as an intersection with existing filters instead of replacing them",
        "To save filter configurations",
        "To keep slicers synchronized"
      ],
      correct: 1,
      explanation: "KEEPFILTERS modifies how CALCULATE applies its filter arguments. By default, CALCULATE replaces existing filters on the same columns. KEEPFILTERS changes this behavior so the new filter is intersected (AND logic) with existing filters rather than replacing them."
    },
    {
      id: 58,
      question: "Which of the following can you do with Power BI Embedded?",
      options: [
        "Create reports in Excel",
        "Embed Power BI content into custom applications for your customers",
        "Run Python scripts",
        "Connect to Apache Spark"
      ],
      correct: 1,
      explanation: "Power BI Embedded allows developers to embed Power BI reports, dashboards, and tiles into custom applications. It supports both 'App Owns Data' (for embedding for your customers) and 'User Owns Data' (for embedding for your organization) scenarios."
    },
    {
      id: 59,
      question: "In Power BI, what does 'Query Folding' mean in Power Query?",
      options: [
        "Folding multiple queries into one",
        "The ability of Power Query to translate transformation steps into native source queries (like SQL) for execution at the source",
        "Compressing query results",
        "Organizing queries into folders"
      ],
      correct: 1,
      explanation: "Query folding is when Power Query translates transformation steps into native queries (like SQL) that are executed at the data source. This pushes processing to the source, significantly improving performance. Not all steps support folding — custom columns, merges with non-foldable queries, and certain transformations break folding."
    },
    {
      id: 60,
      question: "What is the CALENDAR function used for in DAX?",
      options: [
        "To schedule report refreshes",
        "To generate a table of dates between specified start and end dates",
        "To create calendar-style visuals",
        "To set up time intelligence formatting"
      ],
      correct: 1,
      explanation: "The CALENDAR function generates a single-column table of contiguous dates between a specified start date and end date. Example: CALENDAR(DATE(2020,1,1), DATE(2026,12,31)). This is commonly used to create a date/calendar table for time intelligence calculations in your data model."
    },
    {
      id: 61,
      question: "Which data profiling tools does Power Query have?",
      options: [
        "Column from examples, custom column, and conditional column",
        "Column quality, distribution, and profile",
        "Index column and duplicate column",
        "Format, extract, and parse"
      ],
      correct: 1,
      explanation: "The VIEW tab includes data profiling tools like column quality, distribution, and profile."
    },
    {
      id: 62,
      question: "Which data profiling tool can you use to check the number of errors in a column?",
      options: [
        "Column quality",
        "Column distribution",
        "Column profile",
        "Column quality & column profile"
      ],
      correct: 3,
      explanation: "Column quality shows the percentage of values within a column that are valid, have errors, or are empty; column profile provides this information in the column statistics as well."
    },
    {
      id: 63,
      question: "What is the purpose of data profiling in Power Query?",
      options: [
        "Provide a visual way to explore data",
        "Get a sense of your dataset composition",
        "To solve column quality issues",
        "All of the above"
      ],
      correct: 3,
      explanation: "Data profiling tools like column quality, column distribution, and column profile provide a visual way to explore data and get a sense of your dataset composition, while the contextual menus allow you to solve column quality issues."
    }
  ]
};

// Export for use in exam engine
if (typeof window !== 'undefined') {
  window.EXAM_DATA = window.EXAM_DATA || {};
  window.EXAM_DATA['pl300'] = PL300_EXAM;
}
