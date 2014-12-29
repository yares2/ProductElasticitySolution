package com.priceElasticity

import org.apache.commons.lang.builder.HashCodeBuilder

class UsersRole implements Serializable {

	private static final long serialVersionUID = 1

	Users users
	Role role

	boolean equals(other) {
		if (!(other instanceof UsersRole)) {
			return false
		}

		other.users?.id == users?.id &&
		other.role?.id == role?.id
	}

	int hashCode() {
		def builder = new HashCodeBuilder()
		if (users) builder.append(users.id)
		if (role) builder.append(role.id)
		builder.toHashCode()
	}

	static UsersRole get(long usersId, long roleId) {
		UsersRole.where {
			users == Users.load(usersId) &&
			role == Role.load(roleId)
		}.get()
	}

	static boolean exists(long usersId, long roleId) {
		UsersRole.where {
			users == Users.load(usersId) &&
			role == Role.load(roleId)
		}.count() > 0
	}

	static UsersRole create(Users users, Role role, boolean flush = false) {
		def instance = new UsersRole(users: users, role: role)
		instance.save(flush: flush, insert: true)
		instance
	}

	static boolean remove(Users u, Role r, boolean flush = false) {
		if (u == null || r == null) return false

		int rowCount = UsersRole.where {
			users == Users.load(u.id) &&
			role == Role.load(r.id)
		}.deleteAll()

		if (flush) { UsersRole.withSession { it.flush() } }

		rowCount > 0
	}

	static void removeAll(Users u, boolean flush = false) {
		if (u == null) return

		UsersRole.where {
			users == Users.load(u.id)
		}.deleteAll()

		if (flush) { UsersRole.withSession { it.flush() } }
	}

	static void removeAll(Role r, boolean flush = false) {
		if (r == null) return

		UsersRole.where {
			role == Role.load(r.id)
		}.deleteAll()

		if (flush) { UsersRole.withSession { it.flush() } }
	}

	static constraints = {
		role validator: { Role r, UsersRole ur ->
			if (ur.users == null) return
			boolean existing = false
			UsersRole.withNewSession {
				existing = UsersRole.exists(ur.users.id, r.id)
			}
			if (existing) {
				return 'userRole.exists'
			}
		}
	}

	static mapping = {
		id composite: ['role', 'users']
		version false
	}
}
