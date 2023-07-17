$(document).ready(onReady);

function onReady() {
    console.log('in OnReady')

    $('#generateButton').on('click', handleGenerate)
    $('#generateButton').on('click', addCount)
    $('#target').on('click', '.deleteButton', deleteThis)
    $('#target').on('click', '.yellowButton', makeYellow)

}

let count = 1

function handleGenerate(event){
    event.preventDefault();
    console.log('in handleGenerate')
    $('body').append(`
    <div class='redBox'>
    <p>${count}</p>
    <button class='yellowButton'>Yellow</button>
    <button class='deleteButton'>Delete</button>
    </div>`)
}

function addCount(){
    count ++
}

function deleteThis(){
    console.log('in deleteThis')
    $(this).closest('div').remove()
}

function makeYellow(){
    $(this).closest('div').addClass("yellowBox")
}