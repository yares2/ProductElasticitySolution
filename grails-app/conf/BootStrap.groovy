import com.priceElasticity.Users
import com.priceElasticity.Role
import com.priceElasticity.UsersRole


class BootStrap {

    def init = { servletContext ->

        def adminRole = new Role(authority:     'ROLE_ADMIN').save(flush: true)     // system administrator
        def userRole =  new Role(authority:     'ROLE_USER').save(flush: true)      //regular user



        def user1 = new Users(
                username: "user",
                password: "password",
                email: "user@gmail.com",
                securityQuestion: "Donde vivo",
                securityAnswer: "San Juan"
        ).save(flush: true)

        def admin = new Users(
                username: "admin",
                password: "password",
                email: "admin@gmail.com",
                securityQuestion: "Donde vivo",
                securityAnswer: "San Juan"
        ).save(flush: true)

        UsersRole.create(admin, adminRole, true)

        UsersRole.create(user1, userRole, true)




    }
    def destroy = {
    }
}