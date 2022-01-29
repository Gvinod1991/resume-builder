export const printResume = (): void => {
  const data = document.getElementById('print-section')?.innerHTML;
  let myWindow = window.open('Resume');
  myWindow?.document.write('<html><head><title>Resume</title>');
  myWindow?.document.write(
    '<script src="https://cdn.tailwindcss.com"></script>'
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
