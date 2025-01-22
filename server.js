// const express = require('express');
// const app = express();

// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require("cors");
// const fs = require("fs");
// const mime = require("mime-types");

// app.use(cors ({
//     origin: "https://downloads-nine.vercel.app"
// }))


// app.use(express.json());

// const path = require('path');

// // Serve static files
// app.use('/static', express.static(path.join(__dirname, 'static')));

// app.get("/", (req, res) => {
//     res.send("Download Images Easily");
// });

// app.post('/search', async (req, res) => {
//     try {
//         const url = req.body.url;

//         // Fetch the page
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);

//         // Extract and sanitize the title
//         let title = $('title').text() || 'download'; // Fallback to 'download' if the title is empty or undefined
//         title = title.trim();

//         // Extract image URL
//         let imageUrl = $('meta[property="og:image"]').attr('content');
//         if (!imageUrl) {
//             return res.status(404).json({ message: "Thumbnail not found" });
//         }

//         // Fetch the image as a stream
//         const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });

//         // Sanitize the filename
//         const sanitizedTitle = title.replace(/[^a-zA-Z0-9-_]/g, '_'); // Replace invalid characters with underscores
//         const filename = `${sanitizedTitle.slice(0, 20) || 'download'}.jpg`; // Ensure a valid fallback filename

//         // Set headers for download
//         res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
//         res.setHeader('Content-Type', imageResponse.headers['content-type']);

//         // Stream the image data directly to the client
//         imageResponse.data.pipe(res);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error processing your request' });
//     }
// });



// app.listen(4000, () => console.log("Server running on 4000"));



const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'downloads-nine.vercel.app', // Replace with your actual frontend URL
}));

app.use(express.json());

app.post('/api/thumbnail', async (req, res) => {
  try {
    const { url } = req.body;

    // Fetch the YouTube page
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extract the thumbnail URL
    const thumbnailUrl = $('meta[property="og:image"]').attr('content');
    if (!thumbnailUrl) {
      return res.status(404).json({ message: 'Thumbnail not found' });
    }

    // Send the thumbnail URL as a response
    res.json({ thumbnailUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing your request' });
  }
});

// Export the app for Vercel
module.exports = app;
