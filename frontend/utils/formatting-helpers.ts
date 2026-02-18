export function formatDate(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    return new Date(str).toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "numeric"
    }) + " (" + new Date(str).toLocaleDateString("en-GB",{
        weekday: "short"
    }) + ")";
}

export function formatTime(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    const split = str.split(":");
    const hr = (parseInt(split[0]) % 12) || 12;
    const ampm = parseInt(split[0]) >= 12 ? "pm" : "am";
    return hr + ":" + split[1] + ampm;
}

export function formatDateTime(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    return new Date(str).toLocaleString("en-GB", {
        month: "short",
        day: "numeric"
    }) + " " + formatTime(str) + " (" + new Date(str).toLocaleDateString("en-GB",{
        weekday: "short"
    }) + ")";
}

export function formatDuration(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    const duration = parseInt(str);
    const hrs = Math.floor(duration / 60);
    const mins = duration % 60;   

    if(hrs == 0) {
        return mins + " mins";
    } else if(hrs == 1 && mins == 0) {
        return hrs + " hr";
    } else if(hrs == 1) {
        return hrs + " hr " + mins + " mins";
    } else if(mins == 0) {
        return hrs + " hrs";
    } else{
        return hrs + " hrs " + mins + " mins";
    }
}