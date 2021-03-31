const subtaskList = document.querySelector("#subtaskList")
const subtaskBoxes = document.querySelectorAll("#subtaskBox")
const subtaskCreateBtn = document.querySelector("#createSubtask")
const subtaskTextArea = document.querySelector('#createSubtaskTextArea')
let nextID = subtaskBoxes.length + 100

const createSubtaskElem = () => {
    // Unticked checkboxes are not submitted via POST requests
    // All subtasks in the edit page will have one hidden input that always submits, and one visible that overrides if checked
    // if the req.body post value is an array, the subtask is checked
    subtaskList.innerHTML += `
    <div class="form-check">
        <input class="form-check-input" type="hidden" name="${nextID}" value="${subtaskTextArea.value}">
        <input class="form-check-input" type="checkbox" name="${nextID}" value="${subtaskTextArea.value}">
        <label class="form-check-label" for="${nextID}">${subtaskTextArea.value}</label>
    </div>
    `
    subtaskTextArea.value = ""
    nextID += 1
}

subtaskCreateBtn.addEventListener("click", () =>{
    createSubtaskElem()
})