<%@ page import="com.priceElasticity.UsersRole" %>



			<div class="${hasErrors(bean: usersRoleInstance, field: 'role', 'error')} required">
				<label for="role" class="control-label"><g:message code="usersRole.role.label" default="Role" /><span class="required-indicator">*</span></label>
				<div>
					<g:select class="form-control" id="role" name="role.id" from="${com.priceElasticity.Role.list()}" optionKey="id" required="" value="${usersRoleInstance?.role?.id}" class="many-to-one"/>
					<span class="help-inline">${hasErrors(bean: usersRoleInstance, field: 'role', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersRoleInstance, field: 'users', 'error')} required">
				<label for="users" class="control-label"><g:message code="usersRole.users.label" default="Users" /><span class="required-indicator">*</span></label>
				<div>
					<g:select class="form-control" id="users" name="users.id" from="${com.priceElasticity.Users.list()}" optionKey="id" required="" value="${usersRoleInstance?.users?.id}" class="many-to-one"/>
					<span class="help-inline">${hasErrors(bean: usersRoleInstance, field: 'users', 'error')}</span>
				</div>
			</div>

