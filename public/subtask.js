const subtaskList = document.querySelector("#subtaskList")
const subtaskCreateBtn = document.querySelector("#createSubtask")
const subtaskTextArea = document.querySelector('#createSubtaskTextArea')
const subtaskNone = document.querySelector("#subtaskNone")

const createSubtaskElem = () => {
    // Unticked checkboxes are not submitted via POST requests
    // All subtasks in the edit or create pages will have one hidden input that always submits, and one visible that overrides if checked
    // if the req.body post value is an array, that means the subtask is checked
    if (subtaskNone) {
        subtaskNone.remove()
    }


    let nextID = Math.floor(Math.random() * 100000000)
    subtaskList.innerHTML += `
    <div class="form-check">
        <input class="form-check-input" type="hidden" name="${nextID}" value="${subtaskTextArea.value}">
        <input class="form-check-input" type="checkbox" name="${nextID}" value="${subtaskTextArea.value}">
        <label class="form-check-label" for="${nextID}">${subtaskTextArea.value}</label>
    </div>
    `
    subtaskTextArea.value = ""

}

subtaskCreateBtn.addEventListener("click", () =>{
    createSubtaskElem()
})

const tagTextArea = document.querySelector('#createTagTextArea')
const tagCreateBtn = document.querySelector('#createTag')
const tagList = document.querySelector('#tagList')

const createTagElem = () => {
    let newTag = tagTextArea.value

    tagList.innerHTML += `
    <span class="d-inline badge rounded-pill bg-warning text-dark m-1">
    ${newTag}
    <input type="hidden" name="tag-${newTag}" value="tag-${newTag}">
    </span>`
    tagTextArea.value =''

}

tagCreateBtn.addEventListener("click", () =>{
    createTagElem()
})