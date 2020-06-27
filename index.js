
const url ="https://api.covid19api.com/summary";

function counterup(data,id){
    var countOptions = {
        useEasing: true,
        separator: ''
      }
      
      var count = new CountUp(id, 0, data, 0, 3, countOptions)
      
      // start the counting and give it a callback when done
      count.start();
       
      
}

async function getaGlobalData(){
    const response = await fetch(url);
    const data = await response.json();
    const Global = await data.Global;
    
    document.getElementById('gd-1').textContent = counterup(Global.TotalConfirmed,'gd-1');
    document.getElementById('gd-2').textContent = counterup(Global.TotalDeaths,'gd-2');
    document.getElementById('gd-3').textContent = counterup(Global.TotalRecovered,'gd-3');
}


 
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#usr");
    filter = input.value.toUpperCase();
    table = document.querySelector("#table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
      }       
    }
  }

async function getLocaldata(){
   
    const response = await fetch(url);
    const data = await response.json();
    const local = await data.Countries;
    const table = document.querySelector('#table');
 for(var i=0;i<185;i++){
    var row = table.insertRow(i);
    const countries = local[i];
    
        let cell1 = row.insertCell();
        let text1 = document.createTextNode(countries.Country);
        cell1.appendChild(text1);

        let cell2 = row.insertCell();
        let text2 = document.createTextNode(countries.CountryCode);
        cell2.appendChild(text2);

        let cell3 = row.insertCell();
        let text3 = document.createTextNode(countries.TotalConfirmed);
        cell3.appendChild(text3);

        let cell4 = row.insertCell();
        let text4 = document.createTextNode(countries.TotalDeaths);
        cell4.appendChild(text4);

        let cell5 = row.insertCell();
        let text5 = document.createTextNode(countries.TotalRecovered);
        cell5.appendChild(text5);

        let cell6 = row.insertCell();
        let text6 = document.createTextNode(countries.Date);
        cell6.appendChild(text6);
    
  table.appendChild(row);
 }
}


getaGlobalData();
getLocaldata();
