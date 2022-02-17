export const printResume = (): void => {
  const data = document.getElementById('print-section')?.innerHTML;
  let myWindow = window.open('Resume');
  myWindow?.document.write('<html><head><title>Resume</title>');
  myWindow?.document.write(
    '<script src="https://cdn.tailwindcss.com"></script>'
  );
  myWindow?.document.write(
    `<style> 
    body{
      font-size:10px!important;
    }
    h1{
      font-size:14px!important;
    }
    h2,h3{
      font-size:12px!important;
    }
    h5,h6{
      font-size:11px!important;
    }
    p{
      font-size:10px!important;
    }
    ul{
      padding:0.5rem!important;
      list-style-type:disc!important;
    }
    li{
      margin:0.2rem!important;
      paddingLeft:1rem!important;
      font-size:10px!important;
    }
  </style>`
  );
  myWindow?.document.write('</head><body >');
  myWindow?.document.write(data ? data : '');
  myWindow?.document.write('</body></html>');
  myWindow?.document.close(); // necessary for IE >= 10
  myWindow!.onload = (): void => {
    myWindow?.focus();
    myWindow?.print();
    myWindow?.close();
  };
};
