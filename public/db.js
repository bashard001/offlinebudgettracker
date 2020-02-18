db = {
    async addTransaction(data){
    const res = await fetch ("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
    const json = await res.json()
        console.log(json)
    return json
    }
}
