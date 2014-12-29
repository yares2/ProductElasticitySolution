import grails.plugin.springsecurity.SpringSecurityUtils
import com.PriceElasticity.redirectHandler

// Place your Spring DSL code here


beans = {

    authenticationSuccessHandler(redirectHandler){
        def conf = SpringSecurityUtils.securityConfig
        requestCache = ref('requestCache')
        defaultTargetUrl = conf.successHandler.defaultTargetUrl
        alwaysUseDefaultTargetUrl = conf.successHandler.alwaysUseDefault
        targetUrlParameter = conf.successHandler.targetUrlParameter
        useReferer = conf.successHandler.useReferer
        redirectStrategy = ref('redirectStrategy')
        adminUrl = "/adminHome/index"
        userUrl = "/userHome/list"
    }
}

