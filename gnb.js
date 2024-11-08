<script>
        document.addEventListener("DOMContentLoaded", function () {
            fetch("navigation.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("navigation-container").innerHTML = data;
                })
                .catch(error => {
                    console.log("Error fetching navigation bar:", error);
                    document.getElementById("navigation-container").innerHTML = "<p>Navigation bar failed to load.</p>";
                })
        });
    </script>