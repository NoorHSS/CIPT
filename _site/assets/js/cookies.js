function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    const cookieName = name + "=";
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function checkCookie(name) {
    const user = getCookie(name);
    if (user !== "") {
        console.log("Welcome back, " + user);
    } else {
        setCookie(name, "value", 365);
    }
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function acceptCookies() {
    setCookie('cookiesAccepted', 'true', 365);
    document.getElementById('cookie-consent').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookie-consent').style.display = 'block';
    }
});
