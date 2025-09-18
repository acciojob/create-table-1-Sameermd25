function insert_Row() {
    //Write your code here
	const table=document.getElementById("#sampleTable");
	
	const tr=table.insertRow(0);

    const td1=tr.insertCell(0);
    td1.innerText="New Cell1";

    const td2=tr.insertCell(1);
    td2.innerText="New Cell2";

    // tr.append(td1,td2);

    //table.insertBefore(tr,table.childNodes[1])
	  //table.prepend(tr)
}
