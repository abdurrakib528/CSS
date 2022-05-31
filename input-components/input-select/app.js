$(document).ready(function () {
    function formatText(icon) {
        return $('<span><i class="fas ' + $(icon.element).data("icon") + '"></i> ' + icon.text + "</span>");
    }

    $(".js__select").select2({
        width: "100%",
        placeholder: "Select type",
        templateSelection: formatText,
        templateResult: formatText,
    });
});
