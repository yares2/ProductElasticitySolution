
<%@ page import="com.priceElasticity.Users" %>
<!DOCTYPE html>
<html>

<head>
	<meta name="layout" content="kickstart" />
	<g:set var="entityName" value="${message(code: 'users.label', default: 'Users')}" />
	<title><g:message code="default.list.label" args="[entityName]" /></title>
</head>

<body>

<section id="list-users" class="first">

	<table class="table table-bordered margin-top-medium">
		<thead>
			<tr>
			
				<g:sortableColumn property="username" title="${message(code: 'users.username.label', default: 'Username')}" />
			
				<g:sortableColumn property="password" title="${message(code: 'users.password.label', default: 'Password')}" />
			
				<g:sortableColumn property="email" title="${message(code: 'users.email.label', default: 'Email')}" />
			
				<g:sortableColumn property="securityQuestion" title="${message(code: 'users.securityQuestion.label', default: 'Security Question')}" />
			
				<g:sortableColumn property="securityAnswer" title="${message(code: 'users.securityAnswer.label', default: 'Security Answer')}" />
			
				<g:sortableColumn property="accountExpired" title="${message(code: 'users.accountExpired.label', default: 'Account Expired')}" />
			
			</tr>
		</thead>
		<tbody>
		<g:each in="${usersInstanceList}" status="i" var="usersInstance">
			<tr class="${(i % 2) == 0 ? 'odd' : 'even'}">
			
				<td><g:link action="show" id="${usersInstance.id}">${fieldValue(bean: usersInstance, field: "username")}</g:link></td>
			
				<td>${fieldValue(bean: usersInstance, field: "password")}</td>
			
				<td>${fieldValue(bean: usersInstance, field: "email")}</td>
			
				<td>${fieldValue(bean: usersInstance, field: "securityQuestion")}</td>
			
				<td>${fieldValue(bean: usersInstance, field: "securityAnswer")}</td>
			
				<td><g:formatBoolean boolean="${usersInstance.accountExpired}" /></td>
			
			</tr>
		</g:each>
		</tbody>
	</table>
	<div>
		<bs:paginate total="${usersInstanceCount}" />
	</div>
</section>

</body>

</html>
