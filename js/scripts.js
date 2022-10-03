
        const btnToggle = document.querySelector("#btnModalLogin");
        const btnToggleReserve = document.querySelector("#btnModalReserve");
        const btnDismiss = document.querySelectorAll(".dismiss");
        const btnDismissReserve = document.querySelectorAll(".dismissReserve");
        const myModalLogin = new bootstrap.Modal(document.getElementById("modalEx"));
        const myModalReserve = new bootstrap.Modal(document.getElementById("reserve"));

        btnToggleReserve.addEventListener("click", function () {
            myModalReserve.toggle();
        });
        btnToggle.addEventListener("click", function () {
            myModalLogin.toggle();
        });
        btnDismiss.forEach(function(ele){
            ele.addEventListener("click", function () {
                myModalLogin.hide();
            });
        });
        btnDismissReserve.forEach(function(ele){
            ele.addEventListener("click", function () {
                myModalReserve.hide();
            });
        });
