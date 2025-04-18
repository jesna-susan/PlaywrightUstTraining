interface vendorInt {
    id : number;
    name: string;
    productname: string;
   productprice: number;
}
 
class Vendor implements vendorInt {
    id: number;
    name: string;
    productname: string;
    productprice: number;
 
    constructor(id: number, name: string, productname: string, productprice:number) {
      this.id = id;
      this.name = name;
      this.productname = productname;
      this.productprice=productprice;
    }
 
  }
 
  const vendorsT: Vendor[] = [
    new Vendor(4, "jesna", "book", 50),
    new Vendor(1, "padma", "watch",1000),
    new Vendor(3, "ranjith", "hat", 400)
  ];
 
  function sortVendors(): Vendor[] { // public Vendors[] sortVendors() {}
    return vendorsT.sort((v1, v2) => v1.id > v2.id ? -1 : 1);
}

sortVendors().forEach((vendor) => 
    console.log(`ID: ${vendor.id}, Name: ${vendor.name}, Product name: ${vendor.productname}, Product Price: ${vendor.productprice}`));
  
function sortVendorsByName(): Vendor[] {
    return vendorsT.sort((v1, v2) => v1.name.localeCompare(v2.name));
  }
  sortVendorsByName().forEach((vendor) => 
    console.log(`\nID: ${vendor.id}, Name: ${vendor.name}, Product: ${vendor.productname}, Price: ${vendor.productprice}`)
  );
  