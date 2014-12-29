package com.priceElasticity

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class UserHomeController {

    def index() {}
}
