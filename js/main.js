

$(function () {
    $group = onclickAddGroupButton();

});

function onclickAddGroupButton() {
    addGroup();
}

function onclickAddUserButton(button) {
    $group = $(button).parent();
    addUser($group);
}

/** グループ(div)のjQueryオブジェクトを1つ追加する
 * @returns {JQuery} グループ
 */
function addGroup() {
    let $group = $(".templates > .group");
    let $clonedGroup = $group.clone();
    $clonedGroup.appendTo(".groups");
    addUser($clonedGroup);
    return $clonedGroup;
}

/** グループ(div)のjQueryオブジェクトを引数に取り、そのグループに１ユーザを追加する。
 * @param {JQuery} グループ
 * @returns {JQuery} ユーザ
 */
function addUser($group) {
    let $user = $(".templates > .user");
    let $clonedUser = $user.clone();
    $group.find(".users").append($clonedUser);
    adjustRemoveUserButton($group);
    return $clonedUser;
}

function removeUser() {
    adjustRemoveUserButton($group);
}

function adjustRemoveUserButton($group) {
    $users = $group.find(".user");    
    if ($users.length === 1) {
        $users.find("button").addClass("hidden");
    } else {
        $users.find("button").removeClass("hidden");
    }
}
