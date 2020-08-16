const db = firebase.firestore();
var name = "TOHacks";
db.collection(firebase.user.uid).doc(name).add({
    name: name,
    in: firebase.firestore.Timestamp.now(),
    due: firebase.firestore.Timestamp.fromDate(new Date('03 May 2020 12:00:00 UTC-4')),
    per: 0,
    priority: 50
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});