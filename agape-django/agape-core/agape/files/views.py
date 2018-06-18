from rest_framework import permissions,status,views,viewsets
from rest_framework.response import Response
from rest_framework import generics

from .models import File
from .serializers import FileSerializer


from agape.signals import trigger
from django.core.files.storage import FileSystemStorage
import mimetypes
import json

class FileViewSet(viewsets.ModelViewSet):
    """ Viewset that provides CRUD operations for people.

    Extends:
        viewset.ModelViewSet

    """

    queryset = File.objects.all()
    serializer_class = FileSerializer
    context = 'files'



    def create(self,request,*args,**kwargs):
        """ Perform file upload.
            
            Accepts multi-part form data to handle file uploads.
        """
        # trigger(self.context+'.create:request',request,*args,**kwargs)

        # data = request.data.copy()
        # trigger(self.context+'.create:before',data)

        # check for the existence of the file key in the request
        if not 'file' in request.FILES:

            # throw error if no file field supplied
            message  = {'status':'fail', 'message': 'No field matching name "file" is present.'}
            response = Response({'status':'fail'}, status=status.HTTP_400_BAD_REQUEST)
            trigger(self.context+'.create:fail',response)
            return response            

        # store the file to the file system
        file = request.FILES['file']

        fs = FileSystemStorage()
        filename = fs.save(file.name, file)
        uploaded_file_url = fs.url(filename)

        # store the relative path to the file on disk
        request.data['path'] = filename;

        # call the parent create method
        return super().create(request,*args,**kwargs)




class FileDownloadView(views.APIView):

    context = 'file'

    def retrieve(self,request,*args,**kwargs):

        print('GET FILE')

        kwargs['pk']=1

        trigger(self.context+'.download:request',request,*args,**kwargs)

        trigger(self.context+'.download:before',kwargs['pk'])

        instance = File.objects.get(pk=kwargs['pk'])
        mimetype = mimetypes.guess_type(instance.full_path())

        # open the file
        filepointer = open(instance.full_path(),"r")

        # stream file to http response
        response = HttpResponse(filepointer,content_type=mimetype)
        response['Content-Disposition'] = 'attachment; filename={}'.format( instance.name )


        return response



