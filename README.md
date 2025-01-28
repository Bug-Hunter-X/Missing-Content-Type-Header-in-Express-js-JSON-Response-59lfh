# Missing Content-Type Header in Express.js JSON Response

This repository demonstrates a common error in Express.js applications where the Content-Type header is missing when sending JSON responses.  This can lead to issues with clients that expect a properly formatted JSON response.

## Bug
The `bug.js` file contains an Express.js application that sends a JSON response without setting the `Content-Type` header. This can cause issues in certain browsers or client applications. 

## Solution
The `bugSolution.js` file demonstrates the corrected code. It sets the `Content-Type` header to `application/json` to ensure that clients correctly interpret the response as JSON.