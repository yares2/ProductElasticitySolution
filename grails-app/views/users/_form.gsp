<%@ page import="com.priceElasticity.Users" %>



			<div class="${hasErrors(bean: usersInstance, field: 'username', 'error')} ">
				<label for="username" class="control-label"><g:message code="users.username.label" default="Username" /></label>
				<div>
					<g:textField class="form-control" name="username" value="${usersInstance?.username}"/>
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'username', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'password', 'error')} required">
				<label for="password" class="control-label"><g:message code="users.password.label" default="Password" /><span class="required-indicator">*</span></label>
				<div>
					<g:textField class="form-control" name="password" required="" value="${usersInstance?.password}"/>
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'password', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'email', 'error')} required">
				<label for="email" class="control-label"><g:message code="users.email.label" default="Email" /><span class="required-indicator">*</span></label>
				<div>
					<g:textField class="form-control" name="email" required="" value="${usersInstance?.email}"/>
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'email', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'securityQuestion', 'error')} required">
				<label for="securityQuestion" class="control-label"><g:message code="users.securityQuestion.label" default="Security Question" /><span class="required-indicator">*</span></label>
				<div>
					<g:textField class="form-control" name="securityQuestion" required="" value="${usersInstance?.securityQuestion}"/>
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'securityQuestion', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'securityAnswer', 'error')} required">
				<label for="securityAnswer" class="control-label"><g:message code="users.securityAnswer.label" default="Security Answer" /><span class="required-indicator">*</span></label>
				<div>
					<g:textField class="form-control" name="securityAnswer" required="" value="${usersInstance?.securityAnswer}"/>
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'securityAnswer', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'accountExpired', 'error')} ">
				<label for="accountExpired" class="control-label"><g:message code="users.accountExpired.label" default="Account Expired" /></label>
				<div>
					<bs:checkBox name="accountExpired" value="${usersInstance?.accountExpired}" />
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'accountExpired', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'accountLocked', 'error')} ">
				<label for="accountLocked" class="control-label"><g:message code="users.accountLocked.label" default="Account Locked" /></label>
				<div>
					<bs:checkBox name="accountLocked" value="${usersInstance?.accountLocked}" />
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'accountLocked', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'enabled', 'error')} ">
				<label for="enabled" class="control-label"><g:message code="users.enabled.label" default="Enabled" /></label>
				<div>
					<bs:checkBox name="enabled" value="${usersInstance?.enabled}" />
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'enabled', 'error')}</span>
				</div>
			</div>

			<div class="${hasErrors(bean: usersInstance, field: 'passwordExpired', 'error')} ">
				<label for="passwordExpired" class="control-label"><g:message code="users.passwordExpired.label" default="Password Expired" /></label>
				<div>
					<bs:checkBox name="passwordExpired" value="${usersInstance?.passwordExpired}" />
					<span class="help-inline">${hasErrors(bean: usersInstance, field: 'passwordExpired', 'error')}</span>
				</div>
			</div>

