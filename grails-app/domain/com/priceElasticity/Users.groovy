package com.priceElasticity

class Users {

	transient springSecurityService

    /* Default (injected) attributes of GORM */
    Long	id
    Long	version

    /* Automatic timestamping of GORM */
    Date	dateCreated
    Date	lastUpdated

	String username
	String password
    String email
    String securityQuestion
    String securityAnswer
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	static transients = ['springSecurityService']

	static constraints = {
		username blank: false, nullable: true, unique: true
		password blank: false, nullable: false
        email blank: false, nullable: false
        securityQuestion blank: false, nullable: false
        securityAnswer blank: false, nullable: false
	}

	static mapping = {
		password column: '`password`'
	}

	Set<Role> getAuthorities() {
		UsersRole.findAllByUsers(this).collect { it.role }
	}

	def beforeInsert() {
		encodePassword()
	}

	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}

    @Override	// Override toString for a nicer / more descriptive UI
    public String toString() {
        return "${username}";
    }
}
