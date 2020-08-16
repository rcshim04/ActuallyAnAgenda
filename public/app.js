function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
        user = result.user;
        document.getElementById("test").innerHTML = `<p> ${user.uid}</p>`;
        //console.log(user.uid);
    })
    .catch(console.log)
}