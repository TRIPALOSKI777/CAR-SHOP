document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!username || !email || !password) {
        alert('გთხოვთ შეავსოთ ყველა ველი.'); 
        return;
    }
    alert('თქვენ წარმატებით დარეგისტრირდით!'); 
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        let answer = q.nextElementSibling;
        let symbol = q.querySelector("span");

        let isVisible = answer.style.display === "block";
        answer.style.display = isVisible ? "none" : "block";

        symbol.textContent = isVisible ? "+" : "-";
    });
});
