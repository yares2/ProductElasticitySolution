
<%@ page import="com.priceElasticity.DMI_ProductClass" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'DMI_ProductClass.label', default: 'DMI_ProductClass')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-DMI_ProductClass" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-DMI_ProductClass" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>
					
						<g:sortableColumn property="productCategory" title="${message(code: 'DMI_ProductClass.productCategory.label', default: 'Product Category')}" />
					
						<g:sortableColumn property="productDepartment" title="${message(code: 'DMI_ProductClass.productDepartment.label', default: 'Product Department')}" />
					
						<g:sortableColumn property="productFamily" title="${message(code: 'DMI_ProductClass.productFamily.label', default: 'Product Family')}" />
					
						<g:sortableColumn property="dateCreated" title="${message(code: 'DMI_ProductClass.dateCreated.label', default: 'Date Created')}" />
					
						<g:sortableColumn property="lastUpdated" title="${message(code: 'DMI_ProductClass.lastUpdated.label', default: 'Last Updated')}" />
					
						<g:sortableColumn property="productClassId" title="${message(code: 'DMI_ProductClass.productClassId.label', default: 'Product Class Id')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${DMI_ProductClassInstanceList}" status="i" var="DMI_ProductClassInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${DMI_ProductClassInstance.id}">${fieldValue(bean: DMI_ProductClassInstance, field: "productCategory")}</g:link></td>
					
						<td>${fieldValue(bean: DMI_ProductClassInstance, field: "productDepartment")}</td>
					
						<td>${fieldValue(bean: DMI_ProductClassInstance, field: "productFamily")}</td>
					
						<td><g:formatDate date="${DMI_ProductClassInstance.dateCreated}" /></td>
					
						<td><g:formatDate date="${DMI_ProductClassInstance.lastUpdated}" /></td>
					
						<td>${fieldValue(bean: DMI_ProductClassInstance, field: "productClassId")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${DMI_ProductClassInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
