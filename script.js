let selectedMood = "";

function selectMood(mood) {

    selectedMood = mood;

    document.getElementById("selectedMood").textContent =
        "Today I feel: " + mood;
}


function saveEntry() {

    const journal =
        document.getElementById("journal").value;

    if (journal.trim() === "") {

        document.getElementById("message").textContent =
            "Write something first 💗";

        return;
    }

    const entry = {
        mood: selectedMood,
        text: journal,
        date: new Date().toLocaleString()
    };

    localStorage.setItem(
        "dearMeEntry",
        JSON.stringify(entry)
    );

    document.getElementById("message").textContent =
        "Your entry is saved 💗";
}


function loadEntry() {

    const saved =
        localStorage.getItem("dearMeEntry");

    if (!saved) {
        return;
    }

    const entry = JSON.parse(saved);

    document.getElementById("journal").value =
        entry.text;

    if (entry.mood) {

        selectedMood = entry.mood;

        document.getElementById("selectedMood").textContent =
            "Today I feel: " + entry.mood;
    }
}


loadEntry();


// Register Service Worker
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register(
            "./service-worker.js"
        );

    });

}