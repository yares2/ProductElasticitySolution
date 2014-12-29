package com.priceElasticity



import grails.test.mixin.*
import spock.lang.*

@TestFor(UsersRoleController)
@Mock(UsersRole)
class UsersRoleControllerSpec extends Specification {

    def populateValidParams(params) {
        assert params != null
        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
    }

    void "Test the index action returns the correct model"() {

        when: "The index action is executed"
        controller.index()

        then: "The model is correct"
        !model.usersRoleInstanceList
        model.usersRoleInstanceCount == 0
    }

    void "Test the create action returns the correct model"() {
        when: "The create action is executed"
        controller.create()

        then: "The model is correctly created"
        model.usersRoleInstance != null
    }

    void "Test the save action correctly persists an instance"() {

        when: "The save action is executed with an invalid instance"
        def usersRole = new UsersRole()
        usersRole.validate()
        controller.save(usersRole)

        then: "The create view is rendered again with the correct model"
        model.usersRoleInstance != null
        view == 'create'

        when: "The save action is executed with a valid instance"
        response.reset()
        populateValidParams(params)
        usersRole = new UsersRole(params)

        controller.save(usersRole)

        then: "A redirect is issued to the show action"
        response.redirectedUrl == '/usersRole/show/1'
        controller.flash.message != null
        UsersRole.count() == 1
    }

    void "Test that the show action returns the correct model"() {
        when: "The show action is executed with a null domain"
        controller.show(null)

        then: "A 404 error is returned"
        response.status == 404

        when: "A domain instance is passed to the show action"
        populateValidParams(params)
        def usersRole = new UsersRole(params)
        controller.show(usersRole)

        then: "A model is populated containing the domain instance"
        model.usersRoleInstance == usersRole
    }

    void "Test that the edit action returns the correct model"() {
        when: "The edit action is executed with a null domain"
        controller.edit(null)

        then: "A 404 error is returned"
        response.status == 404

        when: "A domain instance is passed to the edit action"
        populateValidParams(params)
        def usersRole = new UsersRole(params)
        controller.edit(usersRole)

        then: "A model is populated containing the domain instance"
        model.usersRoleInstance == usersRole
    }

    void "Test the update action performs an update on a valid domain instance"() {
        when: "Update is called for a domain instance that doesn't exist"
        controller.update(null)

        then: "A 404 error is returned"
        response.redirectedUrl == '/usersRole/index'
        flash.message != null


        when: "An invalid domain instance is passed to the update action"
        response.reset()
        def usersRole = new UsersRole()
        usersRole.validate()
        controller.update(usersRole)

        then: "The edit view is rendered again with the invalid instance"
        view == 'edit'
        model.usersRoleInstance == usersRole

        when: "A valid domain instance is passed to the update action"
        response.reset()
        populateValidParams(params)
        usersRole = new UsersRole(params).save(flush: true)
        controller.update(usersRole)

        then: "A redirect is issues to the show action"
        response.redirectedUrl == "/usersRole/show/$usersRole.id"
        flash.message != null
    }

    void "Test that the delete action deletes an instance if it exists"() {
        when: "The delete action is called for a null instance"
        controller.delete(null)

        then: "A 404 is returned"
        response.redirectedUrl == '/usersRole/index'
        flash.message != null

        when: "A domain instance is created"
        response.reset()
        populateValidParams(params)
        def usersRole = new UsersRole(params).save(flush: true)

        then: "It exists"
        UsersRole.count() == 1

        when: "The domain instance is passed to the delete action"
        controller.delete(usersRole)

        then: "The instance is deleted"
        UsersRole.count() == 0
        response.redirectedUrl == '/usersRole/index'
        flash.message != null
    }
}
