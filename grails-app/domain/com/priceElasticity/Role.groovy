package com.priceElasticity

class Role {

    /* Default (injected) attributes of GORM */
    Long	id
    Long	version

    /* Automatic timestamping of GORM */
    Date	dateCreated
    Date	lastUpdated

	String authority

	static mapping = {

	}

	static constraints = {
		authority blank: false, unique: true
	}

    @Override	// Override toString for a nicer / more descriptive UI
    public String toString() {
        return "${authority}";
    }
}
