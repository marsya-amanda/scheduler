export function formatDate(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    return new Date(str).toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

export function formatTime(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    const split = str.split(":");
    const hr = (parseInt(split[0]) % 12) || 12;
    const ampm = parseInt(split[0]) >= 12 ? "pm" : "am";
    return hr + ":" + split[1] + " " + ampm;
}

export function formateDateTime(str: string | string[]) {
    if(Array.isArray(str)) {
        str = str[0];
    }
    const split = str.split("T");
    const date = formatDate(split[0]);
    const time = formatTime(split[1]);

    return date + ", " + time;
}