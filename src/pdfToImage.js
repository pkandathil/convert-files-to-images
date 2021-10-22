const docxConverter = require('docx-pdf')
const { fromPath } = require('pdf2pic')

const main = async () => {
  const options = {
    density: 100,
    saveFilename: 'output',
    savePath: '../data',
    format: 'jpeg',
    width: 800,
    height: 1100
  }
  await fromPath('../data/input.pdf', options).bulk(-1)
  console.log('Image Generated')
}

main()