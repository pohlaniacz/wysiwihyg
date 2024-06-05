
export function findUniqueFontNames(obj, fontNames = new Set()) {
    if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key === 'font' && obj[key].name) {
                    fontNames.add(obj[key].name);
                } else if (typeof obj[key] === 'object') {
                    findUniqueFontNames(obj[key], fontNames);
                }
            }
        }
    }
    return Array.from(fontNames);
}