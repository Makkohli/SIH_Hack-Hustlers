import dateFormat, { masks } from "dateformat";


function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const PdfCode = (
  name,
  Address,
  Mobile_No,
  Quantity,
  Invoice,
  ProductName,
  Total,
  ReceivedBalance,
  PaymentType,
  RemainingBalance
) => `
<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  <style>
    body {
      font-family:'Noto Sans', sans-serif;
    }

    .invoice-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #000;
      font-size: 14px;
    }

    .header {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }

    .sub-header {
      text-align: center;
      font-size: 12px;
    }

    .invoice-section {
      margin-top: 20px;
    }

    .invoice-section-header {
      font-weight: bold;
      border-bottom: 1px solid #000;
      margin-bottom: 10px;
    }

    .invoice-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }

    .invoice-table th,
    .invoice-table td {
      border: 1px solid #000;
      padding: 8px;
      text-align: left;
    }

    .footer {
      text-align: center;
      font-size: 10px;
      margin-top: 20px;
    }
  </style>
</head>

<body>
  <div class="invoice-container">
    <div class="header">
      Government of India
    </div>
    <div class="sub-header">
      e-Invoice
    </div>
    <hr />

    <div class="invoice-section">
      <div class="invoice-section-header">
        Bill To:
      </div>
      <p>
        Name: ${name} <br />
        Address: ${Address} <br />
        Phone No: +91 ${Mobile_No} <br />
        Date: ${dateFormat(Date.now(), "dd-mm-yyyy")} <br />
        Time: ${GetTime(new Date())}
      </p>
    </div>

    <div class="invoice-section">
      <div class="invoice-section-header">
        E-Invoice Details:
      </div>
      <p>
        Invoice No: ${Invoice} <br />
        Date: ${dateFormat(Date.now(), "dd-mm-yyyy")} <br />
        Time: ${GetTime(new Date())} <br />
        Mobile No: <br />
        +91 8208553219 <br />
        +91 9309780761
      </p>
    </div>

    <div class="invoice-section">
      <div class="invoice-section-header">
        Goods Details:
      </div>
      <table class="invoice-table">
        <tr>
          <th>Index</th>
          <th>Product Name</th>
          <th>Price(Per)</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>1</td>
          <td>${ProductName}</td>
          <td>${parseFloat(parseFloat(Total) / parseFloat(Quantity)).toFixed(2)}</td>
          <td>${Quantity}</td>
          <td>₹ ${Total}</td>
        </tr>
      </table>
    </div>

    

    <div class="footer">
      Generated by Government of India
    </div>
  </div>
</body>

</html>

`;

export { PdfCode };