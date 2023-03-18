$('.select-custom .option').hide();
$('.select-custom .option').click(function () {
    let text = $(this).text();
    let val = $(this).attr('opt-val');
    $(this).siblings(".selected").text(text);
    $(this).siblings(".selected").attr("opt-val", val);
});
$('.select-container').click(function () {
    $(this).toggleClass("opened");
    $(this).find(".select-custom .option").slideToggle();
});

$('.selector .submit-btn').click(function () {
    let val = $(".selector .select-custom .selected").attr("opt-val");
    if (val) {
        alert("Enviando el valor: " + val.toUpperCase());
    }
})