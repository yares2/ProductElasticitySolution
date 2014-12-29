
<%@ page import="com.priceElasticity.UsersRole" %>
<!DOCTYPE html>
<html>

<head>
	<meta name="layout" content="kickstart" />
	<g:set var="entityName" value="${message(code: 'usersRole.label', default: 'UsersRole')}" />
	<title><g:message code="default.show.label" args="[entityName]" /></title>
</head>

<body>

<section id="show-usersRole" class="first">

	<table class="table">
		<tbody>
		
			<tr class="prop">
				<td valign="top" class="name"><g:message code="usersRole.role.label" default="Role" /></td>
				
				<td valign="top" class="value"><g:link controller="role" action="show" id="${usersRoleInstance?.role?.id}">${usersRoleInstance?.role?.encodeAsHTML()}</g:link></td>
				
			</tr>
		
			<tr class="prop">
				<td valign="top" class="name"><g:message code="usersRole.users.label" default="Users" /></td>
				
				<td valign="top" class="value"><g:link controller="users" action="show" id="${usersRoleInstance?.users?.id}">${usersRoleInstance?.users?.encodeAsHTML()}</g:link></td>
				
			</tr>
		
		</tbody>
	</table>
</section>

</body>

</html>
