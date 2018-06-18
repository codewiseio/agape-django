from agape.signals import trigger
from rest_framework import permissions,status,views,viewsets
from rest_framework.response import Response



class ModelViewSet(viewsets.ModelViewSet):


	def create(self, request, *args, **kwargs):

		# emit signal
		trigger(self.context+'.create:request',request,*args,**kwargs)

		# get a copy of the request data
		data = request.data.copy()
		trigger(self.context+'.create:before',data)

		# create new instance
		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		instance = self.perform_create(serializer)
		trigger(self.context+'.create:success',instance)
		
		# serialize instance data
		serializer = self.get_serializer(instance)
		serialized_data = serializer.data
		trigger(self.context+'.create:serialize',serialized_data)		

		# return a response
		headers = self.get_success_headers(serialized_data)
		response = Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
		trigger(self.context+'.create:response',response)
		return response

	def perform_create(self, serializer):
		instance = serializer.save()
		return instance

	def retrieve(self, request, *args, **kwargs):
		trigger(self.context+'.retrieve:request',request,*args,**kwargs)

		trigger(self.context+'.retrieve:before',kwargs['pk'])

		instance = self.get_object()
		trigger(self.context+'.retrieve:success',instance)

		serializer = self.get_serializer(instance)
		data = serializer.data
		trigger(self.context+'.retrieve:serialize',data)

		response = Response(data)
		trigger(self.context+'.retrieve:response',response)
		return response

	def update(self, request, *args, **kwargs):
		trigger(self.context+'.update:request',request,*args,**kwargs)

		partial = kwargs.pop('partial', False)        
		instance = self.get_object()
		trigger(self.context+'.update:retrieve',instance)

		data = kwargs.get('data') or request.data
		trigger(self.context+'.update:before',data)

		serializer = self.get_serializer(instance, data=request.data, partial=partial)
		serializer.is_valid(raise_exception=True)
		instance = self.perform_update(serializer)
		trigger(self.context+'.update:success',instance)
        
		data = serializer.data
		trigger(self.context+'.update:serialize',data)	

		response = Response(data)
		trigger(self.context+'.update:response',response)
		return response

	def perform_update(self, serializer):
		instance = serializer.save()
		return instance

	def destroy(self, request, *args, **kwargs):

		trigger(self.context+'.destroy:request',request,*args,**kwargs)
		
		instance = self.get_object()
		trigger(self.context+'.destroy:before',instance)

		self.perform_destroy(instance)
		trigger(self.context+'.destroy:success',instance)

		response = Response(status=status.HTTP_204_NO_CONTENT)
		trigger(self.context+'.destroy:response',response)

		return response

	def list(self, request, *args, **kwargs):
		queryset = self.filter_queryset(self.get_queryset())

		page = self.paginate_queryset(queryset)
		if page is not None:
		    serializer = self.get_serializer(page, many=True)
		    return self.get_paginated_response(serializer.data)

		serializer = self.get_serializer(queryset, many=True)
		return Response(serializer.data)      

	def perform_destroy(self, instance):
		instance.delete()


