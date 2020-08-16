var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
db.collection("tasks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        var due = data.due.toDate();
        console.log(due);
        console.log(`${doc.id} => ${data.name}`);
        document.getElementById("tasks").innerHTML += `<div class="task" style="margin-left: 60px; margin-top: 10px;width: 30%;">
                                                            <h4>${data.name}</h4>
                                                            <p>Due Date: ${month[due.getMonth()]} ${due.getDate()}, ${due.getFullYear()}</p>
                                                        </div>`;
    });
});