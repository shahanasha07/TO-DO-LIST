const arr = [];


function todolist() {

  const userinput = document.getElementById("taskbar");

  const text = userinput.value.trim();
  if (text === "") {
    alert("please enter valid to-do iteam");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const deletebtn = document.createElement("img");
  deletebtn.src = "./images/trash3-fill.svg";
  deletebtn.className = "deletebtn"

  const editbtn = document.createElement("img");
  editbtn.src = "./images/bxs-edit-alt.svg";
  editbtn.id = "editbtn"


  const chekbox = document.createElement("input");
  chekbox.type = "checkbox";
  chekbox.id = "checkbox";
  
  arr.push(text);

  const ul = document.getElementById("ul");
  ul.appendChild(li);
  li.appendChild(chekbox);
  li.appendChild(span)
  li.appendChild(editbtn)
  li.appendChild(deletebtn);


  userinput.value = "";



  deletebtn.addEventListener("click", () => {
    ul.removeChild(li);
    const index = arr.indexOf(text);
    if (index > -1) {
      arr.splice(index, 1);
    }

  })

  editbtn.addEventListener('click', () => {
    const input = document.createElement("input");
    input.value = span.textContent;
    input.className = "li-input"

    li.replaceChild(input, span)

    input.focus()


    const saveEdit = () => {
      const newText = input.value;
      if (newText) {
        span.textContent = newText;

        const index = arr.indexOf(span.textContent);
        if (index > -1) {
          arr[index] = newText;
        }
        li.replaceChild(span, input);

      }

    };
    input.addEventListener("blur", saveEdit);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        saveEdit()
      }
    })

  })

  chekbox.addEventListener("change",()=>{
    if(chekbox.checked){
      celebration()
    }
  })

}



function celebration() {
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}




const add = document.getElementById("add");












