
    document.addEventListener("DOMContentLoaded", () => {
        const zoneLinks = document.querySelectorAll(".dropdown-link");
        const zones = document.querySelectorAll(".flexprogs");

        zoneLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const zoneToShow = link.getAttribute("data-zone");

                if (zoneToShow === "all") {
                    
                    zones.forEach(zone => {
                        zone.style.display = "block";
                    });
                } else {
                    
                    zones.forEach(zone => {
                        zone.style.display = "none";
                    });

                    
                    const selectedZone = document.getElementById(zoneToShow);
                    if (selectedZone) {
                        selectedZone.style.display = "block";
                    }
                }
            });
        });
    });

