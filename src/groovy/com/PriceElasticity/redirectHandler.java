package com.PriceElasticity;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import grails.plugin.springsecurity.SpringSecurityUtils;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;


/**
 * Created by Yarelis on 12/23/14.
 */

public class redirectHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    @Override
    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response){
        boolean hasAdmin = SpringSecurityUtils.ifAllGranted("ROLE_ADMIN");
        boolean hasUser = SpringSecurityUtils.ifAllGranted("ROLE_USER");


        if(hasAdmin){
            return adminUrl;
        }
        else if(hasUser){
            return userUrl;
        }
        else{
            return super.determineTargetUrl(request, response);
        }
    }

    private String adminUrl;
    private String userUrl;

    public void setAdminUrl(String adminUrl){
        this.adminUrl = adminUrl;
    }
    public void setUserUrl(String userUrl){
        this.userUrl = userUrl;
    }

}
