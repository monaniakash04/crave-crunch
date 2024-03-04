import React from "react";
import "../../index.css";
import { useSelector } from "react-redux";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdFileDownload } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Invoice = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalBill = useSelector((state) => state.cart.totprice);
  let date = new Date();
  let todayDate = date.getDate();
  let todayMonth = date.getMonth() + 1;
  let todayYear = date.getFullYear();

  const downloadPdf = () => {
    const capture = document.getElementById("pdf");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("invoice.pdf");
    });
  };
  return (
    <>
      <div
        id="pdf"
        className="max-w-[700px]  md:min-w-[700px] flex flex-col  scroll gap-2 h-[1000px] mt-5 border-2 p-3 bg-white shadow-2xl"
      >
        <h1 className="text-center font md:text-3xl text-xl">CRAVE CRUNCH</h1>
        <div className="flex justify-start pl-4 mt-5">
          <LiaFileInvoiceSolid className="text-2xl" />
          <h1 className="text-center font text-xl">INVOICE</h1>
        </div>
        <div className="flex  justify-between pl-4 mt-5">
          <h1 className="font md:text-lg text-sm uppercase">name: </h1>
          <h1 className="font md:text-lg text-sm uppercase mr-4">Email: </h1>
        </div>
        <div className="flex  justify-between pl-4 mt-1">
          <h1 className="font md:text-lg text-sm uppercase">Phone No: </h1>
          <h1 className="font md:text-lg text-sm uppercase mr-4">
            Date: {todayDate}-{todayMonth}-{todayYear}
          </h1>
        </div>
        <div className="flex  justify-between pl-4 mt-1">
          <h1 className="font md:text-lg text-sm uppercase">invoice No: </h1>
          <h1 className="font md:text-lg text-sm uppercase mr-4">Table No: </h1>
        </div>
        <hr className="font-bold" />
        <table className="w-full text-[10px] md:text-sm font " border="2">
          <tr className="uppercase">
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cart.map((item) => {
            const { title, quantity, totalprice } = item;
            return (
              <tr className="uppercase">
                <td className="text-center">{title}</td>
                <td className="text-center">{quantity}</td>
                <td className="text-center">{totalprice}</td>
              </tr>
            );
          })}
        </table>
        <hr />
        <div className="flex justify-end">
          <h1 className="font font-bold ">TOTAL PRICE:{totalBill}</h1>
        </div>
      </div>
      <div
        onClick={downloadPdf}
        className="flex justify-start pl-4 mt-5 px-5 py-1 rounded-xl shadow-xl bg text-white "
      >
        <button className="text-center font text-xl">DOWNLOAD</button>
        <MdFileDownload className="text-2xl" />
      </div>
    </>
  );
};

export default Invoice;
