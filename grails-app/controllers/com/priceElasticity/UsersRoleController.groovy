package com.priceElasticity

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

/**
 * UsersRoleController
 * A controller class handles incoming web requests and performs actions such as redirects, rendering views and so on.
 */
@Secured(['ROLE_ADMIN','ROLE_USER'])
@Transactional(readOnly = true)
class UsersRoleController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond UsersRole.list(params), model: [usersRoleInstanceCount: UsersRole.count()]
    }

    def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond UsersRole.list(params), model: [usersRoleInstanceCount: UsersRole.count()]
    }

    def show(UsersRole usersRoleInstance) {
        respond usersRoleInstance
    }

    def create() {
        respond new UsersRole(params)
    }

    @Transactional
    def save(UsersRole usersRoleInstance) {
        if (usersRoleInstance == null) {
            notFound()
            return
        }

        if (usersRoleInstance.hasErrors()) {
            respond usersRoleInstance.errors, view: 'create'
            return
        }

        usersRoleInstance.save flush: true

        request.withFormat {
            form {
                flash.message = message(code: 'default.created.message', args: [message(code: 'usersRoleInstance.label', default: 'UsersRole'), usersRoleInstance.id])
                redirect usersRoleInstance
            }
            '*' { respond usersRoleInstance, [status: CREATED] }
        }
    }

    def edit(UsersRole usersRoleInstance) {
        respond usersRoleInstance
    }

    @Transactional
    def update(UsersRole usersRoleInstance) {
        if (usersRoleInstance == null) {
            notFound()
            return
        }

        if (usersRoleInstance.hasErrors()) {
            respond usersRoleInstance.errors, view: 'edit'
            return
        }

        usersRoleInstance.save flush: true

        request.withFormat {
            form {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'UsersRole.label', default: 'UsersRole'), usersRoleInstance.id])
                redirect usersRoleInstance
            }
            '*' { respond usersRoleInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(UsersRole usersRoleInstance) {

        if (usersRoleInstance == null) {
            notFound()
            return
        }

        usersRoleInstance.delete flush: true

        request.withFormat {
            form {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'UsersRole.label', default: 'UsersRole'), usersRoleInstance.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'usersRoleInstance.label', default: 'UsersRole'), params.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NOT_FOUND }
        }
    }
}
