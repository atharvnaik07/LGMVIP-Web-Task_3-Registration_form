document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

    var studentInfo = document.getElementById("studentInfo");
    studentInfo.innerHTML = "<h3>Student Information:</h3>";
    studentInfo.innerHTML += "<p><strong>Name:</strong> " + name + "</p>";
    studentInfo.innerHTML += "<p><strong>Age:</strong> " + age + "</p>";
    studentInfo.innerHTML += "<p><strong>Grade:</strong> " + grade + "</p>";

    document.getElementById("enrollmentForm").reset();
});