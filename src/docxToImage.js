const docxConverter = require('docx-pdf')
const { fromPath } = require('pdf2pic')

const main = () => {
  docxConverter('../data/input.docx', '../data/output.pdf', async (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log('PDF Generated')

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