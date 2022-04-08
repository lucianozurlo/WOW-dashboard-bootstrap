let list1 = document.getElementById('list1');
list1.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list2.classList.remove('visible');
    list3.classList.remove('visible');
    list4.classList.remove('visible');
    list5.classList.remove('visible');
    list6.classList.remove('visible');
    list7.classList.remove('visible');
    list8.classList.remove('visible');
    if (list1.classList.contains('visible'))
        list1.classList.remove('visible');
    else
        list1.classList.add('visible');
}
let list2 = document.getElementById('list2');
list2.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list3.classList.remove('visible');
    list4.classList.remove('visible');
    list5.classList.remove('visible');
    list6.classList.remove('visible');
    list7.classList.remove('visible');
    list8.classList.remove('visible');
    if (list2.classList.contains('visible'))
        list2.classList.remove('visible');
    else
        list2.classList.add('visible');
}
let list3 = document.getElementById('list3');
list3.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list2.classList.remove('visible');
    list4.classList.remove('visible');
    list5.classList.remove('visible');
    list6.classList.remove('visible');
    list7.classList.remove('visible');
    list8.classList.remove('visible');
    if (list3.classList.contains('visible'))
        list3.classList.remove('visible');
    else
        list3.classList.add('visible');
}
let list4 = document.getElementById('list4');
list4.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list2.classList.remove('visible');
    list3.classList.remove('visible');
    list5.classList.remove('visible');
    list6.classList.remove('visible');
    list7.classList.remove('visible');
    list8.classList.remove('visible');
    if (list4.classList.contains('visible'))
        list4.classList.remove('visible');
    else
        list4.classList.add('visible');
}
let list5 = document.getElementById('list5');
list5.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list2.classList.remove('visible');
    list3.classList.remove('visible');
    list4.classList.remove('visible');
    list6.classList.remove('visible');
    list7.classList.remove('visible');
    list8.classList.remove('visible');
    if (list5.classList.contains('visible'))
        list5.classList.remove('visible');
    else
        list5.classList.add('visible');
}
let list6 = document.getElementById('list6');
list6.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list2.classList.remove('visible');
    list3.classList.remove('visible');
    list4.classList.remove('visible');
    list5.classList.remove('visible');
    list7.classList.remove('visible');
    list8.classList.remove('visible');
    if (list6.classList.contains('visible'))
        list6.classList.remove('visible');
    else
        list6.classList.add('visible');
}
let list7 = document.getElementById('list7');
list7.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list2.classList.remove('visible');
    list3.classList.remove('visible');
    list4.classList.remove('visible');
    list5.classList.remove('visible');
    list6.classList.remove('visible');
    list8.classList.remove('visible');
    if (list7.classList.contains('visible'))
        list7.classList.remove('visible');
    else
        list7.classList.add('visible');
}
let list8 = document.getElementById('list8');
list8.getElementsByClassName('anchor')[0].onclick = function (evt) {
    list1.classList.remove('visible');
    list2.classList.remove('visible');
    list3.classList.remove('visible');
    list4.classList.remove('visible');
    list5.classList.remove('visible');
    list6.classList.remove('visible');
    list7.classList.remove('visible');
    if (list8.classList.contains('visible'))
        list8.classList.remove('visible');
    else
        list8.classList.add('visible');
}
