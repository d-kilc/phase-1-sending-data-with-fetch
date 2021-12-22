// Add your code here
function submitData(obj) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            name: obj.name,
            email: obj.email
        })
    })
        .then((res) => res.json())
        .then((json) => console.log(json))
}

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };



submitData({name: 'Dan', email: 'dan@example.com'})