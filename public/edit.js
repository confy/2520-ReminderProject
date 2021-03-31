const subtaskList = document.querySelector("#subtaskList")
const subtaskCreateBtn = document.querySelector("#createSubtask")
const subtaskTextArea = document.querySelector('#createSubtaskTextArea')

const createSubtaskElem = () => {
    console.log(subtaskTextArea.value)
    subtaskList.innerHTML += `
    <div class="form-check">
          <input class="form-check-input" type="checkbox">
          <label class="form-check-label" for="flexCheckDefault">${subtaskTextArea.value}</label>
    </div>
    `
    subtaskTextArea.value = ""
}

subtaskCreateBtn.addEventListener("click", () =>{
    createSubtaskElem()
})