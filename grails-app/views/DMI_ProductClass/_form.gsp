<%@ page import="com.priceElasticity.DMI_ProductClass" %>



<div class="fieldcontain ${hasErrors(bean: DMI_ProductClassInstance, field: 'productCategory', 'error')} ">
	<label for="productCategory">
		<g:message code="DMI_ProductClass.productCategory.label" default="Product Category" />
		
	</label>
	<g:textField name="productCategory" value="${DMI_ProductClassInstance?.productCategory}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: DMI_ProductClassInstance, field: 'productDepartment', 'error')} ">
	<label for="productDepartment">
		<g:message code="DMI_ProductClass.productDepartment.label" default="Product Department" />
		
	</label>
	<g:textField name="productDepartment" value="${DMI_ProductClassInstance?.productDepartment}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: DMI_ProductClassInstance, field: 'productFamily', 'error')} ">
	<label for="productFamily">
		<g:message code="DMI_ProductClass.productFamily.label" default="Product Family" />
		
	</label>
	<g:textField name="productFamily" value="${DMI_ProductClassInstance?.productFamily}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: DMI_ProductClassInstance, field: 'productClassId', 'error')} required">
	<label for="productClassId">
		<g:message code="DMI_ProductClass.productClassId.label" default="Product Class Id" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="productClassId" type="number" value="${DMI_ProductClassInstance.productClassId}" required=""/>

</div>

