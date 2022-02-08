let copy = document.querySelector('#copy').value;

let copyBtn = document.querySelector('#copyBtn');
copyBtn.addEventListener('click', () =>
{
    let copyValue = navigator.clipboard.writeText(copy);
    console.log(copyValue);
})


let paste = document.querySelector('#paste');

let pasteBtn = document.querySelector('#pasteBtn');
pasteBtn.addEventListener('click', () =>
{
    paste.value = '';
    navigator.clipboard.readText()
    .then((text) =>
    {
        paste.value = text;
    })
    
    
})

let cut = document.querySelector('#cut');

let cutBtn = document.querySelector('#cutBtn');
cutBtn.addEventListener('click', () =>
{
    navigator.clipboard.writeText(cut.value);
    cut.value = '';
})