export function timeSinceEpoch(timestamp, withDays) {
    let t = new Date().getTime();
    let seconds = (t / 1000) - timestamp;

    return withDays
        ? `${Math.floor(seconds / 86400)}d ${Math.floor(seconds % 86400 / 3600)}h ${Math.floor((seconds % 86400 % 3600) / 60)}m ${Math.floor((seconds % 86400 % 3600) % 60)}s`
        : `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m ${Math.floor((seconds % 3600) % 60)}s`;
}

export function activeTime(timestamp) {
    return `${Math.floor(timestamp / 86400)}d ${Math.floor(timestamp % 86400 / 3600)}h ${Math.floor((timestamp % 86400 % 3600) / 60)}m ${Math.floor((timestamp % 86400 % 3600) % 60)}s`;
}