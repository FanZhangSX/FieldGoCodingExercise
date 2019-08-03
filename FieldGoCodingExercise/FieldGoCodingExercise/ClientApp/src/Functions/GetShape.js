export default function GetShape(item) {
    let shape = "";
    if (item.height > item.width * 2 && item.height > item.length * 2) {
        shape = "Tall";
    }
    else if (item.width > item.height * 2 && item.width > item.length * 2) {
        shape = "Long";
    }
    else if (item.height < item.width / 2 && item.height < item.length / 2) {
        shape = "Flat";
    }
    else if (item.width > item.height / 2 && item.width > item.length / 2) {
        shape = "Thin";
    }
    else {
        shape = "Other";
    }

    return shape;
}