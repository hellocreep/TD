from django.conf.urls.defaults import patterns, include, url
import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pool.views.home', name='home'),
    # url(r'^pool/', include('pool.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    
)

urlpatterns += patterns('',
    (r'^assets/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.ASSETS_ROOT}),
    (r'^imagesnew/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.IMAGES_ROOT}),
)

urlpatterns += patterns('TD.views',
    (r'^index$', 'index'),
    (r'^get-to-tibet/$', 'get_to_tibet'),
    (r'^hotel-index/$', 'hotel_index'),
    (r'^hotel-lhasa/$','hotel_lhasa'),
    (r'^train-to-tibet/$', 'train_to_tibet'),
    (r'^flight-to-tibet/$','flight_to_tibet'),
    (r'^hotel-form/$','hotel_form'),
    (r'^aboutus/$','aboutus'),
    (r'^contactus/$','contactus'),
    (r'^whychooseus/$','whychooseus'),
    (r'^ourteam/$','ourteam'),
    (r'^salesteam/$','salesteam'),
    (r'^quickform/$','quick_form'),
    (r'^whatwedo/$','whatwedo'),
    (r'^tourguide/$','tourguide'), 
    (r'^travelsytle/$','travelsytle'),    
    (r'^itinerary/$','itinerary'),
    (r'^share/$','share'),
    (r'^form/$','form'),
    (r'^$','sitemap'),
)