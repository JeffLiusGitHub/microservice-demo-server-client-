Why database per service

we want each service to run independently of other service

1. if use common database, issue happened, all database crashed immediately.
2. when scale up, seperate database is easier to scale specific database with needed capacity or throughtput.
3. eg: A feature reach to B database, when whole service B crushed, A also crashed

Database schema might change unexpectedly

4. If service B want to change service from Name to firstName, service A which want to fetch data from B will have issue

some service might function more efficiently with different type of db


How to solve data in microservice? (asynchronous communication )
1. service A create user, link to the User Collection DB, and emit the event to the event bus, then the event will go to the service it need
2. 👌🏻service D have data it need
3. 🙅🏻‍♀️but downside is it has data duplication. (expensive-eg:one product 1 month $15 to save on server, but for business, no) 


sync downsides

1. need comments, from posts, if comments fail, post also fail.
2. large request, wait for slowest request
3. some service may have structure A->B->C, complex
