package com.priceElasticity



import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class DMI_ProductClassController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond DMI_ProductClass.list(params), model: [DMI_ProductClassInstanceCount: DMI_ProductClass.count()]
    }

    def show(DMI_ProductClass DMI_ProductClassInstance) {
        respond DMI_ProductClassInstance
    }

    def create() {
        respond new DMI_ProductClass(params)
    }

    @Transactional
    def save(DMI_ProductClass DMI_ProductClassInstance) {
        if (DMI_ProductClassInstance == null) {
            notFound()
            return
        }

        if (DMI_ProductClassInstance.hasErrors()) {
            respond DMI_ProductClassInstance.errors, view: 'create'
            return
        }

        DMI_ProductClassInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'DMI_ProductClass.label', default: 'DMI_ProductClass'), DMI_ProductClassInstance.id])
                redirect DMI_ProductClassInstance
            }
            '*' { respond DMI_ProductClassInstance, [status: CREATED] }
        }
    }

    def edit(DMI_ProductClass DMI_ProductClassInstance) {
        respond DMI_ProductClassInstance
    }

    @Transactional
    def update(DMI_ProductClass DMI_ProductClassInstance) {
        if (DMI_ProductClassInstance == null) {
            notFound()
            return
        }

        if (DMI_ProductClassInstance.hasErrors()) {
            respond DMI_ProductClassInstance.errors, view: 'edit'
            return
        }

        DMI_ProductClassInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'DMI_ProductClass.label', default: 'DMI_ProductClass'), DMI_ProductClassInstance.id])
                redirect DMI_ProductClassInstance
            }
            '*' { respond DMI_ProductClassInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(DMI_ProductClass DMI_ProductClassInstance) {

        if (DMI_ProductClassInstance == null) {
            notFound()
            return
        }

        DMI_ProductClassInstance.delete flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'DMI_ProductClass.label', default: 'DMI_ProductClass'), DMI_ProductClassInstance.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'DMI_ProductClass.label', default: 'DMI_ProductClass'), params.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NOT_FOUND }
        }
    }
}
