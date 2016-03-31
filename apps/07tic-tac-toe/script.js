'use strict';

$(document).ready(function() {
  // Put app logic here
    var block = null;
    $("data-stack").click(function() {
        if (block === null) {
            block = $(this).children().last().detach();
        }
        else {
            $(this).append(block);
        }
    });
});