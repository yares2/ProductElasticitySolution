package com.priceElasticity

class DMI_ProductClass {

    /* Default (injected) attributes of GORM */
    Long	productClassId
    Long	version

    /* Automatic timestamping of GORM */
    Date	dateCreated
    Date	lastUpdated

    String productCategory
    String productDepartment
    String productFamily

    static constraints = {
        productCategory nullable: true, blank: true
        productDepartment nullable: true, blank: true
        productFamily nullable: true, blank: true
    }

    @Override	// Override toString for a nicer / more descriptive UI
    public String toString() {
        return "${productCategory}";
    }
}
