from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/v1/', include('agape.authentication.urls') ),
    url(r'^api/v1/', include('agape.people.urls') ),
    url(r'^api/v1/', include('agape.contacts.urls') ),
    url(r'^api/v1/', include('agape.organizations.urls') ),
    url(r'^api/v1/', include('agape.groups.urls') ),
    url(r'^api/v1/', include('agape.members.urls') ),
    url(r'^api/v1/', include('agape.events.urls') ),
    url(r'^api/v1/', include('agape.files.urls') ),
 		url(r'^api/v1/', include('agape.properties.urls') ),
       
]
