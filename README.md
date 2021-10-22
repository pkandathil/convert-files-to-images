# Introduction
A PoC to convert different files types to images.
You need to have the following installed on your computer:
- `brew install imagemagick`
- `brew install graphicsmagick`
- Install Libreoffice as well. Had to do it manually for OSX from here: https://www.libreoffice.org/download/download/

## Setup dev environment
- `npm install`


### Convert pdf to image
- `node pdfToImage`

Look for *output1.jpeg* and *output2.jpeg* in the *data* folder

### Convert docx to pdf
- `node docxToPdf`

Look for *output.pdf* in the *data* folder

### Convert docx to image
- `node docxToPdf`

Look for *output.pdf* in the *data* folder