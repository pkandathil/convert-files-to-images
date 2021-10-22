const { fromPath } = require('pdf2pic')
const libre = require('libreoffice-convert')
const path = require('path')
const fs = require('fs')

const main = () => {
  const extend = '.pdf'
  const enterPath = path.join(__dirname, '/../data/input.docx')
  const outputPath = path.join(__dirname, `/../data/output${extend}`)

  // Read file
  const file = fs.readFileSync(enterPath)
  // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
  libre.convert(file, extend, undefined, async (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`)
    }
    fs.writeFileSync(outputPath, done)

    const options = {
      density: 100,
      saveFilename: 'output',
      savePath: '../data',
      format: 'jpeg',
      width: 800,
      height: 1100
    }
    await fromPath('../data/output.pdf', options).bulk(-1)
    console.log('Image Generated')
  })
}

main()