
<%@ page import="com.priceElasticity.UsersRole" %>
<!DOCTYPE html>
<html>

<head>
	<meta name="layout" content="kickstart" />
	<g:set var="entityName" value="${message(code: 'usersRole.label', default: 'UsersRole')}" />
	<title><g:message code="default.list.label" args="[entityName]" /></title>
</head>

<body>

<section id="list-usersRole" class="first">

	<table class="table table-bordered margin-top-medium">
		<thead>
			<tr>
			
				<th><g:message code="usersRole.role.label" default="Role" /></th>
			
				<th><g:message code="usersRole.users.label" default="Users" /></th>
			
			</tr>
		</thead>
		<tbody>
		<g:each in="${usersRoleInstanceList}" status="i" var="usersRoleInstance">
			<tr class="${(i % 2) == 0 ? 'odd' : 'even'}">
			
				<td><g:link action="show" id="${usersRoleInstance.id}">${fieldValue(bean: usersRoleInstance, field: "role")}</g:link></td>
			
				<td>${fieldValue(bean: usersRoleInstance, field: "users")}</td>
			
			</tr>
		</g:each>
		</tbody>
	</table>
	<div>
		<bs:paginate total="${usersRoleInstanceCount}" />
	</div>
</section>

</body>

</html>
