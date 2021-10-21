const docxConverter = require('docx-pdf')

docxConverter('../data/input.docx','../data/output.pdf',(err,result) => {
  if(err){
    console.log(err)
  }
  console.log('PDF Generated')
})