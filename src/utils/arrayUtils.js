export function objectToArray(obj) {
    return Object.entries(obj).map(([id, value]) => ({
        _id : id,
        ...value
    }))
}