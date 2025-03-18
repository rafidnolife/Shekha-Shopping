document.addEventListener("DOMContentLoaded", function () {
    let commissions = JSON.parse(localStorage.getItem("commissions")) || {};
    let commissionList = document.getElementById("commission-list");

    Object.keys(commissions).forEach(userId => {
        let li = document.createElement("li");
        li.innerText = `User: ${userId} - Earned: $${commissions[userId]}`;
        commissionList.appendChild(li);
    });
});
