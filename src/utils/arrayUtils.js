export function objectToArray(obj) {
    if (!obj) return [];
    return Object.entries(obj).map(([id, value]) => ({
        _id : id,
        ...value
    }))
}