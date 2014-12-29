
<%@ page import="com.priceElasticity.DMI_ProductClass" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'DMI_ProductClass.label', default: 'DMI_ProductClass')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-DMI_ProductClass" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-DMI_ProductClass" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list DMI_ProductClass">
			
				<g:if test="${DMI_ProductClassInstance?.productCategory}">
				<li class="fieldcontain">
					<span id="productCategory-label" class="property-label"><g:message code="DMI_ProductClass.productCategory.label" default="Product Category" /></span>
					
						<span class="property-value" aria-labelledby="productCategory-label"><g:fieldValue bean="${DMI_ProductClassInstance}" field="productCategory"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${DMI_ProductClassInstance?.productDepartment}">
				<li class="fieldcontain">
					<span id="productDepartment-label" class="property-label"><g:message code="DMI_ProductClass.productDepartment.label" default="Product Department" /></span>
					
						<span class="property-value" aria-labelledby="productDepartment-label"><g:fieldValue bean="${DMI_ProductClassInstance}" field="productDepartment"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${DMI_ProductClassInstance?.productFamily}">
				<li class="fieldcontain">
					<span id="productFamily-label" class="property-label"><g:message code="DMI_ProductClass.productFamily.label" default="Product Family" /></span>
					
						<span class="property-value" aria-labelledby="productFamily-label"><g:fieldValue bean="${DMI_ProductClassInstance}" field="productFamily"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${DMI_ProductClassInstance?.dateCreated}">
				<li class="fieldcontain">
					<span id="dateCreated-label" class="property-label"><g:message code="DMI_ProductClass.dateCreated.label" default="Date Created" /></span>
					
						<span class="property-value" aria-labelledby="dateCreated-label"><g:formatDate date="${DMI_ProductClassInstance?.dateCreated}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${DMI_ProductClassInstance?.lastUpdated}">
				<li class="fieldcontain">
					<span id="lastUpdated-label" class="property-label"><g:message code="DMI_ProductClass.lastUpdated.label" default="Last Updated" /></span>
					
						<span class="property-value" aria-labelledby="lastUpdated-label"><g:formatDate date="${DMI_ProductClassInstance?.lastUpdated}" /></span>
					
				</li>
				</g:if>
			
				<g:if test="${DMI_ProductClassInstance?.productClassId}">
				<li class="fieldcontain">
					<span id="productClassId-label" class="property-label"><g:message code="DMI_ProductClass.productClassId.label" default="Product Class Id" /></span>
					
						<span class="property-value" aria-labelledby="productClassId-label"><g:fieldValue bean="${DMI_ProductClassInstance}" field="productClassId"/></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:DMI_ProductClassInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${DMI_ProductClassInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
