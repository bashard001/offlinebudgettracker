var total = document.querySelector("#total")
var addFunds = document.querySelector("#add-btn")
var subFunds = document.querySelector("#sub-btn")
var tName = document.querySelector("#t-name")
var tAmount = document.querySelector("#t-amount")
var tbody = document.querySelector("#tbody")

var totalAmount = 0;

function clearinput(){
  tName.value = "";
  tAmount.value = "";
}

async function handleFormSubmit(event) {
    event.preventDefault();
  
  
    let ibody = {}

    ibody.name = tName.value.trim();
    ibody.value = Number(tAmount.value.trim());
    totalAmount += ibody.value
    console.log(ibody)

    var addTransaction = async function (data){
        const res = await fetch ("/api/transaction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          })
        const json = await res.json()
            console.log(json)
        return json
        }

        addTransaction(ibody) 
        total.innerHTML = totalAmount
        clearinput()
        init()
    
   
  }

  async function init(){
    const res = await fetch ("/api/transaction", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    const json = await res.json()
            console.log(json)
    tbody.innerHTML = json.map(getTransactions).join("\n")
        
  }
  init()
  function getTransactions(transaction){
    return `
    <tr>
    <td>${transaction.name}</td>
    <td>${transaction.value}</td>
    </tr>
    `
}



subFunds.addEventListener("click", async ()=> {
  try {
  let ibody = {}

  ibody.name = tName.value.trim();
  ibody.value = Number(tAmount.value.trim());

  total.innerHTML -= ibody.value;
  var res = await fetch("/api/transaction/remove", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ibody)
  })
  
 init()
}
catch(err){
  console.log(err);
}
})

addFunds.addEventListener("click", handleFormSubmit)

