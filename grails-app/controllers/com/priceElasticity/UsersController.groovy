package com.priceElasticity

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

/**
 * UsersController
 * A controller class handles incoming web requests and performs actions such as redirects, rendering views and so on.
 */
@Secured(['ROLE_ADMIN','ROLE_USER'])
@Transactional(readOnly = true)
class UsersController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

	def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Users.list(params), model:[usersInstanceCount: Users.count()]
    }

	def list(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Users.list(params), model:[usersInstanceCount: Users.count()]
    }

    def show(Users usersInstance) {
        respond usersInstance
    }

    def create() {
        respond new Users(params)
    }

    @Transactional
    def save(Users usersInstance) {
        if (usersInstance == null) {
            notFound()
            return
        }

        if (usersInstance.hasErrors()) {
            respond usersInstance.errors, view:'create'
            return
        }

        usersInstance.save flush:true

        request.withFormat {
            form {
                flash.message = message(code: 'default.created.message', args: [message(code: 'usersInstance.label', default: 'Users'), usersInstance.id])
                redirect usersInstance
            }
            '*' { respond usersInstance, [status: CREATED] }
        }
    }

    def edit(Users usersInstance) {
        respond usersInstance
    }

    @Transactional
    def update(Users usersInstance) {
        if (usersInstance == null) {
            notFound()
            return
        }

        if (usersInstance.hasErrors()) {
            respond usersInstance.errors, view:'edit'
            return
        }

        usersInstance.save flush:true

        request.withFormat {
            form {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'Users.label', default: 'Users'), usersInstance.id])
                redirect usersInstance
            }
            '*'{ respond usersInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(Users usersInstance) {

        if (usersInstance == null) {
            notFound()
            return
        }

        usersInstance.delete flush:true

        request.withFormat {
            form {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'Users.label', default: 'Users'), usersInstance.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'usersInstance.label', default: 'Users'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
