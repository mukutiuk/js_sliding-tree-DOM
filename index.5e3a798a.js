document.querySelectorAll("li").forEach(function(t){var e=t.firstChild.textContent.trim(),l=document.createElement("span");l.textContent=e,t.firstChild.textContent="",t.prepend(l)}),document.addEventListener("click",function(t){var e=t.target.closest("li");"none"===e.lastElementChild.style.display?e.lastElementChild.style.display="block":e.lastElementChild.style.display="none"});
//# sourceMappingURL=index.5e3a798a.js.map
