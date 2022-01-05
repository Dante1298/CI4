
function removeAscent (str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/\s/g, "");
    return str;
};

export const checkUserName = (name) => {
    if (!name || name.length === 0)
       return "User name is require";

    const re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;
        if (!re.test(removeAscent(name))) 
            return "User name is invalid"
        return null;
};    


export const checkEmail = (email) => {
if(!email || email.length === 0)
    return "Email is require.";

const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
if (!regex.test(email)) 
    return "Email is invalid.";

    return null;
};

export const checkPassword = (pwd) => {
    if(!pwd || pwd.length === 0 )
        return "Password is require.";
    if (pwd.length < 6) 
        return "The length of password is more than 6 characters.";
    return null; 
};


export const checkConfirmPassword = (pwd, Cpwd) => {
    if(!Cpwd || Cpwd.length === 0 )
        return "Confirm password is require.";
    if (pwd !== Cpwd) 
        return "Confirm password is not matched.";
    return null; 
};