export const isNotEmpty = <T>(value: T): boolean => {
    if (value === null || value === undefined) return false;

    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length > 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }

    return !!value;
};
