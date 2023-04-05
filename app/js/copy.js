$('.copyboard').on('click', function(e) {
    e.preventDefault();
  
    var copyText = $(this).attr('data-text');
    console.log(copyText);
  
    var input = $("<input>");
    $("body").append(input);
    input.val(copyText).select();
    document.execCommand("copy");
    input.remove();
  
    alert("Testo copiato negli appunti!");
}); 