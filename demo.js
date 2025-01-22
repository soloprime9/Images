// let counter = 1;
// const url = "https://www.instagram.com/p/DERpkkXyX9z/";

// axios.get(url)
//   .then(response => {
//     const $ = cheerio.load(response.data);
//     let title = $('title').text();
//     let mediaURL = encodeURIComponent(title.trim());
//     const content = $('body').text();
//     let imageUrl = $('meta[property="og:image"]').attr('content');
//     axios.get(imageUrl, {responseType: 'arraybuffer'})
//     .then((response) => {
//       const ContentType = response.headers['content-type'];
//       const extension = mime.extension(ContentType);

//       if(!extension){
//         extension: "jpeg"; // Agar Formate nahi hai tab
//       }

//       let filename = `${mediaURL.slice(0,20)}.${extension}` || `media.{extension}`;

//       while(fs.existsSync(filename)){
//         filename = `media_${counter}.${extension}`;
//         counter++;
//       }

//       fs.writeFileSync(filename, response.data);
//       console.log("Successfully File Saved", filename);
      
//     })


//     // console.log(imageUrl)
//     console.log("hello: ", title.slice(0, 50));
    
   

//   })
//   .catch(error => {
//     console.error(error);
//   });



// let counter = 1;

// app.post('/search', (req, res) => {
//     const url = req.body.url;
//     axios.get(url)
//     .then(response => {
//         const $ = cheerio.load(response.data);
//         let title = $('title').text();
//         let mediaURL = encodeURIComponent(title.trim());
//         const content = $('body').text();
        
//         // Extract thumbnail URL
//         let imageUrl = $('meta[property="og:image"]').attr('content');
//         if (!imageUrl) {
//             return res.status(404).json({ message: "Thumbnail not found" });
//         }

//         // Extract video URL (if available)
        

//         // Fetch thumbnail image and store it locally
      

//         axios.get(imageUrl, {responseType: 'arraybuffer'})
//         .then((response) => {
//             const ContentType = response.headers['content-type'];
//             const extension = mime.extension(ContentType);

//             if(!extension){
//                 extension = "jpeg"; 
//             }

//             let filename = `${mediaURL.slice(0,20)}.${extension}` || `media.{extension}`;

//             while(fs.existsSync(filename)){
//                 filename = `media_${counter}.${extension}`;
//                 counter++;
//             }

//             fs.writeFileSync(filename, response.data);
            

//             res.json({
//                 title: title,
//                 imageUrl: imageUrl,
//                 filename: filename,
                
//             });
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(500).json({ message: 'Error downloading image' });
//         });
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).json({ message: 'Error fetching URL' });
//     });
// });


// app.get("/", (req, res) => {
//     res.send("hello world");
// })

// app.listen(4000, console.log("Server running on 4000"))





// const express = require('express');
// const app = express();
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const mime = require("mime-types");

// app.use(cors({
//     origin: "http://localhost:3000"
// }));
// app.use(express.json());

// // POST endpoint to fetch video details and serve thumbnail + video download link
// app.post('/search', async (req, res) => {
//     const url = req.body.url;

//     try {
//         // Fetch the page
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);

//         // Extract page title
//         let title = $('title').text().trim();

//         // Extract thumbnail URL
//         let imageUrl = $('meta[property="og:image"]').attr('content');
//         if (!imageUrl) {
//             return res.status(404).json({ message: "Thumbnail not found" });
//         }

//         // Extract video URL (if available)
//         let videoUrl = $('meta[property="og:video"]').attr('content');
//         if (!videoUrl) {
//             return res.status(404).json({ message: "Video URL not found" });
//         }

        // // Fetch thumbnail image and store it locally
        // const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        // const imageContentType = imageResponse.headers['content-type'];
        // const imageExtension = mime.extension(imageContentType) || 'jpeg';
        // const imageFilename = `thumbnail.${imageExtension}`;
        // fs.writeFileSync(imageFilename, imageResponse.data);

//         // Prepare response with title, thumbnail, and video URL
//         res.json({
//             title,
//             imageUrl: `http://localhost:4000/${imageFilename}`,
//             videoUrl, // Direct video URL for frontend download
//             filename: imageFilename
//         });
//     } catch (error) {
//         console.error("Error fetching URL:", error);
//         res.status(500).json({ message: 'Error processing the request' });
//     }
// });

// // Serve static files (e.g., thumbnails)


// // Start server
// app.listen(4000, () => console.log("Server running on http://localhost:4000"));





// const express = require('express');
// const axios = require('axios');
// const app = express();
// app.use(express.json());

