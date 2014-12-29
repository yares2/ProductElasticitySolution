<%--
  Created by IntelliJ IDEA.
  User: Yarelis
  Date: 12/23/14
  Time: 4:06 PM
--%>

<html>

<head>
    <title><g:message code="views.adminHome.index.title" default="Consola del Administrador"/></title>
    <meta name="layout" content="kickstart" />

    <g:set var="layout_nomainmenu"		value="${true}" scope="request"/>
    <g:set var="layout_nosecondarymenu"	value="${true}" scope="request"/>
    %{--<meta name="layout" content="/adminDashboard/adminDashboard" />--}%
</head>

<body>

<div class="row-fluid">
    <div class="span3">
        <g:render template="/layouts/sidebar-nav"/>
    </div><!
    <div class="span9">
        <div class="row-fluid">
            <div class="span12">
                <h2><g:message code="views.adminHome.index.welcome" default="Bienvenidos a la Consola del Administrador" /></h2>

                <p>
                    Test!!!!
                </p>

            </div><!--/span-->
        </div><!--/row-->
    </div><!--/span-->
</div>

</body>

</html>
