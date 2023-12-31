# Browser Upload Example

This directory has a simple example on how to use the [@spheron/browser-upload](https://www.npmjs.com/package/@spheron/browser-upload) package with [@spheron/storage](https://www.npmjs.com/package/@spheron/storage).

## **client**

- A react web app that uses [@spheron/browser-upload](https://www.npmjs.com/package/@spheron/browser-upload) to upload the files directly from browser.
- It holds logic that will first send a request to the Backend Service ( which is in the **server** directory ) to get the `uploadToken`, and after it gets the response it will use the token to upload files.
- Checkout the `handleUpload` function in Upload.tsx, to see how to use the [@spheron/browser-upload](https://www.npmjs.com/package/@spheron/browser-upload).

To start the project:

1. execute `npm install`
2. execute `npm start`

## **server**

- A express server that has one endpoint `GET: /initiate-upload`, that is used by the **client** project to get the `uploadToken` and to use it to upload data.
- All the logic is in the `index.js`.

To start the project:

1. execute `npm install`
2. create a `.env` file in the root and `SPHERON_TOKEN` variable, with the value of your Spheron API Token. To create the `token` that is used with the `SpheronClient`, follow the instructions in the [DOCS](https://docs.spheron.network/rest-api/#creating-an-access-token). When you are creating the tokens, please choose **web app** type in the dashboard.
3. execute `npm start`

After you start both the `client` and `server`, you can open http://localhost:3000 and upload data to the specified protocol.
