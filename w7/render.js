const TBL = document.getElementById("tab-data");

function renderTblHeading () {
    const table = document.createElement("table");
     const thead = document.createElement("thead");
     const tr = document.createElement("tr");
     const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
     headingTextArr.forEach(function (text) {
       const th = document.createElement("th");
       th.textContent = text;
       tr.appendChild(th);
     });
     thead.appendChild(tr);
     table.appendChild(thead);
   
     return table
   }
   
   function renderTbl(data) {
     const table = renderTblHeading();
     const tbody = document.createElement("tbody");
     const tr = document.createElement("tr");
     data.forEach(function (household) {
       const td = document.createElement("td");
       td.textContent = household.Name;
       tr.appendChild(td);
      
     });
     const td = document.createElement("td");
     const btnEdit = document.createElement("button");
     const btnDel = document.createElement("button");
     btnEdit.textContent = "Edit";
     btnDel.textContent = "Del";
     td.appendChild(btnEdit);
     td.appendChild(btnDel);
     tr.appendChild(td);
     tbody.appendChild(tr);
     table.appendChild(tbody);
     console.log(table);
     TBL.appendChild(table);
   
   }

   export {renderTbl, renderTblHeading, TBL}

   // I don't have any questions about the importing/exporting, although its not familiar it makes complete sense. The hump I can't get over is population of the table. 