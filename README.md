# Google Image Downloader

This Django application allows users to download images from Google based on a specified keyword. The user inputs a keyword, the number of images to download, and their email address. The application then downloads the images, zips them, and sends the zip file to the provided email address.

## Features

- **User Input**: Collects keyword, number of images, and email address from the user.
- **Image Downloading**: Uses the `icrawler` library to fetch images from Google based on the provided keyword.
- **Zip File Creation**: Zips the downloaded images for easy download.
- **Email Notification**: Sends the zip file to the user's email address.

## Usage
   ```bash
google-image-downloader-pi.vercel.app

   
