
// let checkIt = true;

// function readMore() {
//     let dots = document.getElementById("dots");
//     let more = document.getElementById("more");
//     let btn = document.getElementById("btn");
//     let text = document.getElementById("adversting__left-text");

//     if (checkIt) {
//         more.style.display = "inline";
//         dots.style.display = "none";
//         btn.innerHTML = "СКРЫТЬ";
//         text.classList.toggle("gradient");
//         checkIt = false;
//     } else {
//         dots.style.display = "inline";
//         more.style.display = "none";
//         btn.innerHTML = "ЧИТАТЬ ПОЛНОСТЬЮ";
//         text.classList.toggle("gradient");
//         checkIt = true;
//     }
// }

document.addEventListener("DOMContentLoaded", (event) => {
    let collapseItems = document.getElementsByClassName("text-collapse");

    for (const element of collapseItems) {
        let trigger = element.getElementsByClassName("text-collapse-trigger")[0]

        if (!trigger) {
            return
        }

        trigger.addEventListener("click", event => {
            const collapsedClass = "text-collapse-collapsed"

            let isCollapsed = element.classList.contains(collapsedClass);

            if (isCollapsed) {
                element.classList.remove(collapsedClass)
                trigger.innerHTML = "ЧИТАТЬ ПОЛНОСТЬЮ"
                return
            }

            element.classList.add(collapsedClass)
            trigger.innerHTML = "СКРЫТЬ"
        })
    }
});

