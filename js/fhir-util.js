/**
 * Creates a human readable name out of the "HumanName" field
 *
 * @param names
 * @returns {*}
 */
var createNameText = function (names) {
    if (!names) {
        return "No name specified!";
    }
    if (!(names instanceof Array)) {
        names = [names];
    }

    var nameText = "";

    names.forEach(function (name) {
        if (name.text) {
            nameText += name.text + " ";
        } else {
            if (name.given) {
                name.given.forEach(function (given) {
                    nameText += given + " ";
                });
            }
            if (name.family) {
                name.family.forEach(function (family) {
                    nameText += family + " ";
                });
            }
        }
    });

    return nameText;
};