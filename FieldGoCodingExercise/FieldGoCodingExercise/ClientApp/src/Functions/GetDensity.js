export default function GetDensity(item) {
    if (item.height * item.length * item.width === 0) {
        return "Invalid";
    }

    return item.mass / (item.height * item.length * item.width);
}