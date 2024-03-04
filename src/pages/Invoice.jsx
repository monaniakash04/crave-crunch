import React from "react";
import InvoiceCon from "../components/invoice/Invoice";

const Invoice = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full min-h-[100vh] overflow-scroll items-center">
        <InvoiceCon />
      </div>
    </>
  );
};

export default Invoice;
