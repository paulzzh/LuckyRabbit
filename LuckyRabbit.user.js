// ==UserScript==
// @name 因幡帝
// @namespace https://paulzzh.tech
// @description 自动将页面上所有的"因幡天为"替换为"因幡帝"
// @author Paulzzh
// @version 1.0.0
// @supportURL https://github.com/Paulzzh/LuckyRabbit
// @include *
// @license WTFPL
// @run-at document-idle
// @require https://cdn.jsdelivr.net/npm/jquery@3.4.1
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAeIgAAAD+ta3vnLX+9/fvjJSUAADnAAD+596cUnsAjAAxMTlzc3shISn+/v7WAAC1rd7v3r21nGu9vcae7nhaAAAAAXRSTlMAQObYZgAAAb5JREFUeNrNl+uWgyAMhIso4ir10vd/13U6TaNbbN0T3bPzw0thPiGEWC+Xfyn30J5fzwA4N45lOY7TpAacp2m86yPCCKAdAqKdBXPb0s7f3yKMALUrgAJAWzYRRgCGupyAILpuDdhEGAFLOwEQ7NAyjBuIgwESwO6pNeJ4wOsEuow0lOcCMFAA1hNQRHZTmQE/t9HtBsttFsw84h6hhLKJZAQsSwkHrUmkx5Rw3txMZkBKuoBty84pLe+IOAcAO7pBNKRUVbzDke24fvN8I0Ds6ILu1V0EOTcM0rJZD00ADpChQrdh4GuleigEAFjmzwJIEFlEr7NCiHdVVYx9f71yepuLaALw9cVmpg3sfR+fAkwekEEcAJAlFAAsMgWqKDj87CQOAXD5BFAUMa7tMvRsKpkBRLBZEUvJAr7dCSaADo0pXJbeN433X7Nw1TQf/+KZAQqq67J0znuU+BBw571zIfwNwDksGewQEAQAgbJyNgD2GMUuCGoXwgzgIr6aFbHrW8EI2LJzUXdMwQSAPYS8va4lpc4ECEINeqZ5VwxMAA3jOoGQQrt3oxHAZEIZ00/NX5gPASwLnOkDfE+/bxOXSYm0WtJQAAAAAElFTkSuQmCC
// ==/UserScript==

// replace all the texts

$(function() {
$("body").html($("body").html().replace(/天为/g,'帝'))
});