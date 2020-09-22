import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument

const generatePDF = (alwaysResults, almostAlwaysResults, sometimesResult, almostNeverResult, neverResult, NAResult) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Question_ID", "Question", "Answer"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  alwaysResults.forEach(always => {
    const alwaysData = [
      always.questions_id,
      always.question,
      "Always",
    ];
    tableRows.push(alwaysData);
    });

    almostAlwaysResults.forEach(always => {
      const almostAlwaysData = [
        always.questions_id,
        always.question,
        "Almost Always",
      ];
      tableRows.push(almostAlwaysData);
    });

    sometimesResult.forEach(always => {
      const sometimesData = [
        always.questions_id,
        always.question,
        "Almost Always",
      ];
      tableRows.push(sometimesData);
    });

    almostNeverResult.forEach(always => {
      const almostNeverData = [
        always.questions_id,
        always.question,
        "Almost Never",
      ];
      tableRows.push(almostNeverData);
    });

    neverResult.forEach(always => {
      const neverData = [
        always.questions_id,
        always.question,
        "Never",
      ];
      tableRows.push(neverData);
    });

    NAResult.forEach(always => {
      const NAData = [
        always.questions_id,
        always.question,
        "NA",
        "test",
      ];
      tableRows.push(NAData);
    });


  // startY is basically margin-top
  doc.text("Patient Name", 14, 15);

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3];
  // ticket title. and margin-top + margin-left
  // we define the name of our PDF file.
  let dpfdoc = doc.save(`report_${dateStr}.pdf`);



};

export default generatePDF;