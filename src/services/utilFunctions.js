export const encode = (item) => {
    return window.btoa(item);
}

export const decode = (item) => {
    return window.atob(item);
}

export const stringSlice = string => {
    return string.slice(0, 120).length === string.length ? string : string.slice(0, 120) + '...';
}


export const setFollowed = (allUsers, followingUsers) => {
    alert('in th func');
    for (let user in allUsers)
        for (let followedUser in followingUsers) {
            if (followedUser.id === user.id) {
                // document.getElementById(user.id).innerHTML = 'Following';
                console.log(true);
                break;
            } else continue;
        }
}