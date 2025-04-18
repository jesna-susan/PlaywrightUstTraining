var Vendor = /** @class */ (function () {
    function Vendor(id, name, productname, productprice) {
        this.id = id;
        this.name = name;
        this.productname = productname;
        this.productprice = productprice;
    }
    return Vendor;
}());
var vendorsT = [
    new Vendor(4, "jesna", "book", 50),
    new Vendor(1, "padma", "watch", 1000),
    new Vendor(3, "ranjith", "hat", 400)
];
function sortVendors() {
    return vendorsT.sort(function (v1, v2) { return v1.id > v2.id ? -1 : 1; });
}
sortVendors().forEach(function (vendor) {
    return console.log("ID: ".concat(vendor.id, ", Name: ").concat(vendor.name, ", Product name: ").concat(vendor.productname, ", Product Price: ").concat(vendor.productprice));
});
function sortVendorsByName() {
    return vendorsT.sort(function (v1, v2) { return v1.name.localeCompare(v2.name); });
}
sortVendorsByName().forEach(function (vendor) {
    return console.log("\nID: ".concat(vendor.id, ", Name: ").concat(vendor.name, ", Product: ").concat(vendor.productname, ", Price: ").concat(vendor.productprice));
});
