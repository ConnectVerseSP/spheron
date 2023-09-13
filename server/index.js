const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { SpheronClient, ProtocolEnum } = require("@spheron/storage");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8111;
const SPHERON_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI3ZmIxMmQ2OTNmOWM2NjFiYTViYjdlMjAzZGYyMTMxMGRjOTJhNzZjMjZhNWYyZThiMWQ0ZWQ5MTg5YzY4ZTU4MGMwMTBmMTFlNDVlNmRhMGFiYmE5MmQzODA1NWJlZjE5YzQyOGU2YThlYjA1YjViZTE5NTIwM2Q4NjlhNjQ5OSIsImlhdCI6MTY5NDY0NDAzMCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.DdcBZNf-GhNAEXgj6_v6cmnPClC2jMAfFZNi6n8DluQ";

app.use(cors());

app.get("/initiate-upload", async (req, res, next) => {
  try {
    const bucketName = "example-browser-upload";
    const protocol = ProtocolEnum.IPFS;

    const client = new SpheronClient({
      token: SPHERON_TOKEN,
    });

    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    });

    res.status(200).json({
      uploadToken,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
